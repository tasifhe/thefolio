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
        },
        {
            id: 3,
            title: "Pixel Gun World: Forest",
            description: "Forest expansion featuring procedural terrain and advanced survival mechanics.",
            image: "assets/img/PGWF/PGW_2_FOREST_(1)-min.webp",
            technologies: ["Unity", "C#", "Procedural Generation"],
            category: "procedural",
            links: { demo: "#", github: "#" },
            gallery: [
                "assets/img/PGWF/PGW_2_FOREST(2)-min.webp",
                "assets/img/PGWF/PGW_2_FOREST(3)-min.webp",
                "assets/img/PGWF/PGW_2_FOREST(4)-min.webp"
            ],
            fullDescription: "An advanced forest survival game with procedural terrain generation and dynamic ecosystem."
        },
        {
            id: 4,
            title: "RawWar",
            description: "Strategic warfare game with advanced AI and procedural battlefields.",
            image: "assets/img/RAWWAR/ProjectRawWar.webp",
            technologies: ["Unity", "C#", "AI"],
            category: "unity",
            links: { demo: "#", github: "#" },
            gallery: [
                "assets/img/RAWWAR/RAWWAR_MAINMENU.jpg",
                "assets/img/RAWWAR/RAWWAR_PLAYGROUND.webp",
                "assets/img/RAWWAR/RAWWAR_PLAYGROUND3.jpg"
            ],
            fullDescription: "A strategic warfare game featuring advanced AI systems and procedurally generated battlefields."
        },
        {
            id: 5,
            title: "Player Controller System",
            description: "Advanced third-person player controller with smooth animations and physics.",
            image: "assets/img/SMTPCC/TP_Player_Controller.png",
            technologies: ["Unity", "C#", "Animation"],
            category: "unity",
            links: { demo: "#", github: "#" },
            gallery: [
                "assets/img/SMTPCC/TP_Player_Controller(1).png",
                "assets/img/SMTPCC/TP_Player_Controller(2).png",
                "assets/img/SMTPCC/TP_Player_Controller(3).png"
            ],
            fullDescription: "A sophisticated third-person player controller system with advanced movement mechanics."
        },
        {
            id: 6,
            title: "Project Control Panel",
            description: "Comprehensive game development dashboard and project management tool.",
            image: "assets/img/PCP/PCP_SS1.png",
            technologies: ["Unity", "C#", "UI/UX"],
            category: "2d",
            links: { demo: "#", github: "#" },
            gallery: [
                "assets/img/PCP/PCP_SS2.png",
                "assets/img/PCP/PCP_SS3.png",
                "assets/img/PCP/PCP_SS4.png",
                "assets/img/PCP/PCP_SS5.png"
            ],
            fullDescription: "A comprehensive dashboard system for managing game development projects and assets."
        }
    ];
    
    // Initialize application
    function init() {
        console.log('Main application initializing...');
        
        // Initialize components that don't have their own modules
        initHero();
        initProjects();
        initProjectFilters();
        initModalClose();
        initContactForm();
        initSkills();
        initContact();
        initStatsAnimation();
        
        console.log('Main application initialized');
    }
    
    // Hero section initialization
    function initHero() {
        console.log('Initializing hero section...');
        
        // Initialize typewriter effect
        initTypewriter();
        
        // Initialize floating elements animation
        initFloatingElements();
        
        // Initialize hero animations
        setTimeout(() => {
            const heroElements = document.querySelectorAll('.hero-title, .hero-subtitle, .hero-buttons');
            heroElements.forEach((el, index) => {
                setTimeout(() => {
                    el.classList.add('fade-in');
                }, index * 200);
            });
        }, 500);
    }
    
    // Typewriter effect for hero subtitle
    function initTypewriter() {
        const typed = document.querySelector('.typed');
        if (!typed) return;
        
        const items = typed.dataset.typedItems;
        if (!items) return;
        
        const words = items.split(',');
        let currentWord = 0;
        let currentChar = 0;
        let isDeleting = false;
        
        function typeWriter() {
            const current = words[currentWord];
            
            if (isDeleting) {
                typed.textContent = current.substring(0, currentChar - 1);
                currentChar--;
            } else {
                typed.textContent = current.substring(0, currentChar + 1);
                currentChar++;
            }
            
            let speed = isDeleting ? 50 : 100;
            
            if (!isDeleting && currentChar === current.length) {
                speed = 2000; // Pause at end
                isDeleting = true;
            } else if (isDeleting && currentChar === 0) {
                isDeleting = false;
                currentWord = (currentWord + 1) % words.length;
                speed = 500; // Pause between words
            }
            
            setTimeout(typeWriter, speed);
        }
        
        setTimeout(typeWriter, 1000);
    }
    
    // Floating elements animation
    function initFloatingElements() {
        const floatingElements = document.querySelectorAll('.floating-element');
        
        floatingElements.forEach(element => {
            const speed = parseFloat(element.dataset.speed) || 0.5;
            
            // Random initial position
            element.style.left = Math.random() * 100 + '%';
            element.style.top = Math.random() * 100 + '%';
            
            // Animate floating
            setInterval(() => {
                const currentLeft = parseFloat(element.style.left);
                const currentTop = parseFloat(element.style.top);
                
                element.style.left = (currentLeft + (Math.random() - 0.5) * speed) + '%';
                element.style.top = (currentTop + (Math.random() - 0.5) * speed) + '%';
                
                // Keep within bounds
                if (parseFloat(element.style.left) < 0) element.style.left = '0%';
                if (parseFloat(element.style.left) > 100) element.style.left = '100%';
                if (parseFloat(element.style.top) < 0) element.style.top = '0%';
                if (parseFloat(element.style.top) > 100) element.style.top = '100%';
            }, 2000);
        });
    }
    
    // Projects section initialization
    function initProjects() {
        console.log('Initializing projects...');
        const projectsGrid = document.getElementById('projects-grid');
        if (projectsGrid) {
            renderProjects();
            console.log('Projects rendered successfully');
        } else {
            console.error('Projects grid not found');
        }
    }
    
    // Render projects
    function renderProjects() {
        const projectsGrid = document.getElementById('projects-grid');
        if (!projectsGrid) return;
        
        projectsGrid.innerHTML = projectsData.map(project => `
            <div class="project-card game-project-card" data-category="${project.category}" data-aos="fade-up">
                <div class="project-image-container">
                    <img src="${project.image}" alt="${project.title}" class="project-image lazy">
                    <div class="project-overlay">
                        <div class="project-actions">
                            <button class="btn-project-view" data-project="${project.id}">
                                <i class="bi bi-eye"></i>
                                <span>VIEW DETAILS</span>
                            </button>
                            ${project.links.demo !== '#' ? `<a href="${project.links.demo}" class="btn-project-demo" target="_blank">
                                <i class="bi bi-play-circle"></i>
                                <span>DEMO</span>
                            </a>` : ''}
                        </div>
                    </div>
                </div>
                <div class="project-content">
                    <div class="project-header">
                        <h3 class="project-title">${project.title}</h3>
                        <div class="project-category">${project.category.toUpperCase()}</div>
                    </div>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tech">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                </div>
                <div class="project-frame"></div>
            </div>
        `).join('');
        
        // Add click event listeners for project details
        document.querySelectorAll('.btn-project-view').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const projectId = parseInt(e.currentTarget.dataset.project);
                openProjectModal(projectId);
            });
        });
    }
    
    // Project modal functionality
    function openProjectModal(projectId) {
        const project = projectsData.find(p => p.id === projectId);
        if (!project) return;
        
        const modal = document.getElementById('project-modal');
        const modalBody = document.getElementById('modal-body');
        
        modalBody.innerHTML = `
            <div class="project-modal-content">
                <div class="project-modal-header">
                    <h2 class="project-modal-title">${project.title}</h2>
                    <div class="project-modal-category">${project.category.toUpperCase()}</div>
                </div>
                
                <div class="project-modal-gallery">
                    <div class="main-image">
                        <img src="${project.image}" alt="${project.title}">
                    </div>
                    ${project.gallery && project.gallery.length > 0 ? `
                        <div class="gallery-thumbnails">
                            ${project.gallery.map(img => `
                                <img src="${img}" alt="${project.title}" class="gallery-thumb" onclick="changeMainImage('${img}')">
                            `).join('')}
                        </div>
                    ` : ''}
                </div>
                
                <div class="project-modal-details">
                    <div class="project-description">
                        <h3>PROJECT OVERVIEW</h3>
                        <p>${project.fullDescription}</p>
                    </div>
                    
                    <div class="project-technologies">
                        <h3>TECHNOLOGIES USED</h3>
                        <div class="tech-list">
                            ${project.technologies.map(tech => `<span class="tech-tag-large">${tech}</span>`).join('')}
                        </div>
                    </div>
                    
                    <div class="project-links">
                        ${project.links.demo !== '#' ? `<a href="${project.links.demo}" class="btn game-button btn-primary" target="_blank">
                            <span class="button-text">VIEW DEMO</span>
                            <span class="button-icon">🚀</span>
                        </a>` : ''}
                        ${project.links.github !== '#' ? `<a href="${project.links.github}" class="btn game-button btn-secondary" target="_blank">
                            <span class="button-text">VIEW CODE</span>
                            <span class="button-icon">📄</span>
                        </a>` : ''}
                    </div>
                </div>
            </div>
        `;
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    
    // Change main image in project modal
    window.changeMainImage = function(imageSrc) {
        const mainImage = document.querySelector('.project-modal-gallery .main-image img');
        if (mainImage) {
            mainImage.src = imageSrc;
        }
    };
    
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
        // Animate counter numbers
        const counters = document.querySelectorAll('.stat-number, .counter, .purecounter');
        const progressBars = document.querySelectorAll('.counter-progress-fill');
        
        // Set up intersection observer for animation trigger
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Animate counters
                    const statNumbers = entry.target.querySelectorAll('.stat-number, .counter, .purecounter');
                    statNumbers.forEach(function(stat) {
                        const target = parseInt(stat.dataset.target || stat.textContent);
                        if (target && !stat.classList.contains('animated')) {
                            animateNumber(stat, target);
                            stat.classList.add('animated');
                        }
                    });
                    
                    // Animate progress bars
                    const progressBars = entry.target.querySelectorAll('.counter-progress-fill');
                    progressBars.forEach(function(bar) {
                        const progress = bar.dataset.progress;
                        if (progress && !bar.classList.contains('animated')) {
                            setTimeout(() => {
                                bar.style.width = progress + '%';
                                bar.classList.add('animated');
                            }, 300);
                        }
                    });
                    
                    // Animate skill bars
                    const skillBars = entry.target.querySelectorAll('.skill-progress');
                    skillBars.forEach(function(bar) {
                        const width = bar.dataset.width;
                        if (width && !bar.classList.contains('animated')) {
                            setTimeout(() => {
                                bar.style.width = width;
                                bar.classList.add('animated');
                            }, 200);
                        }
                    });
                }
            });
        }, {
            threshold: 0.3
        });
        
        // Observe all sections with stats
        document.querySelectorAll('.counter-mf, .game-counter-section, .achievements-panel, .skills').forEach(section => {
            observer.observe(section);
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
    
    // Project filtering
    function initProjectFilters() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');
        
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');
                
                const filter = btn.dataset.filter;
                
                projectCards.forEach(card => {
                    if (filter === 'all' || card.dataset.category === filter) {
                        card.style.display = 'block';
                        card.classList.add('show');
                    } else {
                        card.style.display = 'none';
                        card.classList.remove('show');
                    }
                });
            });
        });
    }
    
    // Close modal functionality
    function initModalClose() {
        const modal = document.getElementById('project-modal');
        const closeBtn = document.querySelector('.close');
        
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            });
        }
        
        // Close modal when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
    
    // Contact form functionality
    function initContactForm() {
        const contactForm = document.getElementById('contact-form');
        if (!contactForm) return;
        
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                subject: formData.get('subject'),
                message: formData.get('message')
            };
            
            // Validate form
            if (!validateContactForm(data)) {
                return;
            }
            
            // Submit form (you can integrate with a backend service here)
            submitContactForm(data);
        });
    }
    
    function validateContactForm(data) {
        let isValid = true;
        const errors = [];
        
        // Clear previous errors
        document.querySelectorAll('.form-error').forEach(error => error.remove());
        
        if (!data.name || data.name.trim().length < 2) {
            errors.push({ field: 'name', message: 'Name must be at least 2 characters long' });
            isValid = false;
        }
        
        if (!data.email || !isValidEmail(data.email)) {
            errors.push({ field: 'email', message: 'Please enter a valid email address' });
            isValid = false;
        }
        
        if (!data.message || data.message.trim().length < 10) {
            errors.push({ field: 'message', message: 'Message must be at least 10 characters long' });
            isValid = false;
        }
        
        // Display errors
        errors.forEach(error => {
            const field = document.getElementById(error.field);
            if (field) {
                const errorElement = document.createElement('div');
                errorElement.className = 'form-error';
                errorElement.textContent = error.message;
                errorElement.style.color = 'var(--danger-glow)';
                errorElement.style.fontSize = '0.8rem';
                errorElement.style.marginTop = '0.5rem';
                field.parentNode.appendChild(errorElement);
            }
        });
        
        return isValid;
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    async function submitContactForm(data) {
        const submitButton = document.querySelector('#contact-form button[type="submit"]');
        const originalText = submitButton.innerHTML;
        
        // Show loading state
        submitButton.innerHTML = '<span class="button-text">TRANSMITTING...</span><span class="button-icon">⏳</span>';
        submitButton.disabled = true;
        
        try {
            // Simulate form submission (replace with actual endpoint)
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Show success message
            showNotification('Message transmitted successfully! I will get back to you soon.', 'success');
            document.getElementById('contact-form').reset();
            
        } catch (error) {
            console.error('Contact form submission error:', error);
            showNotification('Failed to transmit message. Please try again or contact directly via email.', 'error');
        } finally {
            // Reset button
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
        }
    }
    
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        document.querySelectorAll('.notification').forEach(notif => notif.remove());
        
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="bi bi-${type === 'success' ? 'check-circle' : type === 'error' ? 'x-circle' : 'info-circle'}"></i>
                <span>${message}</span>
                <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                    <i class="bi bi-x"></i>
                </button>
            </div>
        `;
        
        // Style the notification
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--glass-bg);
            border: 1px solid var(--glass-border);
            border-radius: 10px;
            padding: 1rem;
            backdrop-filter: blur(10px);
            z-index: 10000;
            max-width: 400px;
            animation: slideInRight 0.3s ease;
            color: var(--text-primary);
        `;
        
        document.body.appendChild(notification);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 5000);
    }

    // Debug function to check page status
    function debugPageStatus() {
        console.log('=== PAGE DEBUG INFO ===');
        console.log('Document ready state:', document.readyState);
        console.log('Sections found:', document.querySelectorAll('section').length);
        console.log('CSS files loaded:', document.querySelectorAll('link[rel="stylesheet"]').length);
        console.log('Script files loaded:', document.querySelectorAll('script').length);
        
        // Check each section
        const sections = ['about', 'services', 'projects', 'skills', 'contact'];
        sections.forEach(id => {
            const section = document.getElementById(id);
            console.log(`Section ${id}:`, section ? 'Found' : 'Missing');
        });
        
        // Check critical elements
        const criticalElements = [
            '#projects-grid',
            '.services-grid', 
            '.counter-grid',
            '.skills-container',
            '.contact-form'
        ];
        
        criticalElements.forEach(selector => {
            const element = document.querySelector(selector);
            console.log(`Element ${selector}:`, element ? 'Found' : 'Missing');
        });
        
        console.log('=== END DEBUG INFO ===');
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
