document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    let targetUser = urlParams.get('user');

    const isAuth = await checkAuth();
    if (!targetUser) {
        if (!isAuth) {
            window.location.href = '/login.html';
            return;
        }
        // fetch current user
        targetUser = JSON.parse(localStorage.getItem('user')).username;
    }

    try {
        const res = await fetch(`${API_BASE_URL}/users/${targetUser}`);
        if (!res.ok) throw new Error('User not found');

        const user = await res.json();
        const initial = user.username.charAt(0).toUpperCase();

        const html = `
            <div class="profile-header">
                <div class="profile-avatar">${initial}</div>
                <div class="profile-info">
                    <h1>${user.username}</h1>
                    <p style="color:var(--text-secondary)">Joined ${new Date(user.createdAt).toLocaleDateString()}</p>
                </div>
            </div>
            <section class="stats-row">
                <div class="card stat-box">
                    <h3>Total Solved</h3>
                    <div class="stat-value">${user.totalSolved}</div>
                </div>
                <div class="card stat-box">
                    <h3>Current Streak</h3>
                    <div class="stat-value">${user.currentStreak}</div>
                </div>
                <div class="card stat-box">
                    <h3>Badges</h3>
                    <div class="stat-value">${user.badges.length}</div>
                </div>
            </section>
            <section class="card badges-section mt-4">
                <h2>Badges</h2>
                <div class="badges-grid" id="badges-container">
                    ${user.badges.map(b => `
                        <div class="badge-card badge-earned">
                            <div class="badge-icon">🎖️</div>
                            <h4>${b.name}</h4>
                            <p>${b.description}</p>
                            <small style="color:var(--accent-yellow)">${b.rarity}</small>
                        </div>
                    `).join('')}
                    ${user.badges.length === 0 ? '<p style="color:var(--text-secondary)">No badges yet.</p>' : ''}
                </div>
            </section>
        `;

        document.getElementById('profile-content').innerHTML = html;

        if (typeof gsap !== 'undefined') {
            gsap.from('.profile-header', { y: -20, opacity: 0, duration: 0.6 });
            gsap.from('.stat-box', { y: 20, opacity: 0, duration: 0.6, stagger: 0.1, delay: 0.2 });
        }

    } catch (e) {
        document.getElementById('profile-content').innerHTML = `<h2>User not found</h2>`;
    }
});
