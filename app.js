// Seed Data for ATS with Indonesian phone numbers and Job Levels
const defaultCandidates = [
    {
        id: "cand-1",
        name: "Sarah Jenkins",
        email: "sarah.j@example.com",
        phone: "+62 812-2345-6789",
        role: "Software Engineer",
        level: "Senior Staff",
        score: 94,
        tags: ["Python", "Django", "AWS", "PostgreSQL"],
        summary: "Senior backend developer with 5+ years of experience building scalable microservices. Former tech lead at a mid-sized SaaS company.",
        notes: "Excellent technical assessment performance. Discussed system architecture details and she showcased deep understanding of caching and database index optimization.",
        stage: "interviewing",
        ratings: { technical: 9, communication: 8, fit: 9 },
        timeline: [
            { action: "Applied via LinkedIn", time: "Jun 15, 2026" },
            { action: "Screening Call Completed", time: "Jun 18, 2026" },
            { action: "Technical Interview Scheduled", time: "Jun 22, 2026" }
        ]
    },
    {
        id: "cand-2",
        name: "Michael Chen",
        email: "m.chen@example.com",
        phone: "+62 813-8765-4321",
        role: "Software Engineer",
        level: "Staff",
        score: 88,
        tags: ["React", "TypeScript", "Next.js", "CSS"],
        summary: "Frontend specialist passionate about creating highly interactive, accessible, and performant web interfaces. Strong eye for pixel-perfect designs.",
        notes: "Very clean code style. Completed the UI exercise in record time. Communication is clear and structured.",
        stage: "offered",
        ratings: { technical: 8, communication: 9, fit: 8 },
        timeline: [
            { action: "Applied via Website", time: "Jun 10, 2026" },
            { action: "Screening Passed", time: "Jun 12, 2026" },
            { action: "Technical Panel Cleared", time: "Jun 19, 2026" },
            { action: "Offer Letter Sent", time: "Jun 28, 2026" }
        ]
    },
    {
        id: "cand-3",
        name: "Sophia Martinez",
        email: "sophia.m@example.com",
        phone: "+62 815-3456-7890",
        role: "UX Designer",
        level: "Senior Staff",
        score: 92,
        tags: ["Figma", "User Research", "Prototyping", "Design System"],
        summary: "Product designer with a background in cognitive science. Focused on user-centered design, usability testing, and crafting comprehensive design systems.",
        notes: "Portfolio is outstanding. Showed rich design iterations for a complex fin-tech dashboard. High cultural fit.",
        stage: "screening",
        ratings: { technical: 9, communication: 9, fit: 10 },
        timeline: [
            { action: "Applied via Referral", time: "Jun 24, 2026" },
            { action: "Portfolio Review Completed", time: "Jun 26, 2026" }
        ]
    },
    {
        id: "cand-4",
        name: "David Kim",
        email: "d.kim@example.com",
        phone: "+62 819-4567-8901",
        role: "Data Scientist",
        level: "Non-Staff",
        score: 79,
        tags: ["Python", "SQL", "PyTorch", "Tableau"],
        summary: "Recent Master's graduate in Data Science with projects covering predictive modeling and natural language processing. Strong foundation in stats.",
        notes: "Good theoretical knowledge but lacks industry experience. Needs a bit of guidance on database engineering practices.",
        stage: "applied",
        ratings: { technical: 7, communication: 7, fit: 8 },
        timeline: [
            { action: "Applied via Indeed", time: "Jun 29, 2026" }
        ]
    },
    {
        id: "cand-5",
        name: "Emma Watson",
        email: "emma.w@example.com",
        phone: "+62 821-5678-9012",
        role: "Product Manager",
        level: "Manager",
        score: 85,
        tags: ["Agile", "Roadmapping", "Jira", "A/B Testing"],
        summary: "Product Manager with 3 years of experience in mobile app delivery. Data-driven decision maker with experience leading cross-functional teams.",
        notes: "Great leadership qualities shown during scenario discussions. Good balancing of technical feasibility and customer value.",
        stage: "interviewing",
        ratings: { technical: 6, communication: 9, fit: 8 },
        timeline: [
            { action: "Applied via Website", time: "Jun 14, 2026" },
            { action: "Screening Passed", time: "Jun 17, 2026" },
            { action: "Product Design Interview Completed", time: "Jun 25, 2026" }
        ]
    },
    {
        id: "cand-6",
        name: "James Anderson",
        email: "j.anderson@example.com",
        phone: "+62 878-6789-0123",
        role: "HR Specialist",
        level: "Officer/Supervisor",
        score: 91,
        tags: ["Sourcing", "HRIS", "Talent Acquisition", "Onboarding"],
        summary: "HR professional specializing in technical recruiting, employer branding, and building positive candidate experiences.",
        notes: "Highly professional candidate. Has deep knowledge of regional compliance laws and compensation benchmarking.",
        stage: "hired",
        ratings: { technical: 9, communication: 9, fit: 9 },
        timeline: [
            { action: "Applied via Linkedin", time: "Jun 02, 2026" },
            { action: "HR Screening Cleared", time: "Jun 05, 2026" },
            { action: "Panel Interview Passed", time: "Jun 12, 2026" },
            { action: "Offered & Accepted", time: "Jun 20, 2026" }
        ]
    },
    {
        id: "cand-7",
        name: "Liam O'Connor",
        email: "liam.oc@example.com",
        phone: "+62 856-7890-1234",
        role: "Software Engineer",
        level: "Staff",
        score: 64,
        tags: ["Java", "Spring Boot", "MySQL"],
        summary: "Backend developer specializing in legacy enterprise applications. Looking for a modern tech stack transformation.",
        notes: "Struggled in the live system design and coding challenge. Coding standards did not match our team needs.",
        stage: "rejected",
        ratings: { technical: 4, communication: 6, fit: 7 },
        timeline: [
            { action: "Applied via Website", time: "Jun 11, 2026" },
            { action: "Screening Call Passed", time: "Jun 14, 2026" },
            { action: "Coding Assessment Failed", time: "Jun 20, 2026" }
        ]
    }
];

// Initialize State
let candidates = [];
let companyName = localStorage.getItem('talentflow_company_name') || 'TalentFlow';
let adminName = localStorage.getItem('talentflow_admin_name') || 'Alex Rivera';
let adminRole = localStorage.getItem('talentflow_admin_role') || 'HR Lead';
let adminAvatar = localStorage.getItem('talentflow_admin_avatar') || 'AR';
let activeCandidateId = null;
let currentView = 'dashboard';
let pendingResumeFile = null;

// Supabase Connection Configuration
// Replace these with your project credentials so public visitors automatically connect to your database.
const DEFAULT_SUPABASE_URL = 'https://mbafbeamqcxjosuxeobm.supabase.co/rest/v1/';
const DEFAULT_SUPABASE_KEY = 'sb_publishable_9UJJQnbOmWkvw3RSn2MR8g_-11rZL0K';

let supabaseUrl = localStorage.getItem('talentflow_supabase_url') || DEFAULT_SUPABASE_URL;
let supabaseKey = localStorage.getItem('talentflow_supabase_key') || DEFAULT_SUPABASE_KEY;
let supabaseClient = null;
let isAdmin = false; // Tracks if administrative operations are unlocked

// Safe Lucide Icons Creation Helper
function safeCreateIcons() {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    } else {
        console.warn('Lucide icons library not loaded (running offline).');
    }
}

// IndexedDB Helpers for Offline File Storage
function openIndexedDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open('talentflow_resumes_db', 1);
        request.onupgradeneeded = (e) => {
            const db = e.target.result;
            db.createObjectStore('resumes');
        };
        request.onsuccess = (e) => resolve(e.target.result);
        request.onerror = (e) => reject(e.target.error);
    });
}

async function saveResumeOffline(candidateId, file) {
    try {
        const db = await openIndexedDB();
        return new Promise((resolve, reject) => {
            const tx = db.transaction('resumes', 'readwrite');
            const store = tx.objectStore('resumes');
            const request = store.put(file, candidateId);
            request.onsuccess = () => resolve();
            request.onerror = () => reject(request.error);
        });
    } catch (err) {
        console.error('Failed to save file in IndexedDB:', err);
    }
}

async function getResumeOffline(candidateId) {
    try {
        const db = await openIndexedDB();
        return new Promise((resolve, reject) => {
            const tx = db.transaction('resumes', 'readonly');
            const store = tx.objectStore('resumes');
            const request = store.get(candidateId);
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    } catch (err) {
        console.error('Failed to get file from IndexedDB:', err);
        return null;
    }
}

async function deleteResumeOffline(candidateId) {
    try {
        const db = await openIndexedDB();
        return new Promise((resolve, reject) => {
            const tx = db.transaction('resumes', 'readwrite');
            const store = tx.objectStore('resumes');
            const request = store.delete(candidateId);
            request.onsuccess = () => resolve();
            request.onerror = () => reject(request.error);
        });
    } catch (err) {
        console.error('Failed to delete file from IndexedDB:', err);
    }
}

// Initialize Supabase Client
function initSupabase() {
    const syncLocalBtn = document.getElementById('sync-local-btn');
    const disconnectSupabaseBtn = document.getElementById('disconnect-supabase-btn');
    const saveSupabaseBtn = document.getElementById('save-supabase-btn');

    if (supabaseUrl && supabaseKey && window.supabase) {
        try {
            supabaseClient = window.supabase.createClient(supabaseUrl, supabaseKey);
            updateStatusBadge('online');
            
            if (syncLocalBtn) syncLocalBtn.style.display = 'inline-flex';
            if (disconnectSupabaseBtn) disconnectSupabaseBtn.style.display = 'inline-flex';
            if (saveSupabaseBtn) saveSupabaseBtn.innerHTML = '<i data-lucide="check"></i> Connected';

            // Check active session on startup
            supabaseClient.auth.getSession().then(({ data: { session } }) => {
                if (session) {
                    isAdmin = true;
                    document.body.classList.add('user-is-admin');
                    updateAdminStatusBadge(true, session.user.email);
                } else {
                    isAdmin = false;
                    document.body.classList.remove('user-is-admin');
                    updateAdminStatusBadge(false);
                    if (currentView === 'settings') {
                        currentView = 'dashboard';
                    }
                }
                switchView(currentView);
            });

            // Listen for authentication changes dynamically
            supabaseClient.auth.onAuthStateChange((event, session) => {
                if (session) {
                    isAdmin = true;
                    document.body.classList.add('user-is-admin');
                    updateAdminStatusBadge(true, session.user.email);
                } else {
                    isAdmin = false;
                    document.body.classList.remove('user-is-admin');
                    updateAdminStatusBadge(false);
                    if (currentView === 'settings') {
                        currentView = 'dashboard';
                    }
                }
                switchView(currentView);
            });
        } catch (err) {
            console.error('Supabase initialization failed:', err);
            supabaseClient = null;
            updateStatusBadge('offline');
            isAdmin = sessionStorage.getItem('talentflow_local_admin') === 'true';
            if (isAdmin) {
                document.body.classList.add('user-is-admin');
            } else {
                document.body.classList.remove('user-is-admin');
            }
            updateAdminStatusBadge(isAdmin);
        }
    } else {
        supabaseClient = null;
        updateStatusBadge('offline');
        isAdmin = sessionStorage.getItem('talentflow_local_admin') === 'true';
        if (isAdmin) {
            document.body.classList.add('user-is-admin');
        } else {
            document.body.classList.remove('user-is-admin');
        }
        updateAdminStatusBadge(isAdmin);
        if (syncLocalBtn) syncLocalBtn.style.display = 'none';
        if (disconnectSupabaseBtn) disconnectSupabaseBtn.style.display = 'none';
        if (saveSupabaseBtn) saveSupabaseBtn.innerHTML = '<i data-lucide="link"></i> Connect Database';
    }
}

// Update database status indicator tag
function updateStatusBadge(status) {
    const dbStatusBadge = document.getElementById('db-status-badge');
    if (!dbStatusBadge) return;
    
    dbStatusBadge.className = `db-status-tag ${status}`;
    const dot = dbStatusBadge.querySelector('.status-dot') || document.createElement('span');
    dot.className = 'status-dot';
    
    const label = dbStatusBadge.querySelector('.status-label') || document.createElement('span');
    label.className = 'status-label';
    
    dbStatusBadge.innerHTML = '';
    dbStatusBadge.appendChild(dot);
    dbStatusBadge.appendChild(label);
    
    if (status === 'online') {
        label.textContent = 'Cloud Connected';
    } else if (status === 'connecting') {
        label.textContent = 'Connecting...';
    } else {
        label.textContent = 'Offline Mode';
    }
    safeCreateIcons();
}

// Update Admin authentication status badge
function updateAdminStatusBadge(loggedIn, email) {
    const badge = document.getElementById('admin-status-badge');
    const label = document.getElementById('admin-status-label');
    if (!badge || !label) return;

    badge.style.display = 'inline-flex';

    if (!supabaseClient) {
        badge.className = 'db-status-tag offline';
        badge.style.borderColor = 'rgba(255, 255, 255, 0.15)';
        badge.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
        badge.style.color = 'var(--text-muted)';
        badge.innerHTML = `<i data-lucide="lock" style="width: 10px; height: 10px;"></i> <span id="admin-status-label">Local Mode</span>`;
        safeCreateIcons();
        return;
    }

    if (loggedIn) {
        badge.className = 'db-status-tag online';
        badge.style.borderColor = 'rgba(16, 185, 129, 0.2)';
        badge.style.backgroundColor = 'rgba(16, 185, 129, 0.05)';
        badge.style.color = 'var(--color-hired)';
        badge.innerHTML = `<i data-lucide="unlock" style="width: 10px; height: 10px;"></i> <span id="admin-status-label" style="text-overflow:ellipsis; overflow:hidden; white-space:nowrap; max-width:80px;">${email || 'Admin'}</span>`;
    } else {
        badge.className = 'db-status-tag offline';
        badge.style.borderColor = 'rgba(239, 68, 68, 0.2)';
        badge.style.backgroundColor = 'rgba(239, 68, 68, 0.05)';
        badge.style.color = 'var(--color-rejected)';
        badge.innerHTML = `<i data-lucide="lock" style="width: 10px; height: 10px;"></i> <span id="admin-status-label">Visitor Mode</span>`;
    }
    safeCreateIcons();
}

function openLoginModal() {
    const loginModalOverlay = document.getElementById('login-modal-overlay');
    if (loginModalOverlay) loginModalOverlay.classList.add('active');
}

function closeLoginModal() {
    const loginModalOverlay = document.getElementById('login-modal-overlay');
    const loginForm = document.getElementById('admin-login-form');
    if (loginModalOverlay) loginModalOverlay.classList.remove('active');
    if (loginForm) loginForm.reset();
}

// Load Candidates from Supabase or LocalStorage
async function fetchCandidates() {
    if (supabaseClient) {
        try {
            const { data, error } = await supabaseClient
                .from('candidates')
                .select('*')
                .order('created_at', { ascending: false });
                
            if (error) throw error;
            candidates = data || [];
        } catch (err) {
            console.error('Failed to query Supabase candidates. Falling back to local.', err);
            loadFromLocalStorage();
        }
    } else {
        loadFromLocalStorage();
    }
}

function loadFromLocalStorage() {
    try {
        const stored = localStorage.getItem('talentflow_candidates');
        candidates = stored ? JSON.parse(stored) : defaultCandidates;
        if (!Array.isArray(candidates)) {
            candidates = defaultCandidates;
        } else {
            // Repair any legacy candidate data lacking the level column to satisfy DB not-null constraints
            candidates.forEach(c => {
                if (!c.level) {
                    c.level = 'Staff';
                }
            });
        }
    } catch (e) {
        console.error('Failed to parse candidates from localStorage. Falling back to seeds.', e);
        candidates = defaultCandidates;
    }
}

// Save Candidate list to local storage as fallback
function saveToLocalStorageBackup() {
    localStorage.setItem('talentflow_candidates', JSON.stringify(candidates));
    localStorage.setItem('talentflow_company_name', companyName);
}

// Portal brand displays updater
function updateCompanyBrandDisplays() {
    const logoBrand = document.getElementById('logo-text-brand');
    if (logoBrand) {
        logoBrand.innerHTML = `${companyName.slice(0, 6)}<span>${companyName.slice(6)}</span>`;
    }
    const companyDisplayHeaders = document.querySelectorAll('.company-name-display');
    companyDisplayHeaders.forEach(el => {
        el.textContent = `${companyName} Recruitment Pipeline`;
    });
}

function updateAdminProfileDisplays() {
    const nameEl = document.querySelector('.sidebar-footer .user-name');
    const roleEl = document.querySelector('.sidebar-footer .user-role');
    const avatarEl = document.querySelector('.sidebar-footer .user-avatar');
    if (nameEl) nameEl.textContent = adminName;
    if (roleEl) roleEl.textContent = adminRole;
    if (avatarEl) avatarEl.textContent = adminAvatar;
}

// Update Top Dashboard stats cards and column counts
function updateStatsAndBadges() {
    const counts = {
        applied: 0,
        screening: 0,
        interviewing: 0,
        offered: 0,
        hired: 0,
        rejected: 0
    };

    candidates.forEach(c => {
        if (counts[c.stage] !== undefined) {
            counts[c.stage]++;
        }
    });

    const elApplied = document.getElementById('count-applied');
    const elScreening = document.getElementById('count-screening');
    const elInterviewing = document.getElementById('count-interviewing');
    const elOffered = document.getElementById('count-offered');
    const elHired = document.getElementById('count-hired');

    if (elApplied) elApplied.textContent = counts.applied;
    if (elScreening) elScreening.textContent = counts.screening;
    if (elInterviewing) elInterviewing.textContent = counts.interviewing;
    if (elOffered) elOffered.textContent = counts.offered;
    if (elHired) elHired.textContent = counts.hired;

    const badgeApplied = document.getElementById('badge-applied');
    const badgeScreening = document.getElementById('badge-screening');
    const badgeInterviewing = document.getElementById('badge-interviewing');
    const badgeOffered = document.getElementById('badge-offered');
    const badgeHired = document.getElementById('badge-hired');
    const badgeRejected = document.getElementById('badge-rejected');

    if (badgeApplied) badgeApplied.textContent = counts.applied;
    if (badgeScreening) badgeScreening.textContent = counts.screening;
    if (badgeInterviewing) badgeInterviewing.textContent = counts.interviewing;
    if (badgeOffered) badgeOffered.textContent = counts.offered;
    if (badgeHired) badgeHired.textContent = counts.hired;
    if (badgeRejected) badgeRejected.textContent = counts.rejected;
}

// Get match score color coding
function getScoreColorClass(score) {
    if (score >= 85) return 'score-high';
    if (score >= 70) return 'score-medium';
    return 'score-low';
}

// Create card element inside Kanban board columns
function createCardElement(candidate) {
    const card = document.createElement('div');
    card.className = 'candidate-card';
    card.draggable = isAdmin;
    card.dataset.id = candidate.id;
    card.style.setProperty('--color-accent', `var(--color-${candidate.stage})`);
    
    const tagsHTML = candidate.tags.slice(0, 3).map(tag => `<span class="tag">${tag}</span>`).join('');
    const extraTags = candidate.tags.length > 3 ? `<span class="tag">+${candidate.tags.length - 3}</span>` : '';
    
    const scoreColorClass = getScoreColorClass(candidate.score);

    card.innerHTML = `
        <div class="card-header">
            <h3>${candidate.name}</h3>
            <span class="match-score-badge ${scoreColorClass}">
                <i data-lucide="zap" style="width: 10px; height: 10px; fill: currentColor;"></i>
                ${candidate.score}%
            </span>
        </div>
        <div class="card-role" style="display:flex; justify-content:space-between; align-items:center;">
            <span>${candidate.role}</span>
            <span class="level-tag" style="font-size: 9px; padding: 1px 4px;">${candidate.level || 'Staff'}</span>
        </div>
        <div class="card-tags" style="margin-top: 8px;">
            ${tagsHTML}
            ${extraTags}
        </div>
        <div class="card-footer">
            <div class="card-footer-item">
                <i data-lucide="mail"></i>
                <span>Contact</span>
            </div>
            <div class="card-footer-item">
                <i data-lucide="star" style="fill: ${candidate.ratings.technical >= 7 ? 'currentColor' : 'none'};"></i>
                <span>${((candidate.ratings.technical + candidate.ratings.communication + candidate.ratings.fit) / 3).toFixed(1)}</span>
            </div>
        </div>
    `;

    // Drag management
    let isDragging = false;
    card.addEventListener('dragstart', (e) => {
        if (!isAdmin) {
            e.preventDefault();
            return;
        }
        isDragging = true;
        card.classList.add('dragging');
    });
    
    card.addEventListener('dragend', () => {
        isDragging = false;
        card.classList.remove('dragging');
    });

    card.addEventListener('click', () => {
        if (!isDragging) {
            openDetailDrawer(candidate.id);
        }
    });

    return card;
}

// Render Kanban board view
async function renderBoard() {
    const searchInput = document.getElementById('search-input');
    const roleFilter = document.getElementById('role-filter');
    const sortFilter = document.getElementById('sort-filter');
    
    if (!searchInput || !roleFilter || !sortFilter) return;

    const searchQuery = searchInput.value.toLowerCase().trim();
    const selectedRole = roleFilter.value;
    const sortBy = sortFilter.value;

    const stages = ['applied', 'screening', 'interviewing', 'offered', 'hired', 'rejected'];
    stages.forEach(stage => {
        const list = document.getElementById(`list-${stage}`);
        if (list) list.innerHTML = '';
    });

    let filtered = candidates.filter(c => {
        const matchesSearch = c.name.toLowerCase().includes(searchQuery) ||
                              c.role.toLowerCase().includes(searchQuery) ||
                              c.tags.some(t => t.toLowerCase().includes(searchQuery));
        
        const matchesRole = selectedRole === "" || c.role === selectedRole;
        
        return matchesSearch && matchesRole;
    });

    filtered.sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortBy === 'score') {
            return b.score - a.score;
        } else if (sortBy === 'recent') {
            return candidates.indexOf(b) - candidates.indexOf(a);
        }
        return 0;
    });

    filtered.forEach(c => {
        const columnList = document.getElementById(`list-${c.stage}`);
        if (columnList) {
            columnList.appendChild(createCardElement(c));
        }
    });

    updateStatsAndBadges();
    safeCreateIcons();
}

// Setup Kanban drag and drop mechanics
function setupDragAndDrop() {
    const columns = document.querySelectorAll('.kanban-column');
    
    columns.forEach(column => {
        column.addEventListener('dragover', (e) => {
            if (!isAdmin) return;
            e.preventDefault();
            column.classList.add('drag-over');
        });

        column.addEventListener('dragleave', () => {
            column.classList.remove('drag-over');
        });

        column.addEventListener('drop', async (e) => {
            if (!isAdmin) return;
            e.preventDefault();
            column.classList.remove('drag-over');
            
            const draggingCard = document.querySelector('.dragging');
            if (!draggingCard) return;
            
            const candidateId = draggingCard.dataset.id;
            const targetStage = column.dataset.stage;
            
            const candidate = candidates.find(c => c.id === candidateId);
            if (candidate && candidate.stage !== targetStage) {
                candidate.stage = targetStage;
                
                const dateString = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
                candidate.timeline.unshift({
                    action: `Moved to ${targetStage.charAt(0).toUpperCase() + targetStage.slice(1)}`,
                    time: dateString
                });
                
                // Write updates to DB
                if (supabaseClient) {
                    try {
                        const { error } = await supabaseClient
                            .from('candidates')
                            .update({ stage: candidate.stage, timeline: candidate.timeline })
                            .eq('id', candidate.id);
                        if (error) throw error;
                    } catch (err) {
                        console.error('Failed to sync drag update to Supabase:', err);
                    }
                }
                
                saveToLocalStorageBackup();
                renderBoard();
            }
        });
    });
}

// Candidates Tab - Render directory database grid
function renderCandidatesTable() {
    const tableBody = document.getElementById('candidates-table-body');
    const candidatesSearchInput = document.getElementById('candidates-search-input');
    const candidatesRoleFilter = document.getElementById('candidates-role-filter');
    const candidatesLevelFilter = document.getElementById('candidates-level-filter');
    
    if (!tableBody || !candidatesSearchInput || !candidatesRoleFilter || !candidatesLevelFilter) return;
    
    tableBody.innerHTML = '';
    
    const query = candidatesSearchInput.value.toLowerCase().trim();
    const roleVal = candidatesRoleFilter.value;
    const levelVal = candidatesLevelFilter.value;
    
    const filtered = candidates.filter(c => {
        const matchesQuery = c.name.toLowerCase().includes(query) ||
                             c.role.toLowerCase().includes(query) ||
                             (c.level && c.level.toLowerCase().includes(query)) ||
                             c.tags.some(t => t.toLowerCase().includes(query));
                             
        const matchesRole = roleVal === '' || c.role === roleVal;
        const matchesLevel = levelVal === '' || c.level === levelVal;
        
        return matchesQuery && matchesRole && matchesLevel;
    });
    
    if (filtered.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="8" style="text-align:center; color:var(--text-muted); padding: 30px;">No candidates found matching the filters.</td></tr>`;
        return;
    }
    
    filtered.forEach(c => {
        const row = document.createElement('tr');
        const scoreColorClass = getScoreColorClass(c.score);
        const avgRating = ((c.ratings.technical + c.ratings.communication + c.ratings.fit) / 3).toFixed(1);
        
        const resumeCell = c.resume_url ? 
            `<a href="javascript:void(0)" class="resume-cell-icon" onclick="openCandidateResume('${c.id}', '${c.resume_url}')" title="View Resume"><i data-lucide="file-text" style="width:16px; height:16px;"></i></a>` : 
            `<span style="color:var(--text-muted);">—</span>`;

        row.innerHTML = `
            <td style="font-weight:600; color:var(--text-primary);">${c.name}</td>
            <td>${c.role}</td>
            <td><span class="level-tag">${c.level || 'Staff'}</span></td>
            <td style="text-align:center;">${resumeCell}</td>
            <td><span class="match-score-badge ${scoreColorClass}" style="display:inline-flex;">${c.score}%</span></td>
            <td><span class="stage-tag stage-${c.stage}">${c.stage}</span></td>
            <td style="font-weight:700; color:var(--primary);">${avgRating} ★</td>
            <td>
                <button class="btn btn-secondary btn-sm" onclick="openDetailDrawer('${c.id}')" style="padding: 4px 8px; font-size:11px;">
                    <i data-lucide="eye" style="width:12px; height:12px;"></i> View
                </button>
            </td>
        `;
        tableBody.appendChild(row);
    });
    safeCreateIcons();
}

// Jobs Tab - Render vacancy cards
function renderJobsView() {
    const container = document.getElementById('jobs-grid-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    const roleStats = {};
    candidates.forEach(c => {
        if (!roleStats[c.role]) {
            roleStats[c.role] = { active: 0, hired: 0 };
        }
        if (c.stage === 'hired') {
            roleStats[c.role].hired++;
        } else if (c.stage !== 'rejected') {
            roleStats[c.role].active++;
        }
    });

    const jobRoles = Object.keys(roleStats);
    
    if (jobRoles.length === 0) {
        container.innerHTML = `<p style="grid-column:1/-1; text-align:center; color:var(--text-muted);">No active job listings. Add a candidate to seed a role.</p>`;
        return;
    }
    
    jobRoles.forEach(role => {
        const stats = roleStats[role];
        let dept = "Operations";
        const roleLower = role.toLowerCase();
        
        if (roleLower.includes('engineer') || roleLower.includes('developer') || roleLower.includes('scientist')) {
            dept = "Engineering";
        } else if (roleLower.includes('designer') || roleLower.includes('ux') || roleLower.includes('ui')) {
            dept = "Product Design";
        } else if (roleLower.includes('manager') || roleLower.includes('owner')) {
            dept = "Product Management";
        } else if (roleLower.includes('recruiter') || roleLower.includes('hr') || roleLower.includes('specialist')) {
            dept = "Human Resources";
        }
        
        const card = document.createElement('div');
        card.className = 'job-card';
        card.innerHTML = `
            <div class="job-card-header">
                <div class="job-title-group">
                    <h3>${role}</h3>
                    <span class="job-department">${dept}</span>
                </div>
                <span class="job-status-indicator status-active">Active</span>
            </div>
            
            <div class="job-stats-summary">
                <div class="job-stat-box">
                    <span class="job-stat-value">${stats.active}</span>
                    <span class="job-stat-label">In Pipeline</span>
                </div>
                <div class="job-stat-box">
                    <span class="job-stat-value" style="color: var(--color-hired);">${stats.hired}</span>
                    <span class="job-stat-label">Hired Total</span>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// Interviews Tab - Render scheduling agenda list
function renderInterviewsView() {
    const container = document.getElementById('interviews-list-container');
    if (!container) return;
    
    container.innerHTML = '';
    const activeInterviewees = candidates.filter(c => c.stage === 'interviewing');
    
    if (activeInterviewees.length === 0) {
        container.innerHTML = `<p style="text-align:center; color:var(--text-muted); padding:30px; border:1px dashed var(--border-color); border-radius:var(--radius-md);">No interviews scheduled. Move candidates to 'Interviewing' stage to populate.</p>`;
        return;
    }
    
    const mockHours = ["09:00 AM", "11:30 AM", "02:00 PM", "04:30 PM"];
    
    activeInterviewees.forEach((c, index) => {
        const timeSlot = mockHours[index % mockHours.length];
        const dateSlot = new Date();
        dateSlot.setDate(dateSlot.getDate() + Math.floor(index / 2) + 1);
        const dateString = dateSlot.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        
        const card = document.createElement('div');
        card.className = 'interview-schedule-card';
        card.innerHTML = `
            <div class="interview-candidate-profile">
                <div class="interview-avatar">${c.name.split(' ').map(n => n[0]).join('')}</div>
                <div class="interview-candidate-details">
                    <h4>${c.name}</h4>
                    <p>${c.role} • <span class="level-tag" style="font-size:9px; padding:0px 4px;">${c.level || 'Staff'}</span></p>
                </div>
            </div>
            
            <div class="interview-time-info">
                <div class="interview-time-badge">
                    <span class="time">${timeSlot}</span>
                    <span class="date">${dateString}</span>
                </div>
                <div class="interview-interviewer-tag">
                    <p style="font-weight:600; color:var(--text-primary);">Panel Interview</p>
                    <p style="font-size:11px; margin-top:2px;">Interviewer: HR Team</p>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// Settings Tab - General credentials panel
function renderSettingsView() {
    const settingsCompanyName = document.getElementById('settings-company-name');
    const settingsSupabaseUrl = document.getElementById('settings-supabase-url');
    const settingsSupabaseKey = document.getElementById('settings-supabase-key');
    const settingsAdminName = document.getElementById('settings-admin-name');
    const settingsAdminRole = document.getElementById('settings-admin-role');

    if (settingsCompanyName) settingsCompanyName.value = companyName;
    if (settingsSupabaseUrl) settingsSupabaseUrl.value = supabaseUrl;
    if (settingsSupabaseKey) settingsSupabaseKey.value = supabaseKey;
    if (settingsAdminName) settingsAdminName.value = adminName;
    if (settingsAdminRole) settingsAdminRole.value = adminRole;
}

// Navigation screen router
async function switchView(targetView) {
    currentView = targetView;
    
    const navItems = document.querySelectorAll('.sidebar-nav .nav-item');
    const viewSections = document.querySelectorAll('.view-section');

    navItems.forEach(item => {
        if (item.dataset.view === targetView) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
    
    viewSections.forEach(section => {
        if (section.id === `view-${targetView}`) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });

    // Re-fetch from DB to keep sync
    await fetchCandidates();

    if (targetView === 'dashboard') {
        renderBoard();
    } else if (targetView === 'candidates') {
        renderCandidatesTable();
    } else if (targetView === 'jobs') {
        renderJobsView();
    } else if (targetView === 'interviews') {
        renderInterviewsView();
    } else if (targetView === 'settings') {
        renderSettingsView();
    }
}

// Slide-over Details Drawer
function openDetailDrawer(id) {
    const candidate = candidates.find(c => c.id === id);
    if (!candidate) return;
    
    activeCandidateId = id;
    
    const drawerStageBadge = document.getElementById('drawer-stage-badge');
    const drawerBodyContent = document.getElementById('drawer-body-content');
    const detailDrawer = document.getElementById('detail-drawer');
    const detailDrawerOverlay = document.getElementById('detail-drawer-overlay');

    if (drawerStageBadge) {
        drawerStageBadge.textContent = candidate.stage;
        drawerStageBadge.className = `stage-tag stage-${candidate.stage}`;
    }
    
    const timelineHTML = candidate.timeline.map(t => `
        <div class="timeline-event">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <p class="timeline-action">${t.action}</p>
                <p class="timeline-time">${t.time}</p>
            </div>
        </div>
    `).join('');

    const scoreColorClass = getScoreColorClass(candidate.score);

    const levels = ["Non-Staff", "Staff", "Senior Staff", "Officer/Supervisor", "Junior Manager", "Manager", "Senior Manager", "Associate Director", "Director"];
    const levelOptionsHTML = levels.map(lvl => `
        <option value="${lvl}" ${candidate.level === lvl ? 'selected' : ''}>${lvl}</option>
    `).join('');

    if (drawerBodyContent) {
        drawerBodyContent.innerHTML = `
            <div class="detail-profile">
                <div class="detail-avatar">${candidate.name.split(' ').map(n => n[0]).join('')}</div>
                <div class="detail-headline">
                    <h2>${candidate.name}</h2>
                    <p>${candidate.role} • Match Score: <strong class="${scoreColorClass}">${candidate.score}%</strong></p>
                </div>
            </div>
            
            <div class="detail-section">
                <h4 class="detail-section-title">Position Details</h4>
                <div class="info-grid">
                    <div class="info-item">
                        <label>Job Role</label>
                        <span style="font-weight:600;">${candidate.role}</span>
                    </div>
                    <div class="info-item">
                        <label>Job Level</label>
                        <select id="drawer-level-select" ${isAdmin ? '' : 'disabled'} style="background-color: rgba(255,255,255,0.04); border: ${isAdmin ? '1px solid var(--border-color)' : 'none'}; padding: 4px 8px; border-radius: 4px; color: white; font-size:12px; cursor: ${isAdmin ? 'pointer' : 'default'}; -webkit-appearance: ${isAdmin ? 'menulist' : 'none'}; -moz-appearance: ${isAdmin ? 'menulist' : 'none'}; appearance: ${isAdmin ? 'menulist' : 'none'};">
                            ${levelOptionsHTML}
                        </select>
                    </div>
                </div>
            </div>

            <div class="detail-section">
                <h4 class="detail-section-title">Contact Information</h4>
                <div class="info-grid">
                    <div class="info-item">
                        <label>Email</label>
                        <span>${candidate.email}</span>
                    </div>
                    <div class="info-item">
                        <label>Phone</label>
                        <span>${candidate.phone || 'N/A'}</span>
                    </div>
                </div>
            </div>

            <div class="detail-section">
                <h4 class="detail-section-title">Resume Attachment</h4>
                ${candidate.resume_url ? `
                    <div class="resume-preview-card">
                        <div style="display:flex; align-items:center; gap:12px;">
                            <div class="resume-icon-badge">
                                <i data-lucide="file-text" style="width:20px; height:20px;"></i>
                            </div>
                            <div style="display:flex; flex-direction:column; gap:2px;">
                                <span style="font-weight:600; color:var(--text-primary); text-overflow:ellipsis; overflow:hidden; white-space:nowrap; max-width:180px;">Resume document.pdf</span>
                                <span style="font-size:10px; color:var(--text-muted);">PDF Document</span>
                            </div>
                        </div>
                        <div style="display:flex; gap:8px; align-items:center;">
                            <button type="button" class="resume-link-btn" onclick="openCandidateResume('${candidate.id}', '${candidate.resume_url}')">
                                <i data-lucide="external-link" style="width:12px; height:12px;"></i> View
                            </button>
                            <button type="button" class="btn btn-secondary btn-sm admin-only" style="padding:6px 8px; color:var(--color-rejected); border-color:rgba(239, 68, 68, 0.2); background:none;" onclick="removeCandidateResume('${candidate.id}')" title="Delete Resume">
                                <i data-lucide="trash-2" style="width:14px; height:14px;"></i>
                            </button>
                        </div>
                    </div>
                ` : `
                    ${isAdmin ? `
                        <div class="file-upload-zone" id="drawer-resume-dropzone" style="padding:16px; border-style:dashed; cursor:pointer;" onclick="document.getElementById('drawer-resume-file').click()">
                            <i data-lucide="upload-cloud" style="width: 20px; height: 20px; color: var(--text-muted); margin-bottom: 4px;"></i>
                            <p style="font-size: 11px; font-weight: 500; margin:0;">Drag & drop PDF, or <span style="color: var(--primary); text-decoration: underline;">browse</span></p>
                            <input type="file" id="drawer-resume-file" accept="application/pdf" style="display: none;" onchange="uploadDrawerResume('${candidate.id}', this.files)">
                        </div>
                    ` : `
                        <span style="font-size:13px; color:var(--text-muted); font-style:italic;">No resume document attached.</span>
                    `}
                `}
            </div>

            <div class="detail-section">
                <h4 class="detail-section-title">Professional Summary</h4>
                <p style="font-size: 13px; line-height: 1.6; color: var(--text-secondary);">${candidate.summary || 'No summary provided.'}</p>
            </div>

            <div class="detail-section">
                <h4 class="detail-section-title">Stage Evaluation</h4>
                <div class="rating-sliders">
                    <div class="rating-item">
                        <div class="rating-label-row">
                            <span>Technical Skills</span>
                            <span class="rating-val" id="val-tech">${candidate.ratings.technical}</span>
                        </div>
                        <div class="rating-slider-container">
                            <input type="range" id="slide-tech" min="1" max="10" value="${candidate.ratings.technical}" ${isAdmin ? '' : 'disabled'}>
                        </div>
                    </div>
                    <div class="rating-item">
                        <div class="rating-label-row">
                            <span>Communication</span>
                            <span class="rating-val" id="val-comm">${candidate.ratings.communication}</span>
                        </div>
                        <div class="rating-slider-container">
                            <input type="range" id="slide-comm" min="1" max="10" value="${candidate.ratings.communication}" ${isAdmin ? '' : 'disabled'}>
                        </div>
                    </div>
                    <div class="rating-item">
                        <div class="rating-label-row">
                            <span>Cultural Fit</span>
                            <span class="rating-val" id="val-fit">${candidate.ratings.fit}</span>
                        </div>
                        <div class="rating-slider-container">
                            <input type="range" id="slide-fit" min="1" max="10" value="${candidate.ratings.fit}" ${isAdmin ? '' : 'disabled'}>
                        </div>
                    </div>
                </div>
            </div>

            <div class="detail-section">
                <h4 class="detail-section-title">Interview Feedback & Notes</h4>
                <div class="notes-area">
                    <textarea id="drawer-notes" rows="4" placeholder="${isAdmin ? 'Add recruiter feedback or panel review notes...' : 'No interviewer feedback entered yet.'}" ${isAdmin ? '' : 'readonly'} style="${isAdmin ? '' : 'background-color:transparent; border-color:transparent; padding:0; cursor:default; resize:none;'}">${candidate.notes || ''}</textarea>
                </div>
            </div>

            <div class="detail-section">
                <h4 class="detail-section-title">Pipeline History</h4>
                <div class="timeline">
                    ${timelineHTML}
                </div>
            </div>
        `;
    }

    const techSlider = document.getElementById('slide-tech');
    const commSlider = document.getElementById('slide-comm');
    const fitSlider = document.getElementById('slide-fit');
    
    if (techSlider) techSlider.addEventListener('input', (e) => document.getElementById('val-tech').textContent = e.target.value);
    if (commSlider) commSlider.addEventListener('input', (e) => document.getElementById('val-comm').textContent = e.target.value);
    if (fitSlider) fitSlider.addEventListener('input', (e) => document.getElementById('val-fit').textContent = e.target.value);

    if (detailDrawer) detailDrawer.classList.add('active');
    if (detailDrawerOverlay) detailDrawerOverlay.classList.add('active');
    safeCreateIcons();
}

function closeDetailDrawer() {
    const detailDrawer = document.getElementById('detail-drawer');
    const detailDrawerOverlay = document.getElementById('detail-drawer-overlay');
    if (detailDrawer) detailDrawer.classList.remove('active');
    if (detailDrawerOverlay) detailDrawerOverlay.classList.remove('active');
    activeCandidateId = null;
}

// Open candidate resume PDF
async function openCandidateResume(id, url) {
    if (!url) return;
    if (url === 'offline-stored') {
        const file = await getResumeOffline(id);
        if (file) {
            const fileUrl = URL.createObjectURL(file);
            window.open(fileUrl, '_blank');
        } else {
            alert('Resume file could not be found locally.');
        }
    } else {
        window.open(url, '_blank');
    }
}

// Upload resume from drawer dropzone
async function uploadDrawerResume(candidateId, files) {
    if (!files || files.length === 0) return;
    const file = files[0];
    
    if (file.type !== 'application/pdf') {
        alert('Only PDF documents are supported.');
        return;
    }
    
    if (file.size > 5 * 1024 * 1024) {
        alert('File size exceeds the 5MB limit (max 5MB).');
        return;
    }

    const candidate = candidates.find(c => c.id === candidateId);
    if (!candidate) return;

    const drawerBodyContent = document.getElementById('drawer-body-content');
    if (drawerBodyContent) {
        drawerBodyContent.innerHTML = `
            <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; padding: 40px; color:var(--primary);">
                <i data-lucide="loader" class="animate-spin" style="width:32px; height:32px; margin-bottom:12px;"></i>
                <p style="font-size:14px; font-weight:600;">Uploading resume document...</p>
            </div>
        `;
        safeCreateIcons();
    }

    try {
        if (supabaseClient) {
            const fileExt = file.name.split('.').pop();
            const filePath = `${candidateId}/resume_${Date.now()}.${fileExt}`;
            
            const { error: uploadError } = await supabaseClient.storage
                .from('resumes')
                .upload(filePath, file, { cacheControl: '3600', upsert: true });
                
            if (uploadError) throw uploadError;
            
            const { data } = supabaseClient.storage
                .from('resumes')
                .getPublicUrl(filePath);
                
            candidate.resume_url = data.publicUrl;
            
            const { error: dbError } = await supabaseClient
                .from('candidates')
                .update({ resume_url: candidate.resume_url })
                .eq('id', candidateId);
                
            if (dbError) throw dbError;
        } else {
            await saveResumeOffline(candidateId, file);
            candidate.resume_url = 'offline-stored';
        }
        
        saveToLocalStorageBackup();
        openDetailDrawer(candidateId);
        switchView(currentView);
    } catch (err) {
        console.error('Failed to upload resume:', err);
        alert(`Upload failed: ${err.message || 'Check connection or storage bucket permissions.'}`);
        openDetailDrawer(candidateId);
    }
}

// Remove resume attachment
async function removeCandidateResume(candidateId) {
    if (!confirm('Are you sure you want to remove the resume document from this candidate profile?')) return;

    const candidate = candidates.find(c => c.id === candidateId);
    if (!candidate) return;

    try {
        candidate.resume_url = null;
        
        if (supabaseClient) {
            const { error } = await supabaseClient
                .from('candidates')
                .update({ resume_url: null })
                .eq('id', candidateId);
            if (error) throw error;
        } else {
            await deleteResumeOffline(candidateId);
        }
        
        saveToLocalStorageBackup();
        openDetailDrawer(candidateId);
        switchView(currentView);
    } catch (err) {
        console.error('Failed to remove resume:', err);
        alert(`Failed to remove resume: ${err.message || err}`);
    }
}

// Expose functions globally for click handlers
window.openCandidateResume = openCandidateResume;
window.uploadDrawerResume = uploadDrawerResume;
window.removeCandidateResume = removeCandidateResume;

function openAddModal() {
    const addModalOverlay = document.getElementById('add-modal-overlay');
    if (addModalOverlay) addModalOverlay.classList.add('active');
}

function closeAddModal() {
    const addModalOverlay = document.getElementById('add-modal-overlay');
    const addForm = document.getElementById('add-candidate-form');
    const dropzone = document.getElementById('new-resume-dropzone');
    const feedback = document.getElementById('new-resume-feedback');
    const fileInput = document.getElementById('new-resume-file');
    
    if (addModalOverlay) addModalOverlay.classList.remove('active');
    if (addForm) addForm.reset();
    
    pendingResumeFile = null;
    if (fileInput) fileInput.value = '';
    if (dropzone) dropzone.style.display = 'flex';
    if (feedback) feedback.style.display = 'none';
}

// Update unique role datalist options
function updateDatalistSuggestions() {
    const list = document.getElementById('roles-datalist');
    if (!list) return;
    
    const existingRoles = Array.from(new Set(candidates.map(c => c.role)));
    list.innerHTML = existingRoles.map(role => `<option value="${role}"></option>`).join('');
}

// Event Bindings and Setup
function setupEventListeners() {
    const searchInput = document.getElementById('search-input');
    const roleFilter = document.getElementById('role-filter');
    const sortFilter = document.getElementById('sort-filter');
    
    if (searchInput) searchInput.addEventListener('input', renderBoard);
    if (roleFilter) roleFilter.addEventListener('change', renderBoard);
    if (sortFilter) sortFilter.addEventListener('change', renderBoard);

    const candidatesSearchInput = document.getElementById('candidates-search-input');
    const candidatesRoleFilter = document.getElementById('candidates-role-filter');
    const candidatesLevelFilter = document.getElementById('candidates-level-filter');

    if (candidatesSearchInput) candidatesSearchInput.addEventListener('input', renderCandidatesTable);
    if (candidatesRoleFilter) candidatesRoleFilter.addEventListener('change', renderCandidatesTable);
    if (candidatesLevelFilter) candidatesLevelFilter.addEventListener('change', renderCandidatesTable);

    const navItems = document.querySelectorAll('.sidebar-nav .nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            switchView(item.dataset.view);
        });
    });

    const openAddButtons = document.querySelectorAll('.open-add-candidate-btn');
    openAddButtons.forEach(btn => {
        btn.addEventListener('click', openAddModal);
    });

    const closeAddModalBtn = document.getElementById('close-add-modal-btn');
    const cancelAddBtn = document.getElementById('cancel-add-btn');
    const addModalOverlay = document.getElementById('add-modal-overlay');

    if (closeAddModalBtn) closeAddModalBtn.addEventListener('click', closeAddModal);
    if (cancelAddBtn) cancelAddBtn.addEventListener('click', closeAddModal);
    if (addModalOverlay) {
        addModalOverlay.addEventListener('click', (e) => {
            if (e.target === addModalOverlay) closeAddModal();
        });
    }

    // Modal File Upload Dropzone listeners
    const dropzone = document.getElementById('new-resume-dropzone');
    const fileInput = document.getElementById('new-resume-file');
    const feedback = document.getElementById('new-resume-feedback');
    const removeBtn = document.getElementById('new-resume-remove');

    if (dropzone && fileInput && feedback) {
        dropzone.addEventListener('click', () => fileInput.click());
        
        dropzone.addEventListener('dragover', (e) => {
            e.preventDefault();
            dropzone.classList.add('dragover');
        });
        
        dropzone.addEventListener('dragleave', () => {
            dropzone.classList.remove('dragover');
        });
        
        dropzone.addEventListener('drop', (e) => {
            e.preventDefault();
            dropzone.classList.remove('dragover');
            if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
                handleSelectedFile(e.dataTransfer.files[0]);
            }
        });
        
        fileInput.addEventListener('change', (e) => {
            if (e.target.files && e.target.files.length > 0) {
                handleSelectedFile(e.target.files[0]);
            }
        });
        
        if (removeBtn) {
            removeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                pendingResumeFile = null;
                fileInput.value = '';
                feedback.style.display = 'none';
                dropzone.style.display = 'flex';
            });
        }
        
        function handleSelectedFile(file) {
            if (file.type !== 'application/pdf') {
                alert('Only PDF documents are supported.');
                return;
            }
            if (file.size > 5 * 1024 * 1024) {
                alert('File size exceeds the 5MB limit.');
                return;
            }
            pendingResumeFile = file;
            feedback.querySelector('.file-name').textContent = file.name;
            feedback.style.display = 'flex';
            dropzone.style.display = 'none';
        }
    }

    const closeDrawerBtn = document.getElementById('close-drawer-btn');
    const detailDrawerOverlay = document.getElementById('detail-drawer-overlay');
    if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeDetailDrawer);
    if (detailDrawerOverlay) detailDrawerOverlay.addEventListener('click', closeDetailDrawer);

    // Save Details Drawer changes
    const saveDrawerBtn = document.getElementById('save-drawer-btn');
    if (saveDrawerBtn) {
        saveDrawerBtn.addEventListener('click', async () => {
            if (!activeCandidateId) return;
            
            const candidate = candidates.find(c => c.id === activeCandidateId);
            const slideTech = document.getElementById('slide-tech');
            const slideComm = document.getElementById('slide-comm');
            const slideFit = document.getElementById('slide-fit');
            const drawerNotes = document.getElementById('drawer-notes');
            const drawerLevelSelect = document.getElementById('drawer-level-select');

            if (candidate && slideTech && slideComm && slideFit && drawerNotes && drawerLevelSelect) {
                const techVal = parseInt(slideTech.value);
                const commVal = parseInt(slideComm.value);
                const fitVal = parseInt(slideFit.value);
                const notesVal = drawerNotes.value;
                const levelVal = drawerLevelSelect.value;

                const hasChange = candidate.ratings.technical !== techVal || 
                                  candidate.ratings.communication !== commVal || 
                                  candidate.ratings.fit !== fitVal ||
                                  candidate.level !== levelVal;
                                        
                candidate.ratings = { technical: techVal, communication: commVal, fit: fitVal };
                candidate.notes = notesVal;
                candidate.level = levelVal;

                if (hasChange) {
                    const dateString = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
                    candidate.timeline.unshift({
                        action: "Candidate Profile & Level Updated",
                        time: dateString
                    });
                }

                if (supabaseClient) {
                    try {
                        const { error } = await supabaseClient
                            .from('candidates')
                            .update({ 
                                ratings: candidate.ratings, 
                                notes: candidate.notes, 
                                level: candidate.level,
                                timeline: candidate.timeline
                            })
                            .eq('id', candidate.id);
                        if (error) throw error;
                    } catch (err) {
                        console.error('Failed to update candidate in Supabase:', err);
                    }
                }

                saveToLocalStorageBackup();
                closeDetailDrawer();
                switchView(currentView);
            }
        });
    }

    // Delete Candidate
    const deleteCandidateBtn = document.getElementById('delete-candidate-btn');
    if (deleteCandidateBtn) {
        deleteCandidateBtn.addEventListener('click', async () => {
            if (!activeCandidateId) return;
            
            if (confirm("Are you sure you want to remove this candidate profile?")) {
                const idToDelete = activeCandidateId;
                candidates = candidates.filter(c => c.id !== idToDelete);
                
                if (supabaseClient) {
                    try {
                        const { error } = await supabaseClient
                            .from('candidates')
                            .delete()
                            .eq('id', idToDelete);
                        if (error) throw error;
                    } catch (err) {
                        console.error('Failed to delete candidate in Supabase:', err);
                    }
                }

                saveToLocalStorageBackup();
                closeDetailDrawer();
                switchView(currentView);
            }
        });
    }

    // General Settings Handler
    const saveSettingsBtn = document.getElementById('save-settings-btn');
    if (saveSettingsBtn) {
        saveSettingsBtn.addEventListener('click', () => {
            const settingsCompanyName = document.getElementById('settings-company-name');
            const settingsAdminName = document.getElementById('settings-admin-name');
            const settingsAdminRole = document.getElementById('settings-admin-role');
            
            if (settingsCompanyName && settingsAdminName && settingsAdminRole) {
                companyName = settingsCompanyName.value.trim() || 'TalentFlow';
                adminName = settingsAdminName.value.trim() || 'Alex Rivera';
                adminRole = settingsAdminRole.value.trim() || 'HR Lead';
                
                // Extract 2-letter initials for avatar badge
                const initials = adminName.split(' ')
                    .map(n => n[0])
                    .join('')
                    .substring(0, 2)
                    .toUpperCase();
                adminAvatar = initials || 'AR';
                
                localStorage.setItem('talentflow_company_name', companyName);
                localStorage.setItem('talentflow_admin_name', adminName);
                localStorage.setItem('talentflow_admin_role', adminRole);
                localStorage.setItem('talentflow_admin_avatar', adminAvatar);
                
                updateCompanyBrandDisplays();
                updateAdminProfileDisplays();
                alert('General configuration updated successfully.');
            }
        });
    }

    // Reset candidate Database
    const resetDatabaseBtn = document.getElementById('reset-database-btn');
    if (resetDatabaseBtn) {
        resetDatabaseBtn.addEventListener('click', async () => {
            if (confirm("Warning: This will clear your current changes and reset candidate data to default seeds. Proceed?")) {
                candidates = defaultCandidates;
                companyName = 'TalentFlow';
                
                if (supabaseClient) {
                    try {
                        const { error: delErr } = await supabaseClient.from('candidates').delete().neq('id', 'placeholder');
                        if (delErr) throw delErr;
                        const { error: insErr } = await supabaseClient.from('candidates').insert(defaultCandidates);
                        if (insErr) throw insErr;
                    } catch (err) {
                        console.error('Supabase DB reset failed:', err);
                        alert('Supabase DB reset failed. Check if table candidates exists.');
                    }
                }

                saveToLocalStorageBackup();
                updateCompanyBrandDisplays();
                updateDatalistSuggestions();
                switchView(currentView);
                alert('Database reset successful.');
            }
        });
    }

    // Save Supabase Configuration Credentials
    const saveSupabaseBtn = document.getElementById('save-supabase-btn');
    if (saveSupabaseBtn) {
        saveSupabaseBtn.addEventListener('click', async () => {
            if (typeof window.supabase === 'undefined') {
                alert('Supabase library is not loaded. Please connect to the internet to initialize cloud integration.');
                return;
            }

            const settingsSupabaseUrl = document.getElementById('settings-supabase-url');
            const settingsSupabaseKey = document.getElementById('settings-supabase-key');

            if (!settingsSupabaseUrl || !settingsSupabaseKey) return;

            let url = settingsSupabaseUrl.value.trim();
            const key = settingsSupabaseKey.value.trim();
            
            if (!url || !key) {
                alert('Please enter both your Supabase Project URL and Anon API Key.');
                return;
            }

            // Auto-clean Supabase URL (strip trailing slashes or subpaths like /rest/v1)
            url = url.replace(/\/+$/, '');
            url = url.replace(/\/rest\/v1\/?$/, '');

            updateStatusBadge('connecting');
            saveSupabaseBtn.innerHTML = '<i data-lucide="loader" class="animate-spin"></i> Connecting...';

            try {
                const tempClient = window.supabase.createClient(url, key);
                const { data, error } = await tempClient.from('candidates').select('id').limit(1);

                if (error) {
                    if (error.code === '42P01') {
                        throw new Error("Table 'candidates' not found in your Supabase project. Please execute the SQL table schema in your Supabase SQL Editor first.");
                    } else {
                        throw error;
                    }
                }

                supabaseUrl = url;
                supabaseKey = key;
                localStorage.setItem('talentflow_supabase_url', supabaseUrl);
                localStorage.setItem('talentflow_supabase_key', supabaseKey);
                
                initSupabase();
                await fetchCandidates();
                switchView(currentView);
                alert('Connected to Supabase cloud successfully!');
            } catch (err) {
                console.error('Connection test failed:', err);
                updateStatusBadge('offline');
                saveSupabaseBtn.innerHTML = '<i data-lucide="link"></i> Connect Database';
                alert(`Connection failed: ${err.message || 'Check your credentials and connection.'}`);
            }
        });
    }

    // Disconnect from Supabase
    const disconnectSupabaseBtn = document.getElementById('disconnect-supabase-btn');
    if (disconnectSupabaseBtn) {
        disconnectSupabaseBtn.addEventListener('click', async () => {
            if (confirm('Disconnect from Supabase? The application will fall back to offline storage mode.')) {
                supabaseUrl = '';
                supabaseKey = '';
                localStorage.removeItem('talentflow_supabase_url');
                localStorage.removeItem('talentflow_supabase_key');
                
                initSupabase();
                await fetchCandidates();
                switchView(currentView);
                alert('Disconnected from Supabase.');
            }
        });
    }

    // Sync local candidate data to cloud
    const syncLocalBtn = document.getElementById('sync-local-btn');
    if (syncLocalBtn) {
        syncLocalBtn.addEventListener('click', async () => {
            if (!supabaseClient) return;
            
            if (confirm('Upload all candidate records from local browser storage to your Supabase cloud table (including offline resume attachments)?')) {
                syncLocalBtn.innerHTML = '<i data-lucide="loader" class="animate-spin"></i> Syncing...';
                try {
                    const localData = JSON.parse(localStorage.getItem('talentflow_candidates')) || defaultCandidates;
                    
                    // Process and upload any offline-stored resumes
                    const sanitizedData = [];
                    for (const c of localData) {
                        const copy = { ...c, level: c.level || 'Staff' };
                        if (copy.resume_url === 'offline-stored') {
                            try {
                                const file = await getResumeOffline(copy.id);
                                if (file) {
                                    const fileExt = file.name ? file.name.split('.').pop() : 'pdf';
                                    const filePath = `${copy.id}/resume_${Date.now()}.${fileExt}`;
                                    
                                    const { error: uploadError } = await supabaseClient.storage
                                        .from('resumes')
                                        .upload(filePath, file, { cacheControl: '3600', upsert: true });
                                        
                                    if (uploadError) throw uploadError;
                                    
                                    const { data } = supabaseClient.storage
                                        .from('resumes')
                                        .getPublicUrl(filePath);
                                        
                                    copy.resume_url = data.publicUrl;
                                    
                                    // Remove offline file since it's uploaded to the cloud
                                    await deleteResumeOffline(copy.id);
                                } else {
                                    copy.resume_url = null;
                                }
                            } catch (uploadErr) {
                                console.error(`Failed to sync resume for candidate ${copy.id}:`, uploadErr);
                                copy.resume_url = null; // Revert to null on fatal storage failure
                            }
                        }
                        sanitizedData.push(copy);
                    }
                    
                    const { error } = await supabaseClient.from('candidates').upsert(sanitizedData);
                    if (error) throw error;
                    
                    await fetchCandidates();
                    switchView(currentView);
                    alert('Local candidate database and resume documents successfully synced to Supabase Cloud!');
                } catch (err) {
                    console.error('Sync failed:', err);
                    alert(`Sync failed: ${err.message || 'Verify your Supabase table schema.'}`);
                } finally {
                    syncLocalBtn.innerHTML = '<i data-lucide="upload-cloud"></i> Sync Local to Cloud';
                }
            }
        });
    }

    // Submit Add Candidate Form
    const addForm = document.getElementById('add-candidate-form');
    if (addForm) {
        addForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const newName = document.getElementById('new-name');
            const newEmail = document.getElementById('new-email');
            const newPhone = document.getElementById('new-phone');
            const newRole = document.getElementById('new-role');
            const newLevel = document.getElementById('new-level');
            const newScore = document.getElementById('new-score');
            const newTags = document.getElementById('new-tags');
            const newSummary = document.getElementById('new-summary');

            if (!newName || !newEmail || !newRole || !newLevel) return;

            const name = newName.value;
            const email = newEmail.value;
            const phone = newPhone ? newPhone.value : '';
            const role = newRole.value.trim();
            const level = newLevel.value;
            const score = newScore ? parseInt(newScore.value) || 85 : 85;
            const tagsInput = newTags ? newTags.value : '';
            const summary = newSummary ? newSummary.value : '';
            
            const tags = tagsInput ? tagsInput.split(',').map(tag => tag.trim()).filter(t => t.length > 0) : ["Candidate"];
            const newId = 'cand-' + Date.now();
            const dateString = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
            
            const newCandidate = {
                id: newId,
                name,
                email,
                phone,
                role,
                level,
                score,
                tags,
                summary,
                notes: "",
                stage: "applied",
                ratings: { technical: 5, communication: 5, fit: 5 },
                resume_url: null,
                timeline: [
                    { action: "Applied via Recruitment Portal", time: dateString }
                ]
            };

            if (pendingResumeFile) {
                const submitBtn = addForm.querySelector('button[type="submit"]');
                const origHTML = submitBtn.innerHTML;
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<i data-lucide="loader" class="animate-spin" style="width:14px; height:14px; margin-right:6px;"></i> Saving...';
                safeCreateIcons();

                try {
                    if (supabaseClient) {
                        const fileExt = pendingResumeFile.name.split('.').pop();
                        const filePath = `${newId}/resume_${Date.now()}.${fileExt}`;
                        
                        const { error: uploadError } = await supabaseClient.storage
                            .from('resumes')
                            .upload(filePath, pendingResumeFile, { cacheControl: '3600', upsert: true });
                            
                        if (uploadError) throw uploadError;
                        
                        const { data } = supabaseClient.storage
                            .from('resumes')
                            .getPublicUrl(filePath);
                            
                        newCandidate.resume_url = data.publicUrl;
                    } else {
                        await saveResumeOffline(newId, pendingResumeFile);
                        newCandidate.resume_url = 'offline-stored';
                    }
                } catch (err) {
                    console.error('Failed to upload candidate resume:', err);
                    alert(`Resume upload failed: ${err.message || err}. Creating candidate profile without resume attachment.`);
                } finally {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = origHTML;
                    safeCreateIcons();
                }
            }
            
            if (supabaseClient) {
                try {
                    const { error } = await supabaseClient.from('candidates').insert([newCandidate]);
                    if (error) throw error;
                } catch (err) {
                    console.error('Failed to insert candidate to Supabase:', err);
                    alert(`Failed to save candidate to database: ${err.message || 'Check your database connection.'}`);
                    return; // Abort submission
                }
            }
            
            candidates.push(newCandidate);
            saveToLocalStorageBackup();
            updateDatalistSuggestions();
            switchView(currentView);
            closeAddModal();
        });
    }

    // Admin Authentication Button Bindings
    const adminBadge = document.getElementById('admin-status-badge');
    if (adminBadge) {
        adminBadge.addEventListener('click', async () => {
            if (!supabaseClient) {
                alert('Your application is currently running in Offline (Local) Mode. To unlock online administrative database authentication, please configure and connect your Supabase project in the "Settings" tab first!');
                return;
            }

            if (isAdmin) {
                if (confirm('Sign out of Administrator Mode?')) {
                    try {
                        const { error } = await supabaseClient.auth.signOut();
                        if (error) throw error;
                        alert('Logged out of Admin Mode successfully.');
                    } catch (err) {
                        console.error('Logout failed:', err);
                        alert(`Logout failed: ${err.message}`);
                    }
                }
            } else {
                openLoginModal();
            }
        });
    }

    const closeLoginModalBtn = document.getElementById('close-login-modal-btn');
    const cancelLoginBtn = document.getElementById('cancel-login-btn');
    if (closeLoginModalBtn) closeLoginModalBtn.addEventListener('click', closeLoginModal);
    if (cancelLoginBtn) cancelLoginBtn.addEventListener('click', closeLoginModal);

    const loginForm = document.getElementById('admin-login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            if (!supabaseClient) return;

            const email = document.getElementById('login-email').value.trim();
            const password = document.getElementById('login-password').value;
            const submitBtn = document.getElementById('submit-login-btn');
            const origHTML = submitBtn.innerHTML;

            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i data-lucide="loader" class="animate-spin" style="width:14px; height:14px; margin-right:6px;"></i> Signing In...';
            safeCreateIcons();

            try {
                const { error } = await supabaseClient.auth.signInWithPassword({
                    email,
                    password
                });

                if (error) throw error;

                closeLoginModal();
                alert('Administrator mode unlocked successfully!');
            } catch (err) {
                console.error('Sign in failed:', err);
                alert(`Authentication failed: ${err.message || 'Check your email/password.'}`);
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerHTML = origHTML;
                safeCreateIcons();
            }
        });
    }
}

// Initialize Sequence
async function initApp() {
    try {
        updateCompanyBrandDisplays();
        updateAdminProfileDisplays();
        initSupabase();
        await fetchCandidates();
        updateDatalistSuggestions();
        setupEventListeners();
        await switchView('dashboard');
        setupDragAndDrop();
    } catch (err) {
        console.error('Initialization error:', err);
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}
