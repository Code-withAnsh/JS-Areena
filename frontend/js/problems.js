const urlParams = new URLSearchParams(window.location.search);
let currentPage = parseInt(urlParams.get('page')) || 1;
let currentLimit = 20;
let totalPages = 1;
let debounceTimer;

document.addEventListener('DOMContentLoaded', async () => {
    // Parallelize Auth check to avoid blocking the first problem fetch
    checkAuth().then(isAuth => {
        if (isAuth) {
            document.getElementById('top-progress-bar').style.display = 'flex';
            fetchUserProgress();
        }
    });

    // Fetch accurate total problem count for the UI display
    fetch(`${API_BASE_URL}/problems/count`)
        .then(res => res.json())
        .then(data => {
            if (data && data.count) {
                const countSpan = document.getElementById('total-prob-count');
                if (countSpan) countSpan.innerText = data.count;
                window.globalTotalProblems = data.count; // to use instead of 300 fallback
            }
        }).catch(err => console.error(err));

    // Rigidly restore all DOM inputs from URL Params on load / popstate
    const initParams = new URLSearchParams(window.location.search);

    const urlType = initParams.get('type');
    if (urlType) {
        const rad = document.querySelector(`input[name="type"][value="${urlType}"]`);
        if (rad) rad.checked = true;
    }

    const urlDiff = initParams.get('difficulty');
    if (urlDiff) {
        document.querySelectorAll('.diff-check').forEach(c => {
            c.checked = urlDiff.includes(c.value);
        });
    }

    const urlCat = initParams.get('category');
    if (urlCat) {
        const catSelect = document.getElementById('category-select');
        const found = Array.from(catSelect.options).some(o => o.value === urlCat);
        if (found) catSelect.value = urlCat;
        else if (Array.from(catSelect.options).some(o => o.value === `DSA_${urlCat}`)) catSelect.value = `DSA_${urlCat}`;
        else if (Array.from(catSelect.options).some(o => o.value === `JS_${urlCat}`)) catSelect.value = `JS_${urlCat}`;
    }

    const urlSearch = initParams.get('search');
    if (urlSearch) document.getElementById('search-input').value = urlSearch;

    const urlSort = initParams.get('sort');
    if (urlSort) {
        const sortSelect = document.getElementById('sort-select');
        if (Array.from(sortSelect.options).some(o => o.value === urlSort)) sortSelect.value = urlSort;
    }

    fetchProblems();

    // Setup Event Listeners
    document.getElementById('search-input').addEventListener('input', (e) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            currentPage = 1;
            fetchProblems();
        }, 300);
    });

    const filterInputs = document.querySelectorAll('.filters-panel input, .filters-panel select');
    filterInputs.forEach(input => {
        input.addEventListener('change', () => {
            currentPage = 1;
            fetchProblems();
        });
    });

    document.getElementById('sort-select').addEventListener('change', () => {
        currentPage = 1;
        fetchProblems();
    });

    document.getElementById('reset-filters').addEventListener('click', () => {
        document.querySelectorAll('input[type="radio"]').forEach(r => r.checked = r.value === '');
        document.querySelectorAll('.diff-check').forEach(c => c.checked = false);
        document.getElementById('category-select').value = '';
        document.getElementById('search-input').value = '';
        document.getElementById('sort-select').value = 'topicOrder';
        currentPage = 1;
        fetchProblems();
    });

    document.getElementById('prev-page').addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            fetchProblems();
        }
    });

    document.getElementById('next-page').addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            fetchProblems();
        }
    });

    document.getElementById('jump-to-page').addEventListener('change', (e) => {
        currentPage = parseInt(e.target.value);
        fetchProblems();
    });
});

async function fetchUserProgress() {
    try {
        const res = await fetch(`${API_BASE_URL}/auth/me`, {
            headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        });
        if (res.ok) {
            const user = await res.json();
            window.solvedProblemsSet = new Set(user.solvedProblems);

            document.getElementById('solved-count').innerText = user.totalSolved;

            // Calculate widths dynamically based on real total
            const totalProbs = user.totalPlatformProblems || window.globalTotalProblems || 300;
            const easyPct = (user.easySolved / totalProbs) * 100;
            const medPct = (user.mediumSolved / totalProbs) * 100;
            const hardPct = (user.hardSolved / totalProbs) * 100;

            document.getElementById('seg-easy').style.width = `${easyPct}%`;
            document.getElementById('seg-med').style.width = `${medPct}%`;
            document.getElementById('seg-hard').style.width = `${hardPct}%`;
        }
    } catch (error) {
        console.error(error);
    }
}

async function fetchProblems() {
    try {
        const tbody = document.getElementById('problems-tbody');
        const loaderHtml = `
            <tr>
                <td colspan="6" style="text-align: center; padding: 40px;">
                    <div class="loader" style="margin: 0 auto; width: 40px; height: 40px; border-width: 4px;"></div>
                    <div style="margin-top: 10px; color: var(--text-secondary);">Loading problems...</div>
                </td>
            </tr>
        `;
        // Only show loader if we don't have pre-fetched data ready to render
        let urlParams = new URLSearchParams(window.location.search);
        let isDefaultLoad = !window.location.search || window.location.search === '?page=1';
        if (!(window.problemsDataPromise && isDefaultLoad)) {
            tbody.innerHTML = loaderHtml;
        }

        const type = document.querySelector('input[name="type"]:checked').value;

        // Checked difficulties
        const checkedDiffs = Array.from(document.querySelectorAll('.diff-check:checked')).map(cb => cb.value);
        // Since API currently accepts one difficulty or we just filter locally if multiple.
        // Let's pass the first one, or if we supported arrays: &difficulty=Easy,Medium
        // For simplicity, if multiple are selected, we will filter locally. If 0 or 1, pass to API.
        let diffParam = '';
        if (checkedDiffs.length === 1) diffParam = checkedDiffs[0];

        let rawCategory = document.getElementById('category-select').value;
        let categoryParam = rawCategory;
        let typeOverride = null;

        if (rawCategory.startsWith('DSA_')) {
            typeOverride = 'DSA';
            categoryParam = rawCategory.substring(4);
        } else if (rawCategory.startsWith('JS_')) {
            typeOverride = 'JS';
            categoryParam = rawCategory.substring(3);
        }

        const search = document.getElementById('search-input').value;
        const sort = document.getElementById('sort-select').value;

        // Let the dropdown strictly override the radio buttons if a specific ecosystem is selected
        const finalType = typeOverride ? typeOverride : type;

        let url = `${API_BASE_URL}/problems?page=${currentPage}&limit=${currentLimit}`;
        if (finalType) url += `&type=${finalType}`;
        if (diffParam) url += `&difficulty=${diffParam}`;
        if (categoryParam) url += `&category=${encodeURIComponent(categoryParam)}`;
        if (search) url += `&search=${search}`;
        if (sort) url += `&sort=${sort}`;

        let problems;
        let data;

        const currentApiQuery = `?page=${currentPage}&limit=${currentLimit}&sort=${sort}` +
            (finalType ? `&type=${encodeURIComponent(finalType)}` : '') +
            (diffParam ? `&difficulty=${encodeURIComponent(diffParam)}` : '') +
            (categoryParam ? `&category=${encodeURIComponent(categoryParam)}` : '') +
            (search ? `&search=${encodeURIComponent(search)}` : '');

        isDefaultLoad = (window.initialApiQuery === currentApiQuery);

        if (window.problemsDataPromise && isDefaultLoad) {
            data = await window.problemsDataPromise;
            window.problemsDataPromise = null;
        } else {
            const res = await fetch(url);
            data = await res.json();
        }

        // Sync URL with all active state without reloading
        const newUrl = new URL(window.location.origin + window.location.pathname);
        newUrl.searchParams.set('page', currentPage);
        if (finalType) newUrl.searchParams.set('type', finalType);
        if (diffParam) newUrl.searchParams.set('difficulty', diffParam);
        if (categoryParam) newUrl.searchParams.set('category', categoryParam);
        if (search) newUrl.searchParams.set('search', search);
        if (sort && sort !== 'topicOrder') newUrl.searchParams.set('sort', sort);

        if (window.location.search !== newUrl.search) {
            window.history.pushState({}, '', newUrl);
        }

        problems = data.data;

        // Local filter if multiple difficulties selected (since basic API only supported 1)
        if (checkedDiffs.length > 1) {
            problems = problems.filter(p => checkedDiffs.includes(p.difficulty));
        }

        totalPages = data.pages || 1;

        // Sync Jump to Page dropdown
        const jumpSelect = document.getElementById('jump-to-page');
        if (jumpSelect) {
            let optionsHtml = '';
            for (let i = 1; i <= totalPages; i++) {
                optionsHtml += `<option value="${i}" ${i === currentPage ? 'selected' : ''}>Page ${i}</option>`;
            }
            jumpSelect.innerHTML = optionsHtml;
        }

        document.getElementById('table-info').innerText = `Showing ${problems.length} problems (Page ${currentPage} of ${totalPages})`;
        document.getElementById('page-indicator').innerText = `Page ${currentPage} of ${totalPages}`;
        document.getElementById('prev-page').disabled = currentPage === 1;
        document.getElementById('next-page').disabled = currentPage === totalPages;

        renderTable(problems);

    } catch (error) {
        console.error(error);
        showToast('Failed to load problems', 'error');
    }
}

function renderTable(problems) {
    const tbody = document.getElementById('problems-tbody');

    if (problems.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" style="text-align:center">No problems found</td></tr>`;
        return;
    }

    let html = '';
    const solvedSet = window.solvedProblemsSet || new Set();
    const startNum = (currentPage - 1) * currentLimit;

    problems.forEach((p, index) => {
        const isSolved = solvedSet.has(p._id);
        const diffClass = p.difficulty ? `difficulty-${p.difficulty.toLowerCase()}` : '';
        const serialNum = startNum + index + 1;

        html += `
      <tr onclick="window.location.href='/problem-detail.html?slug=${p.slug}'">
        <td style="color: var(--text-secondary); font-size: 0.9rem;">${serialNum}</td>
        <td>${isSolved ? '<span class="status-icon">✔</span>' : ''}</td>
        <td style="font-weight:600; color: var(--accent-green);">
          <a href="/problem-detail.html?slug=${p.slug}" style="text-decoration: none; color: inherit;">${p.title}</a>
        </td>
        <td>${p.category || '-'}</td>
        <td><span class="difficulty-badge ${diffClass}">${p.difficulty || '-'}</span></td>
        <td>${p.acceptanceRate ? p.acceptanceRate.toFixed(1) : 0}%</td>
      </tr>
    `;
    });

    tbody.innerHTML = html;
}
