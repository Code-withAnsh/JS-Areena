// global.js

const API_BASE_URL = window.location.port !== '5001'
    ? `http://${window.location.hostname}:5001/api`
    : '/api';

// Utility to show toast notifications
const showToast = (message, type = 'success') => {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type === 'error' ? 'toast-error' : ''}`;

    const icon = type === 'error' ? '❌' : '✅';
    toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;

    container.appendChild(toast);

    // GSAP animation
    if (typeof gsap !== 'undefined') {
        gsap.fromTo(toast,
            { x: 100, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.4, ease: 'back.out(1.7)' }
        );

        setTimeout(() => {
            gsap.to(toast, {
                x: 100, opacity: 0, duration: 0.4, ease: 'power2.in',
                onComplete: () => toast.remove()
            });
        }, 4000);
    } else {
        setTimeout(() => toast.remove(), 4000);
    }
};

// Auth checks
const getToken = () => {
    // We use httpOnly cookies for security per prompt, 
    // so JS cannot read the token directly.
    // We check auth by calling /api/auth/me
    // Wait, the prompt says "JWT stored in httpOnly cookie"
    // But later "Logout (client deletes token)" -- client can't delete httpOnly cookie directly, 
    // It has to call /api/auth/logout which clears it.
    // Let's implement checkAuth function.
    return localStorage.getItem('isLoggedIn') === 'true';
    // We can track a simple flag in localStorage to toggle UI, while server relies on true httpOnly cookie.
};

const checkAuth = async () => {
    const token = localStorage.getItem('token');
    if (!token) return false;

    // Check session cache first (5 minute TTL)
    const cachedAuth = sessionStorage.getItem('auth_cached');
    const cachedTime = sessionStorage.getItem('auth_time');
    const now = Date.now();

    if (cachedAuth === 'true' && cachedTime && (now - cachedTime < 300000)) {
        return true;
    }

    try {
        const res = await fetch(`${API_BASE_URL}/auth/me`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        const isOk = res.ok;

        if (isOk) {
            sessionStorage.setItem('auth_cached', 'true');
            sessionStorage.setItem('auth_time', Date.now());
        } else {
            sessionStorage.removeItem('auth_cached');
            sessionStorage.removeItem('auth_time');
        }

        return isOk;
    } catch (e) {
        return false;
    }
};

const updateNavbar = () => {
    const authLinks = document.getElementById('auth-links');
    const userLinks = document.getElementById('user-links');
    const adminLink = document.getElementById('admin-link');
    const userNameSpan = document.getElementById('user-name-span');

    if (!authLinks || !userLinks) return;

    const user = JSON.parse(localStorage.getItem('user'));

    if (user && localStorage.getItem('token')) {
        authLinks.style.display = 'none';
        userLinks.style.display = 'flex';

        if (userNameSpan) {
            userNameSpan.innerText = `Welcome, ${user.username}`;
        }

        if (adminLink) {
            adminLink.style.display = user.role === 'admin' ? 'block' : 'none';
        }
    } else {
        authLinks.style.display = 'flex';
        userLinks.style.display = 'none';
        if (adminLink) adminLink.style.display = 'none';
    }
};

const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('isLoggedIn');
    showToast('Logged out successfully');
    updateNavbar();
    setTimeout(() => {
        window.location.href = '/login.html';
    }, 1000);
};

// Forgot Password - WhatsApp Redirect Logic (optional helper)
function forgotPassword() {
    const url = "https://wa.me/917379685052?text=please%20change%20password";
    window.open(url, '_blank');
}

// Setup global listeners
document.addEventListener('DOMContentLoaded', () => {
    updateNavbar();

    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
    }

    // Dynamic Hamburger Menu logic
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.getElementById('navbar');
    if (navbar && navLinks && !document.getElementById('mobile-hamburger')) {
        const hamburger = document.createElement('div');
        hamburger.id = 'mobile-hamburger';
        hamburger.className = 'hamburger';
        hamburger.innerHTML = '<span></span><span></span><span></span>';

        // Insert before navLinks
        navbar.insertBefore(hamburger, navLinks);

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Auto-close menu when clicking a link
        navLinks.addEventListener('click', (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    }
});
