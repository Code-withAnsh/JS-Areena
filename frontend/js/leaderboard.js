document.addEventListener('DOMContentLoaded', async () => {
    try {
        const res = await fetch(`${API_BASE_URL}/users/leaderboard`);
        const users = await res.json();
        const tbody = document.getElementById('leaderboard-body');

        if (!users || users.length === 0) {
            tbody.innerHTML = `<tr><td colspan="5" style="text-align:center;">No users found yet.</td></tr>`;
            return;
        }

        let html = '';
        users.forEach((u, idx) => {
            const rankClass = idx === 0 ? 'rank-1' : idx === 1 ? 'rank-2' : idx === 2 ? 'rank-3' : '';
            const initial = u.username.charAt(0).toUpperCase();

            html += `
                <tr>
                    <td class="rank ${rankClass}">${idx === 0 ? '🏆' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : idx + 1}</td>
                    <td>
                        <div class="user-col">
                            <div class="avatar">${initial}</div>
                            <a href="/profile.html?user=${u.username}" style="font-weight: 500;">${u.username}</a>
                        </div>
                    </td>
                    <td style="color:var(--accent-green); font-weight: 600;">${u.totalSolved}</td>
                    <td>🔥 ${u.currentStreak}</td>
                    <td>🎖️ ${u.badges ? u.badges.length : 0}</td>
                </tr>
            `;
        });

        tbody.innerHTML = html;

        if (typeof gsap !== 'undefined') {
            gsap.from('#leaderboard-body tr', {
                y: 20, opacity: 0, duration: 0.5, stagger: 0.05, ease: 'power2.out'
            });
        }

    } catch (e) {
        showToast('Failed to load leaderboard', 'error');
    }
});
