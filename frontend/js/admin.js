/* admin.js */
const problemForm = document.getElementById('problem-form');
const usersTableBody = document.getElementById('users-table-body');
const testCasesBuilder = document.getElementById('test-cases-builder');

// Auth Check (Admin Only)
document.addEventListener('DOMContentLoaded', async () => {
    // Hide body initially to prevent any "leak" of admin content
    document.body.style.display = 'none';

    const userStr = localStorage.getItem('user');
    const token = localStorage.getItem('token');

    if (!userStr || !token) {
        window.location.href = '/login.html';
        return;
    }

    const user = JSON.parse(userStr);

    if (user.role !== 'admin') {
        showToast('Admin access required!', 'error');
        setTimeout(() => window.location.href = '/', 1000);
        return;
    }

    // Show content only for verified admin
    document.body.style.display = 'block';
    loadUsers();

    // User Search Listener
    const userSearch = document.getElementById('user-search');
    let searchDebounce;
    userSearch.addEventListener('input', (e) => {
        clearTimeout(searchDebounce);
        searchDebounce = setTimeout(() => {
            loadUsers(e.target.value);
        }, 300);
    });
});

function switchTab(tab) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.admin-section').forEach(sec => sec.classList.remove('active'));

    const activeTab = document.querySelector(`.tab-btn[onclick*="${tab}"]`);
    if (activeTab) activeTab.classList.add('active');

    document.getElementById(`${tab}-section`).classList.add('active');
}

// Test Case Builder Logic
function addTestCaseRow() {
    const row = document.createElement('div');
    row.className = 'test-case-row';
    row.innerHTML = `
        <input type="text" class="tc-input" placeholder="Input (e.g. [1,2],3)" required>
        <input type="text" class="tc-expected" placeholder="Expected Output" required>
        <button type="button" class="btn-remove-case" onclick="removeTestCaseRow(this)">🗑️</button>
    `;
    testCasesBuilder.appendChild(row);
}

function removeTestCaseRow(btn) {
    btn.parentElement.remove();
}

// Problem Upload
problemForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Generate Slug from Title
    const title = document.getElementById('title').value;
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

    // Collect Test Cases
    const testCaseRows = document.querySelectorAll('.test-case-row');
    const testCases = Array.from(testCaseRows).map(row => ({
        input: row.querySelector('.tc-input').value,
        expected: row.querySelector('.tc-expected').value,
        isHidden: false
    }));

    // Constraints as Array
    const constraintsValue = document.getElementById('constraints').value;
    const constraints = constraintsValue.split('\n').filter(c => c.trim() !== '');

    const formData = {
        title: title,
        slug: slug,
        category: document.getElementById('category').value,
        difficulty: document.getElementById('difficulty').value,
        topic: document.getElementById('topic').value,
        description: document.getElementById('description').value,
        constraints: constraints,
        testCases: testCases,
        starterCode: document.getElementById('solution').value, // This is what user sees
        solutionCode: document.getElementById('solution').value, // Also storage answer
        type: 'JS' // Default for now
    };

    try {
        const res = await fetch(`${API_BASE_URL}/admin/problems`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(formData)
        });

        if (res.ok) {
            showToast('Challenge Initialized Successfully! 🚀');
            problemForm.reset();
            // Reset test cases to just one
            testCasesBuilder.innerHTML = `
                <div class="test-case-row">
                    <input type="text" class="tc-input" placeholder="Input (e.g. [1,2],3)" required>
                    <input type="text" class="tc-expected" placeholder="Expected Output" required>
                    <button type="button" class="btn-remove-case" style="visibility: hidden;">🗑️</button>
                </div>
            `;
        } else {
            const data = await res.json();
            showToast(data.message || 'Initialization failed', 'error');
        }
    } catch (err) {
        showToast('Error connecting to high-command', 'error');
    }
});

// Load Users
async function loadUsers(search = '') {
    try {
        const url = new URL(`${API_BASE_URL}/admin/users`);
        if (search) url.searchParams.append('search', search);

        const res = await fetch(url, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        const users = await res.json();

        if (res.ok) {
            usersTableBody.innerHTML = users.map(user => `
                <tr>
                    <td>
                        <div style="display: flex; align-items: center; gap: 12px;">
                            <div style="width: 36px; height: 36px; background: var(--admin-accent); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: bold; color: white;">
                                ${user.username.charAt(0).toUpperCase()}
                            </div>
                            <div>
                                <div style="font-weight: 600; font-size: 0.95rem;">${user.username} ${user.role === 'admin' ? '<span title="System Administrator">⭐</span>' : ''}</div>
                                <div style="font-size: 0.75rem; color: var(--admin-text-muted);">${user.role.toUpperCase()}</div>
                            </div>
                        </div>
                    </td>
                    <td><code style="color: var(--admin-text); background: rgba(255,255,255,0.05); padding: 2px 6px; border-radius: 4px;">${user.mobileNumber}</code></td>
                    <td style="font-family: monospace; font-size: 0.75rem; color: var(--admin-text-muted);">
                        ${user.password.substring(0, 20)}...
                    </td>
                    <td>
                        <div style="display: flex; gap: 8px;">
                            <button class="reset-btn" onclick="resetPassword('${user._id}')">Reset</button>
                            <button class="delete-btn" onclick="deleteUser('${user._id}', '${user.username}')" style="background: var(--accent-red); color: white; border: none; padding: 4px 8px; border-radius: 4px; cursor: pointer; font-size: 0.75rem;">Delete</button>
                        </div>
                    </td>
                </tr>
            `).join('');
        }
    } catch (err) {
        showToast('Error loading user directory', 'error');
    }
}

async function resetPassword(userId) {
    const newPass = prompt('Enter new access key (password) for this user:');
    if (!newPass) return;

    try {
        const res = await fetch(`${API_BASE_URL}/admin/users/${userId}/password`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({ password: newPass })
        });

        if (res.ok) {
            showToast('Access key updated successfully!');
            loadUsers();
        } else {
            showToast('Failed to update access key', 'error');
        }
    } catch (err) {
        showToast('Error updating security credentials', 'error');
    }
}

async function deleteUser(userId, username) {
    if (!confirm(`Are you absolutely sure you want to PERMANENTLY delete the account for ${username}? This cannot be undone.`)) return;

    try {
        const res = await fetch(`${API_BASE_URL}/admin/users/${userId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });

        if (res.ok) {
            showToast(`User ${username} has been deleted.`);
            loadUsers();
        } else {
            showToast('Failed to delete user', 'error');
        }
    } catch (err) {
        showToast('Error deleting user', 'error');
    }
}
