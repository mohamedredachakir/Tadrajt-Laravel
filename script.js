// Data is loaded via data.js script tag
const data = window.rawData;


// DOM Elements
const navMenu = document.getElementById('nav-menu');
const sidebarToggle = document.getElementById('sidebar-toggle');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const contentDisplay = document.getElementById('content-display');
const breadcrumbs = document.getElementById('breadcrumbs');
const searchInput = document.getElementById('search-input');

// State
let sectionsStruture = [];

// Parser
function parseData(data) {
    const lines = data.split('\n');
    const sections = [];
    let currentSection = null;

    lines.forEach(line => {
        line = line.trim();
        if (!line) return;

        // Skip tree view lines (contain box drawing chars)
        if (line.includes('│') || line.includes('├──') || line.includes('└──')) return;
        if (line === 'docs/') return;

        // Match Section Header (e.g., "00-overview/")
        // Regex for folder format
        if (/^\d{2}-[\w-]+\/$/.test(line)) {
            currentSection = {
                title: line.replace('/', ''),
                index: line.substring(0, 2),
                goal: '',
                items: []
            };
            sections.push(currentSection);
        }
        // Match Goal
        else if (line.startsWith('هدف:') && currentSection) {
            currentSection.goal = line.replace('هدف:', '').trim();
        }
        // Match Item (e.g., "intro.md -> Description")
        else if ((line.includes('→') || line.includes('->')) && currentSection) {
            // Split by either arrow
            const parts = line.split(/→|->/);
            // Ensure we have at least 2 parts
            if (parts.length < 2) return;

            const file = parts[0].trim();
            const desc = parts.slice(1).join(' ').trim(); // Rejoin rest in case arrow in desc? Unlikely.

            // Extract Title from Description
            /* 
               Format: "Title: Detail"
            */
            let title = desc;
            let detail = '';

            if (desc.includes(':')) {
                const descParts = desc.split(':');
                title = descParts[0].trim();
                detail = descParts.slice(1).join(':').trim();
            }

            currentSection.items.push({
                file: file,
                title: title,
                detail: detail,
                fullDesc: desc
            });
        }
    });

    return sections;
}

// Render Navigation
function renderNav() {
    if (!navMenu) return;
    navMenu.innerHTML = '';

    sectionsStruture.forEach((section) => {
        if (section.items.length === 0) return; // Skip empty sections

        const sectionEl = document.createElement('div');
        sectionEl.className = 'nav-section';

        const titleEl = document.createElement('div');
        titleEl.className = 'nav-section-title';
        titleEl.textContent = section.title.replace(/^\d{2}-/, '').replace(/-/g, ' '); // Clean title
        sectionEl.appendChild(titleEl);

        const listEl = document.createElement('div');

        section.items.forEach(item => {
            const itemEl = document.createElement('div'); // div for block layout
            itemEl.className = 'nav-item';

            // Title + File hint
            itemEl.innerHTML = `
                <span>${item.title}</span>
                <span style="font-size: 0.7em; opacity: 0.5;">${item.file.substring(0, 8)}...</span>
            `;

            itemEl.onclick = () => loadContent(section, item);
            listEl.appendChild(itemEl);
        });

        sectionEl.appendChild(listEl);
        navMenu.appendChild(sectionEl);
    });
}

// Load Content
function loadContent(section, item) {
    if (!contentDisplay) return;

    // Update breadcrumbs
    if (breadcrumbs) breadcrumbs.textContent = `${section.title} > ${item.title}`;

    // Highlight nav item
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    // We can't identify the element easily without passing index/ID. 
    // Implementing a quick lookup based on text content for now or just skip highlighting for simplicity.
    const navItems = document.querySelectorAll('.nav-item');
    for (const el of navItems) {
        if (el.textContent.includes(item.file.substring(0, 8))) {
            el.classList.add('active');
            break;
        }
    }

    // Generate Content
    let contentHTML = `
        <div class="content-header">
            <span class="doc-section">${section.title}</span>
            <h1>${item.title}</h1>
            <div class="doc-meta">
                <span>📄 ${item.file}</span>
                ${section.goal ? `<span>🎯 ${section.goal}</span>` : ''}
            </div>
        </div>
    `;

    // Check if we have the file content in data.js
    const fileContent = window.fileContents && window.fileContents[item.file];

    if (fileContent) {
        // Render Markdown
        // Check if marked is available
        const parsedContent = (typeof marked !== 'undefined') ? marked.parse(fileContent) : fileContent.replace(/\n/g, '<br>');

        contentHTML += `
            <div class="markdown-body">
                ${parsedContent}
            </div>
            
            <div class="description-box" style="margin-top: 40px; opacity: 0.8; font-size: 0.9em;">
                <p><strong>ملخص:</strong> ${item.detail || item.fullDesc}</p>
            </div>
        `;
    } else {
        // Fallback to description only
        contentHTML += `
            <div class="description-box">
                <h3 style="margin-top:0; color:var(--accent-color)">التفاصيل</h3>
                <p style="font-size: 1.2rem;">${item.detail || item.fullDesc || "No details available."}</p>
                <p style="margin-top: 20px; color: #666;">📝 File content not found in data.js.</p>
            </div>
        `;
    }

    contentHTML += `
        <div style="margin-top: 50px; text-align: center; color: var(--muted-color); padding: 20px;">
            <p>Made with ❤️ for Laravel Community</p>
        </div>
    `;

    contentDisplay.innerHTML = contentHTML;

    // Apply Syntax Highlighting
    if (typeof hljs !== 'undefined') {
        contentDisplay.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightElement(block);
        });
    }

    // Scroll to top
    contentDisplay.scrollTo(0, 0);

    // Mobile: Close sidebar
    if (window.innerWidth <= 768) {
        toggleSidebar(false);
    }
}

// Filter Functionality
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const sections = document.querySelectorAll('.nav-section');

        sections.forEach(sec => {
            const items = sec.querySelectorAll('.nav-item');
            let hasVisible = false;

            items.forEach(item => {
                const text = item.textContent.toLowerCase();
                if (text.includes(term)) {
                    item.style.display = 'flex';
                    hasVisible = true;
                } else {
                    item.style.display = 'none';
                }
            });

            sec.style.display = hasVisible ? 'block' : 'none';
        });
    });
}

// Sidebar Toggle
function toggleSidebar(show) {
    if (!sidebar) return;
    const isVisible = sidebar.classList.contains('open');
    const shouldShow = show !== undefined ? show : !isVisible;

    if (shouldShow) {
        sidebar.classList.add('open');
        if (sidebarOverlay) sidebarOverlay.classList.add('visible');
    } else {
        sidebar.classList.remove('open');
        if (sidebarOverlay) sidebarOverlay.classList.remove('visible');
    }
}

if (sidebarToggle) sidebarToggle.addEventListener('click', () => toggleSidebar());
if (sidebarOverlay) sidebarOverlay.addEventListener('click', () => toggleSidebar(false));

// Initial Load
sectionsStruture = parseData(data);
renderNav();

// Render Stats
const statsList = document.getElementById('stats-list');
if (statsList) {
    const totalSections = sectionsStruture.length;
    const totalTopics = sectionsStruture.reduce((acc, sec) => acc + sec.items.length, 0);

    statsList.innerHTML = `
        <li>📚 ${totalSections} أقسام تعليمية</li>
        <li>📝 ${totalTopics} درس وموضوع</li>
        <li>💡 شرح بالدارجة والعربية</li>
    `;
}
