document.addEventListener('DOMContentLoaded', async () => {
    const isAuth = await checkAuth();
    if (!isAuth) {
        window.location.href = '/login.html';
        return;
    }

    fetchDashboardData();
});

let globalActivityMap = {};

async function fetchDashboardData() {
    try {
        const res = await fetch(`${API_BASE_URL}/auth/me`, {
            headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        });

        if (!res.ok) throw new Error('Failed to load dashboard');

        const user = await res.json();
        globalActivityMap = user.activityMap || {};
        populateStats(user);

        const currentYear = new Date().getFullYear();
        setupYearSidebar(currentYear);
        renderHeatmap(currentYear);

        renderBadges(user.badges);

        if (typeof gsap !== 'undefined') {
            gsap.from('.stat-box', { y: 20, opacity: 0, duration: 0.6, stagger: 0.1 });
            gsap.from('.progress-section', { x: -30, opacity: 0, duration: 0.8 });
            gsap.from('.badges-section', { y: 30, opacity: 0, duration: 0.8 });
        }

    } catch (error) {
        showToast(error.message, 'error');
    }
}

function setupYearSidebar(currentYear) {
    const sidebar = document.getElementById('year-sidebar');
    if (!sidebar) return;

    let html = '';
    // Let's show the current year + last 2 years (like GitHub)
    for (let i = 0; i < 3; i++) {
        const year = currentYear - i;
        html += `<button class="year-btn ${i === 0 ? 'active' : ''}" onclick="changeYear(${year})">${year}</button>`;
    }
    sidebar.innerHTML = html;
}

function changeYear(year) {
    // Update active button
    document.querySelectorAll('.year-btn').forEach(btn => {
        btn.classList.toggle('active', btn.innerText == year);
    });

    // Update label
    document.getElementById('activity-year-label').innerText = `(${year})`;

    renderHeatmap(year);
}

function renderHeatmap(year) {
    const container = document.getElementById('heatmap');
    const monthContainer = document.getElementById('month-labels');
    const totalLabel = document.getElementById('total-contributions');
    if (!container || !monthContainer) return;

    let html = '';
    let monthHtml = '';
    let totalYearly = 0;

    const startDate = new Date(year, 0, 1);
    const endDate = new Date(year, 11, 31);

    // Day of week for Jan 1st (0=Sun, 1=Mon...)
    // GitHub typically starts weeks on Sunday. Let's align with Mon-Sun specifically if requested
    // but standard Grid flow column is easier if we just render 365+ days.
    const startOffset = startDate.getDay(); // 0 is Sunday

    // To make it look like GitHub (7 rows):
    // Total cells = 365 (or 366 for leap) + offset
    const daysInYear = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) ? 366 : 365;

    // Handle Month Labels
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    months.forEach(m => monthHtml += `<span>${m}</span>`);
    monthContainer.innerHTML = monthHtml;

    // Render cells
    // Since we use grid-auto-flow: column, we just append cells in order of days
    // but we need empty cells to align the first week correctly.
    for (let i = 0; i < startOffset; i++) {
        html += `<div class="heat-cell heat-empty" style="visibility: hidden;"></div>`;
    }

    for (let i = 0; i < daysInYear; i++) {
        const d = new Date(year, 0, i + 1);
        // Fix UTC timezone shift by constructing YYYY-MM-DD manually
        const dateStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
        const count = globalActivityMap[dateStr] || 0;
        totalYearly += count;

        let level = 0;
        if (count > 0 && count <= 2) level = 1;
        else if (count > 2 && count <= 5) level = 2;
        else if (count > 5 && count <= 10) level = 3;
        else if (count > 10) level = 4;

        const dateDisplay = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
        const tooltip = `${count} contributions on ${dateDisplay}`;

        html += `<div class="heat-cell heat-${level}" data-tooltip="${tooltip}"></div>`;
    }

    container.innerHTML = html;
    totalLabel.innerText = `${totalYearly} contributions in ${year}`;
}

function populateStats(user) {
    document.getElementById('greeting').innerText = `Welcome back, ${user.username}!`;
    document.getElementById('streak-text').innerText = `🔥 ${user.currentStreak}-day streak`;

    const totalProbs = user.totalPlatformProblems || 300;

    document.getElementById('total-solved').innerText = `${user.totalSolved}/${totalProbs}`;
    document.getElementById('current-streak').innerText = user.currentStreak;
    document.getElementById('longest-streak').innerText = user.longestStreak;
    document.getElementById('badges-count').innerText = user.badges.length;

    // Difficulty Breakdowns
    document.getElementById('easy-solved').innerText = user.easySolved;
    document.getElementById('medium-solved').innerText = user.mediumSolved;
    document.getElementById('hard-solved').innerText = user.hardSolved;
    document.getElementById('dsa-solved').innerText = user.dsaSolved;

    // Main progress bar
    const pct = Math.min((user.totalSolved / totalProbs) * 100, 100);
    setTimeout(() => {
        document.getElementById('solved-fill').style.width = `${pct}%`;
    }, 500);
}

function renderBadges(earnedBadges) {
    const container = document.getElementById('badges-container');
    if (!container) return;

    const earnedIds = earnedBadges.map(b => b._id.toString());

    // Dummy data for all possible badges if we want to show unearned
    // In a real app, we fetch all badges from an API
    // For the frontend, we'll just render earned and a few mocks for unearned
    let html = '';
    earnedBadges.forEach(b => {
        html += `
      <div class="badge-card badge-earned">
        <div class="badge-icon">🎖️</div>
        <h4>${b.name}</h4>
        <p>${b.description}</p>
        <small style="color:var(--accent-yellow)">${b.rarity}</small>
      </div>
    `;
    });

    // Mock unearned
    html += `
    <div class="badge-card unearned">
      <div class="badge-icon">🔒</div>
      <h4>DSA Slayer</h4>
      <p>Solve 50 DSA problems</p>
      <small>Epic</small>
    </div>
    <div class="badge-card unearned">
      <div class="badge-icon">🔒</div>
      <h4>Century Streak</h4>
      <p>Achieve a 100-day streak</p>
      <small>Legendary</small>
    </div>
  `;

    container.innerHTML = html;
}
