let editor;
let currentProblem = null;
let testCases = [];

document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const slug = urlParams.get('slug');

    if (!slug) {
        window.location.href = '/problems.html';
        return;
    }

    // Init CodeMirror
    editor = CodeMirror(document.getElementById('editor-container'), {
        mode: 'javascript',
        theme: 'darcula',
        lineNumbers: true,
        tabSize: 2,
        indentWithTabs: false,
        autoCloseBrackets: true,
        matchBrackets: true
    });

    initResizer();
    initTabs();

    await fetchProblemDetail(slug);

    document.getElementById('run-btn').addEventListener('click', runCode);
    document.getElementById('submit-btn').addEventListener('click', submitCode);
    document.getElementById('reset-code-btn').addEventListener('click', () => {
        if (confirm('Reset to starter code?')) {
            editor.setValue(currentProblem.starterCode || '');
        }
    });

    document.getElementById('get-ai-hint-btn').addEventListener('click', getAIHint);

    // Show Solution Button
    const forceUnlockBtn = document.getElementById('force-unlock-btn');
    if (forceUnlockBtn) {
        forceUnlockBtn.addEventListener('click', showSolutionTab);
    }

    // AI Solution Helper Init
    initAIModal();
});

async function fetchProblemDetail(slug) {
    try {
        if (window.problemDataPromise) {
            currentProblem = await window.problemDataPromise;
        } else {
            const res = await fetch(`${API_BASE_URL}/problems/${slug}`);
            if (!res.ok) throw new Error('Problem not found');
            currentProblem = await res.json();
        }

        testCases = currentProblem.testCases || [];
        document.getElementById('problem-title').innerText = currentProblem.title;
        const diffBadge = document.getElementById('problem-difficulty');
        diffBadge.innerText = currentProblem.difficulty;
        diffBadge.className = `difficulty-badge difficulty-${currentProblem.difficulty.toLowerCase()}`;
        document.getElementById('problem-category').innerText = currentProblem.category || '';
        document.getElementById('problem-acceptance').innerText = `Acceptance: ${currentProblem.acceptanceRate ? currentProblem.acceptanceRate.toFixed(1) : 0}%`;
        document.getElementById('tab-description').innerHTML = renderMarkdown(currentProblem.description);
        editor.setValue(currentProblem.starterCode || '// your code here\n');
        buildTestCasesUI();

        // Check if user has attempted before to show "Get Help" button
        checkShowHelpButton();

    } catch (error) {
        showToast(error.message, 'error');
    }
}

async function checkShowHelpButton() {
    const isAuth = await checkAuth();
    if (!isAuth) return;

    try {
        const res = await fetch(`${API_BASE_URL}/submissions/${currentProblem._id}/my`, {
            headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        });
        const data = await res.json();
        if (data.length > 0) {
            document.getElementById('get-help-btn').style.display = 'flex';
        }
    } catch (e) {
        console.error("Failed to check attempts", e);
    }
}

async function runCode() {
    // For "Run", we reuse the AI Evaluate endpoint to stay consistent with the "Groq Evaluation" requirement
    await submitWithAI('run-btn');
}

async function submitCode() {
    const isAuth = await checkAuth();
    if (!isAuth) {
        showToast('Please log in to submit', 'error');
        setTimeout(() => window.location.href = '/login.html', 1500);
        return;
    }
    await submitWithAI('submit-btn');
}

async function submitWithAI(btnId) {
    const btn = document.getElementById(btnId);
    const originalText = btn.innerText;
    const code = editor.getValue();

    // Show AI loading state
    btn.innerHTML = `<span class="spinner"></span> 🤖 AI Evaluating...`;
    btn.disabled = true;

    // Auto switch to result tab
    document.querySelector('.out-tab-btn[data-tab="result"]').click();
    document.getElementById('result-status').innerText = "🤖 AI is evaluating your code...";
    document.getElementById('result-status').style.color = "var(--accent-purple)";
    document.getElementById('result-details').innerHTML = `<div class="ai-loader-msg">Please wait while Groq analyzes your logic across all test cases. This usually takes 2-3 seconds...</div>`;

    // Use /run for run button, /submit for submit button
    const endpoint = btnId === 'submit-btn' ? '/submissions/submit' : '/submissions/run';

    try {
        const res = await fetch(`${API_BASE_URL}${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({ problemId: currentProblem._id, code: code })
        });
        const data = await res.json();

        if (res.ok) {
            // Adapt the response structure because /run returns {results} and /submit returns {executionResults}
            const evalResults = data.results || data.executionResults || data.results;
            const totalPassed = evalResults.filter(r => r.passed).length;
            const status = totalPassed === evalResults.length ? 'all_passed' : (totalPassed === 0 ? 'all_failed' : 'partial');

            renderAIResults({
                results: evalResults,
                totalPassed,
                totalCases: evalResults.length,
                status
            });

            if (status === 'all_passed') {
                document.getElementById('get-help-btn').style.display = 'flex'; // show help after first success too or attempt
                if (typeof confetti !== 'undefined') {
                    confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 } });
                }
            } else {
                document.getElementById('get-help-btn').style.display = 'flex';
            }
        } else {
            showToast(data.message || 'Evaluation failed', 'error');
            document.getElementById('result-status').innerText = "Execution Error";
            document.getElementById('result-details').innerText = data.message || "Failed to evaluate code.";
        }
    } catch (err) {
        showToast('Network error', 'error');
    } finally {
        btn.innerText = originalText;
        btn.disabled = false;
    }
}

function renderAIResults(data) {
    const { results, totalPassed, totalCases, status } = data;
    const statusEl = document.getElementById('result-status');
    const detailsEl = document.getElementById('result-details');

    if (status === 'all_passed') {
        statusEl.innerText = "Accepted ✅";
        statusEl.style.color = "var(--accent-green)";
    } else if (status === 'partial') {
        statusEl.innerText = "Wrong Answer ❌";
        statusEl.style.color = "var(--accent-red)";
    } else {
        statusEl.innerText = "Failed ❌";
        statusEl.style.color = "var(--accent-red)";
    }

    let html = `<div style="margin-bottom: 16px; font-weight: 600;">Score: ${totalPassed} / ${totalCases} test cases passed</div>`;

    results.forEach((res, idx) => {
        const emoji = res.passed ? "✅" : "❌";
        const isHidden = res.isHidden;

        html += `
            <div class="ai-result-item ${res.passed ? 'passed' : 'failed'}">
                <div style="display:flex; justify-content: space-between; align-items: center;">
                    <strong>Case ${idx + 1} ${isHidden ? '(Hidden)' : ''}</strong>
                    <span>${emoji}</span>
                </div>
                ${!isHidden ? `<div class="ai-exp">${res.explanation}</div>` : ''}
                ${isHidden && !res.passed ? `<div class="ai-exp">Details hidden. Check your logic.</div>` : ''}
            </div>
        `;
    });

    detailsEl.innerHTML = html;
}

function initAIModal() {
    const modal = document.getElementById('ai-solution-modal');
    const btn = document.getElementById('get-help-btn');
    const closeBtn = document.querySelector('.close-modal');

    btn.onclick = () => {
        modal.style.display = "block";
        fetchAISolution();
    };

    closeBtn.onclick = () => {
        modal.style.display = "none";
    };

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
}

async function getAIHint() {
    const btn = document.getElementById('get-ai-hint-btn');
    if (!btn) return;
    const originalText = btn.innerHTML;
    btn.innerHTML = '🤖 Thinking...';
    btn.disabled = true;

    try {
        const res = await fetch(`${API_BASE_URL}/ai/hint`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({ problemId: currentProblem._id })
        });
        const data = await res.json();
        if (res.ok) {
            const hintBox = document.getElementById('ai-hint-box');
            if (hintBox) {
                hintBox.innerHTML = `
                    <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                        <div style="line-height:1.5;">💡 <strong>AI Hint:</strong> ${data.hint}</div>
                        <button onclick="document.getElementById('ai-hint-box').style.display='none'" 
                                style="background:transparent; border:none; color:var(--text-secondary); cursor:pointer; font-size:1.2rem; line-height:1; padding:0 0 0 16px;">&times;</button>
                    </div>
                `;
                hintBox.style.display = 'block';
            } else {
                showToast('💡 ' + data.hint, 'success');
            }
        } else {
            showToast(data.message || 'Failed to get hint', 'error');
        }
    } catch (e) {
        showToast('Network error', 'error');
    } finally {
        btn.innerHTML = originalText;
        btn.disabled = false;
    }
}

async function fetchAISolution() {
    const skeleton = document.getElementById('ai-skeleton');
    const content = document.getElementById('ai-solution-real-content');

    skeleton.style.display = 'block';
    content.style.display = 'none';

    try {
        const res = await fetch(`${API_BASE_URL}/ai/get-solution`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({ problemId: currentProblem._id })
        });
        const data = await res.json();

        if (res.ok) {
            document.getElementById('ai-approach-text').innerText = data.approach;

            const stepsList = document.getElementById('ai-steps-list');
            stepsList.innerHTML = data.steps.map(s => `<li>${s}</li>`).join('');

            document.getElementById('ai-solution-code').innerText = data.solutionCode;

            const compSection = document.getElementById('ai-complexity-section');
            if (data.complexity) {
                compSection.style.display = 'block';
                document.getElementById('ai-complexity-text').innerText = data.complexity;
            } else {
                compSection.style.display = 'none';
            }

            skeleton.style.display = 'none';
            content.style.display = 'block';

            // Syntax highlighting if available (e.g. Prism or manually)
        } else {
            showToast(data.message || 'Failed to fetch solution', 'error');
        }
    } catch (e) {
        showToast('Network error', 'error');
    }
}

async function showSolutionTab() {
    document.getElementById('solution-lock').style.display = 'none';
    const content = document.getElementById('solution-content');
    content.style.display = 'block';
    content.innerHTML = '<div style="padding: 20px; text-align: center;"><span class="spinner"></span> 🤖 Generating exact code and concise explanation...</div>';

    try {
        const res = await fetch(`${API_BASE_URL}/ai/get-solution`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({ problemId: currentProblem._id })
        });
        const data = await res.json();

        if (res.ok) {
            content.innerHTML = `
                <div style="margin-bottom: 24px;">
                    <h3 style="margin-bottom: 12px; color: var(--accent-green); font-size: 1.1rem;">💻 Exact Code:</h3>
                    <div style="background: #1e1e1e; padding: 16px; border-radius: 8px; overflow-x: auto; border: 1px solid var(--border);">
                        <pre style="margin: 0;"><code style="color: #a9b7c6; font-family: 'JetBrains Mono', monospace; font-size: 0.95rem;">${data.solutionCode}</code></pre>
                    </div>
                </div>
                <div>
                    <h3 style="margin-bottom: 12px; color: var(--accent-purple); font-size: 1.1rem;">🧠 Explanation:</h3>
                    <p style="color: var(--text-secondary); line-height: 1.6; font-size: 0.95rem; background: var(--bg-tertiary); padding: 16px; border-radius: 8px;">${data.approach}</p>
                </div>
            `;
        } else {
            content.innerHTML = `<div style="color: var(--accent-red); padding: 16px;">Failed to load solution: ${data.message}</div>`;
            document.getElementById('solution-lock').style.display = 'block';
            content.style.display = 'none';
        }
    } catch (e) {
        content.innerHTML = '';
        document.getElementById('solution-lock').style.display = 'block';
        content.style.display = 'none';
        showToast('Network error while fetching solution.', 'error');
    }
}

function renderMarkdown(text) {
    if (!text) return '';
    let html = text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/`(.*?)`/g, '<code>$1</code>')
        .replace(/\n\n/g, '</p><p>')
        .replace(/\n/g, '<br/>');
    return `<p>${html}</p>`;
}

function initResizer() {
    const resizer = document.getElementById('resizer');
    const leftPanel = document.querySelector('.left-panel');
    let isResizing = false;

    if (!resizer) return;

    resizer.addEventListener('mousedown', (e) => {
        isResizing = true;
        resizer.classList.add('dragging');
    });

    document.addEventListener('mousemove', (e) => {
        if (!isResizing) return;
        const newWidth = Math.max(300, Math.min(e.clientX, window.innerWidth - 400));
        leftPanel.style.flex = `0 0 ${newWidth}px`;
    });

    document.addEventListener('mouseup', () => {
        isResizing = false;
        resizer.classList.remove('dragging');
    });
}

function initTabs() {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

            btn.classList.add('active');
            const target = document.getElementById(`tab-${btn.dataset.tab}`);
            if (target) target.classList.add('active');
        });
    });

    document.querySelectorAll('.out-tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.out-tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.out-content').forEach(c => c.classList.remove('active'));

            btn.classList.add('active');
            const target = document.getElementById(`out-${btn.dataset.tab}`);
            if (target) target.classList.add('active');
        });
    });
}

function buildTestCasesUI() {
    const btnContainer = document.getElementById('testcase-buttons');
    const detailsContainer = document.getElementById('testcase-details');
    if (!btnContainer) return;
    btnContainer.innerHTML = '';

    if (testCases.length === 0) {
        if (detailsContainer) detailsContainer.innerHTML = 'No visible test cases available.';
        return;
    }

    testCases.forEach((tc, idx) => {
        const btn = document.createElement('button');
        btn.className = `tc-btn ${idx === 0 ? 'active' : ''}`;
        btn.innerText = `Case ${idx + 1}`;
        btn.onclick = () => {
            document.querySelectorAll('.tc-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            showTestCaseDetails(idx);
        };
        btnContainer.appendChild(btn);
    });

    showTestCaseDetails(0);
}

function showTestCaseDetails(idx) {
    const tc = testCases[idx];
    const detailsContainer = document.getElementById('testcase-details');
    if (!detailsContainer || !tc) return;

    detailsContainer.innerHTML = `
    <div style="margin-bottom:8px; color:var(--text-secondary)">Input:</div>
    <div style="margin-bottom:16px; background:var(--bg-primary); padding:8px; border-radius:4px;">${tc.input}</div>
    <div style="margin-bottom:8px; color:var(--text-secondary)">Expected Output:</div>
    <div style="background:var(--bg-primary); padding:8px; border-radius:4px;">${tc.expected}</div>
  `;
}
