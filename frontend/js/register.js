document.getElementById('register-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const mobileNumber = document.getElementById('mobileNumber').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const btn = e.target.querySelector('button');

    btn.textContent = 'Signing up...';
    btn.disabled = true;

    try {
        const res = await fetch(`${API_BASE_URL}/auth/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, mobileNumber, email, password }),
        });

        const data = await res.json();

        if (res.ok) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data));
            localStorage.setItem('isLoggedIn', 'true');
            showToast('Account created successfully!');
            setTimeout(() => window.location.href = '/dashboard.html', 1500);
        } else {
            showToast(data.message || 'Registration failed', 'error');
        }
    } catch (err) {
        showToast('Network error', 'error');
    } finally {
        btn.textContent = 'Sign Up';
        btn.disabled = false;
    }
});
