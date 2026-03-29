document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const mobileNumber = document.getElementById('mobileNumber').value;
    const password = document.getElementById('password').value;
    const btn = e.target.querySelector('button');

    btn.textContent = 'Logging in...';
    btn.disabled = true;

    try {
        const res = await fetch(`${API_BASE_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ mobileNumber, password }),
        });

        const data = await res.json();

        if (res.ok) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data));
            localStorage.setItem('isLoggedIn', 'true');
            showToast('Logged in successfully!');
            setTimeout(() => window.location.href = '/dashboard.html', 1000);
        } else {
            showToast(data.message || 'Login failed', 'error');
        }
    } catch (err) {
        showToast('Network error', 'error');
    } finally {
        btn.textContent = 'Log In';
        btn.disabled = false;
    }
});
