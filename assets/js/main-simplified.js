// ===== MAIN APPLICATION =====
(function() {
    'use strict';
    
    // Project data
    const projectsData = [
        {
            id: 1,
            title: "Drawnscape",
            description: "An immersive drawing and creativity game that lets players create and explore artistic worlds.",
            image: "assets/img/Drawnscape/Drawnscape_Front_IMG.webp",
            technologies: ["Unity", "C#", "Mobile"],
            category: "mobile",
            links: { demo: "#", github: "#" },
            gallery: [
                "assets/img/Drawnscape/FeatureGraphic.webp",
                "assets/img/Drawnscape/FeatureGraphic_3.webp",
                "assets/img/Drawnscape/FeatureGraphic_4.webp"
            ],
            fullDescription: "Drawnscape is a creative mobile game that combines drawing mechanics with exploration gameplay."
        },
        {
            id: 2,
            title: "Pixel Gun World",
            description: "A dynamic pixel-art battle royale game with infinite gameplay possibilities.",
            image: "assets/img/PGW/PGW_Infinite.webp",
            technologies: ["Unity", "C#", "Multiplayer"],
            category: "unity",
            links: { demo: "#", github: "#" },
            gallery: ["assets/img/PGW/PGW_SS1 (2).jpg", "assets/img/PGW/PGW_SS1 (3).jpg"],
            fullDescription: "Pixel Gun World is a fast-paced multiplayer shooter with retro pixel art aesthetics."
        }
        // Add more projects as needed
    ];
    
    // Initialize application
    function init() {
        console.log('Main application initializing...');
        
        // Initialize components that don't have their own modules
        initHero();
        initProjects();
        initSkills();
        initContact();
        initStatsAnimation();
        
        console.log('Main application initialized');
    }
    
    // Hero section initialization
    function initHero() {
        // Typed text animation
        const typedElement = document.querySelector('.typed');
        if (typedElement) {
            // Simple typed animation placeholder
            console.log('Hero section initialized');
        }
    }
    
    // Projects section initialization
    function initProjects() {
        console.log('Initializing projects...');
        const projectsGrid = document.getElementById('projects-grid');
        if (projectsGrid) {
            renderProjects();
        }
    }
    
    // Render projects
    function renderProjects() {
        const projectsGrid = document.getElementById('projects-grid');
        if (!projectsGrid) return;
        
        projectsGrid.innerHTML = projectsData.map(project => `
            <div class="project-card" data-category="${project.category}">
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}">
                </div>
                <div class="project-content">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-tech">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    // Skills section initialization
    function initSkills() {
        console.log('Skills section initialized');
    }
    
    // Contact section initialization
    function initContact() {
        console.log('Contact section initialized');
    }
    
    // Stats animation
    function initStatsAnimation() {
        const statNumbers = document.querySelectorAll('.stat-number, .counter');
        statNumbers.forEach(function(stat) {
            const target = parseInt(stat.dataset.target || stat.textContent);
            if (target) {
                animateNumber(stat, target);
            }
        });
    }
    
    // Animate numbers
    function animateNumber(element, target) {
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(function() {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 50);
    }
    
    // Expose functions globally for other modules
    window.initProjects = initProjects;
    window.initSkills = initSkills;
    window.initStatsAnimation = initStatsAnimation;
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
})();
