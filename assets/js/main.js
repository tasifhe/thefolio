// ===== GLOBAL VARIABLES =====
let isLoading = true;
let currentFilter = 'all';

// ===== PROJECT DATA =====
const projectsData = [
    {
        id: 1,
        title: "Drawnscape",
        description: "An immersive drawing and creativity game that lets players create and explore artistic worlds.",
        image: "assets/img/Drawnscape/Drawnscape_Front_IMG.webp",
        technologies: ["Unity", "C#", "Mobile"],
        category: "mobile",
        links: {
            demo: "#",
            github: "#"
        },
        gallery: [
            "assets/img/Drawnscape/FeatureGraphic.webp",
            "assets/img/Drawnscape/FeatureGraphic_3.webp",
            "assets/img/Drawnscape/FeatureGraphic_4.webp",
            "assets/img/Drawnscape/FeatureGraphic_5.webp"
        ],
        fullDescription: "Drawnscape is a creative mobile game that combines drawing mechanics with exploration gameplay. Players can create their own artistic worlds and share them with the community. The game features an intuitive drawing system, procedural generation, and social sharing capabilities."
    },
    {
        id: 2,
        title: "Pixel Gun World",
        description: "A dynamic pixel-art battle royale game with infinite gameplay possibilities.",
        image: "assets/img/PGW/PGW_Infinite.webp",
        technologies: ["Unity", "C#", "Multiplayer"],
        category: "unity",
        links: {
            demo: "#",
            github: "#"
        },
        gallery: [
            "assets/img/PGW/PGW_SS1 (2).jpg",
            "assets/img/PGW/PGW_SS1 (3).jpg",
            "assets/img/PGW/PGWmin_GIF.gif"
        ],
        fullDescription: "Pixel Gun World is a fast-paced multiplayer shooter with retro pixel art aesthetics. Features include real-time multiplayer battles, customizable weapons, and dynamic maps. The game supports both casual and competitive gameplay modes."
    },
    {
        id: 3,
        title: "PGW Forest",
        description: "A survival adventure game set in a mysterious forest environment.",
        image: "assets/img/PGWF/PGW_2_FOREST_(1)-min.webp",
        technologies: ["Unity", "C#", "3D"],
        category: "unity",
        links: {
            demo: "#",
            github: "#"
        },
        gallery: [
            "assets/img/PGWF/PGW_2_FOREST(2)-min.webp",
            "assets/img/PGWF/PGW_2_FOREST(3)-min.webp",
            "assets/img/PGWF/PGW_2_FOREST(4)-min.webp",
            "assets/img/PGWF/PGW_Forest_GIF.gif"
        ],
        fullDescription: "PGW Forest is an immersive survival game where players must navigate through a mysterious forest filled with challenges and secrets. Features include resource management, crafting systems, and dynamic weather effects."
    },
    {
        id: 4,
        title: "Raw War",
        description: "An intense tactical combat game with strategic gameplay elements.",
        image: "assets/img/RAWWAR/ProjectRawWar.webp",
        technologies: ["Unity", "C#", "AI"],
        category: "unity",
        links: {
            demo: "#",
            github: "#"
        },
        gallery: [
            "assets/img/RAWWAR/RAWWAR_MAINMENU.jpg",
            "assets/img/RAWWAR/RAWWAR_PLAYGROUND.webp",
            "assets/img/RAWWAR/RAWWAR_PLAYGROUND3.jpg",
            "assets/img/RAWWAR/RawWar_GIF.gif"
        ],
        fullDescription: "Raw War is a tactical combat game that emphasizes strategic thinking and resource management. Players command units in intense battles with AI-driven opponents. The game features advanced AI systems, dynamic battlefields, and multiple gameplay modes."
    },
    {
        id: 5,
        title: "Player Control System",
        description: "A comprehensive third-person player controller with advanced movement mechanics.",
        image: "assets/img/SMTPCC/TP_Player_Controller.png",
        technologies: ["Unity", "C#", "Animation"],
        category: "unity",
        links: {
            demo: "#",
            github: "#"
        },
        gallery: [
            "assets/img/SMTPCC/TP_Player_Controller(1).png",
            "assets/img/SMTPCC/TP_Player_Controller(2).png",
            "assets/img/SMTPCC/TP_Player_Controller(3).png"
        ],
        fullDescription: "A sophisticated player control system designed for third-person games. Features include smooth movement, advanced animation blending, camera controls, and interaction systems. The system is modular and easily customizable for different game types."
    },
    {
        id: 6,
        title: "PCP Game",
        description: "A puzzle-platformer game with unique mechanics and challenging levels.",
        image: "assets/img/PCP/PCP_SS1.png",
        technologies: ["Unity", "C#", "2D"],
        category: "unity",
        links: {
            demo: "#",
            github: "#"
        },
        gallery: [
            "assets/img/PCP/PCP_SS2.png",
            "assets/img/PCP/PCP_SS3.png",
            "assets/img/PCP/PCP_SS4.png",
            "assets/img/PCP/PCP_SS5.png",
            "assets/img/PCP/PCP_SS7.png"
        ],
        fullDescription: "PCP is a puzzle-platformer that challenges players with unique mechanics and cleverly designed levels. The game features physics-based puzzles, collectible items, and a progression system that unlocks new abilities as players advance."
    }
];

// ===== DOM CONTENT LOADED =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded - Starting initialization...');
    
    // Debug: Check if elements exist
    const navbar = document.getElementById('navbar');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    console.log('Debug - Found elements:');
    console.log('- Navbar:', navbar ? 'Yes' : 'No');
    console.log('- Nav Menu:', navMenu ? 'Yes' : 'No');
    console.log('- Nav Links:', navLinks.length);
    console.log('- Sections:', sections.length);
    
    sections.forEach(section => {
        console.log(`- Section ID: ${section.id}`);
    });
    
    // Detect modern features first
    const features = detectFeatures();
    
    // Initialize performance optimizations
    initPerformanceOptimizations();
    
    // Initialize loading screen
    initLoadingScreen();
    
    // Add skip loading functionality
    const skipButton = document.getElementById('skip-loading');
    if (skipButton) {
        skipButton.addEventListener('click', () => {
            hideLoadingScreen();
        });
    }
    
    // Hide loading screen after realistic loading time
    setTimeout(() => {
        hideLoadingScreen();
    }, 4000); // 4 seconds to complete the loading sequence

    // Initialize all components
    initNavigation();
    initGlobalLinkHandler();
    initHero();
    
    // Initialize lazy loading if supported
    if (features.intersectionObserver) {
        initLazyLoading();
    } else {
        // Fallback for older browsers
        initProjects();
        initSkills();
        initStatsAnimation();
    }
    
    initContact();
    initScrollAnimations();
    initModal();
    
    // Initialize projects if not lazy loading
    if (!features.intersectionObserver) {
        initProjects();
    }
    
    // Additional check to ensure hero is properly initialized
    setTimeout(() => {
        if (!document.querySelector('.particles-container .particle')) {
            console.log('Re-initializing hero particles...');
            generateHeroParticles();
        }
    }, 1000);
});

// ===== LOADING SCREEN =====
function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        loadingScreen.classList.add('fade-out');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            isLoading = false;
        }, 800);
    }
}

function initLoadingScreen() {
    const progressBar = document.querySelector('.progress-bar');
    const progressText = document.querySelector('.progress-text');
    const loadingPercentage = document.querySelector('.loading-percentage');
    const stepDots = document.querySelectorAll('.step-dot');
    
    if (!progressBar || !progressText) {
        console.warn('Loading screen elements not found');
        return;
    }
    
    const loadingSteps = [
        'Initializing systems...',
        'Loading game assets...',
        'Preparing world data...',
        'Connecting to server...',
        'Optimizing performance...',
        'Ready to play!'
    ];
    
    let currentStep = 0;
    let currentPercentage = 0;
    const stepInterval = 600; // 600ms per step
    const percentageIncrement = Math.floor(100 / loadingSteps.length);
    
    const updateProgress = () => {
        if (currentStep < loadingSteps.length) {
            // Update text with typewriter effect
            progressText.style.opacity = '0';
            setTimeout(() => {
                progressText.textContent = loadingSteps[currentStep];
                progressText.style.opacity = '1';
            }, 100);
            
            // Update percentage
            currentPercentage = Math.min(100, (currentStep + 1) * percentageIncrement);
            if (loadingPercentage) {
                loadingPercentage.textContent = `${currentPercentage}%`;
            }
            
            // Update step dots
            if (stepDots.length > 0) {
                // Mark previous dots as completed
                stepDots.forEach((dot, index) => {
                    if (index < currentStep) {
                        dot.classList.remove('active');
                        dot.classList.add('completed');
                    } else if (index === currentStep) {
                        dot.classList.add('active');
                        dot.classList.remove('completed');
                    } else {
                        dot.classList.remove('active', 'completed');
                    }
                });
            }
            
            currentStep++;
            setTimeout(updateProgress, stepInterval);
        } else {
            // Final step - mark all as completed
            if (loadingPercentage) {
                loadingPercentage.textContent = '100%';
            }
            stepDots.forEach(dot => {
                dot.classList.remove('active');
                dot.classList.add('completed');
            });
        }
    };
    
    // Start the loading sequence
    updateProgress();
    
    // Ensure progress bar animation starts
    setTimeout(() => {
        if (progressBar) {
            progressBar.style.animation = 'loadingProgress 4s ease-out forwards, progressShine 2s ease-in-out infinite';
        }
    }, 100);
}

// ===== NAVIGATION =====
function initNavigation() {
    console.log('Initializing navigation...');
    
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!navbar || !navToggle || !navMenu) {
        console.error('Navigation elements not found');
        return;
    }

    console.log(`Found ${navLinks.length} navigation links`);

    // Simple click handler for navigation links
    navLinks.forEach((link, index) => {
        console.log(`Setting up link ${index}: ${link.getAttribute('href')}`);
        
        link.addEventListener('click', function(e) {
            console.log(`Navigation link clicked: ${this.getAttribute('href')}`);
            
            const href = this.getAttribute('href');
            
            // Skip if it's an external link or empty
            if (!href || !href.startsWith('#') || href === '#') {
                console.log('Skipping external or empty link');
                return;
            }
            
            e.preventDefault();
            e.stopPropagation();
            
            // Close mobile menu first
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
            
            // Find target section
            const targetSection = document.querySelector(href);
            console.log(`Target section found:`, targetSection);
            
            if (targetSection) {
                // Calculate scroll position
                const navbarHeight = navbar.offsetHeight || 80;
                const targetPosition = targetSection.offsetTop - navbarHeight - 20;
                
                console.log(`Scrolling to position: ${targetPosition}`);
                
                // Smooth scroll
                window.scrollTo({
                    top: Math.max(0, targetPosition),
                    behavior: 'smooth'
                });
                
                // Update active link
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
                
                // Update URL
                if (history.pushState) {
                    history.pushState(null, null, href);
                }
            } else {
                console.error(`Target section not found: ${href}`);
            }
        });
    });

    // Mobile menu toggle
    navToggle.addEventListener('click', function(e) {
        e.preventDefault();
        const isActive = navMenu.classList.contains('active');
        
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
        navToggle.setAttribute('aria-expanded', !isActive);
        
        if (!isActive) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navbar.contains(e.target) && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    });

    // Navbar scroll effect
    let ticking = false;
    function updateNavbar() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        ticking = false;
    }
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    });

    // Update active link on scroll
    let scrollTicking = false;
    function updateActiveLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + (navbar.offsetHeight || 80) + 100;
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        if (current) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        }
        
        scrollTicking = false;
    }
    
    window.addEventListener('scroll', function() {
        if (!scrollTicking) {
            requestAnimationFrame(updateActiveLink);
            scrollTicking = true;
        }
    });

    // Set initial active link
    setTimeout(updateActiveLink, 100);
    
    console.log('Navigation initialized successfully');
}

// ===== HERO SECTION =====
function initHero() {
    // Initialize particle interaction
    initParticleInteraction();
    
    // Generate particles
    generateHeroParticles();
    
    // Initialize typed text animation
    initTypedAnimation();
    
    // Typewriter effect
    const typewriterElement = document.querySelector('.typewriter');
    if (typewriterElement) {
        const text = typewriterElement.textContent;
        typewriterElement.textContent = '';
        
        let i = 0;
        const typeInterval = setInterval(() => {
            if (i < text.length) {
                typewriterElement.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typeInterval);
            }
        }, 100);
    }

    // Floating elements animation
    const floatingElements = document.querySelectorAll('.floating-element');
    floatingElements.forEach((element, index) => {
        const speed = element.getAttribute('data-speed') || 1;
        animateFloatingElement(element, speed, index);
    });
}

function generateHeroParticles() {
    const particlesContainer = document.querySelector('.particles-container');
    if (!particlesContainer) return;
    
    // Clear existing particles
    particlesContainer.innerHTML = '';
    
    // Create different types of particles
    const particleTypes = [
        { class: 'dot', count: 15 },
        { class: 'glow', count: 10 },
        { class: 'line', count: 8 },
        { class: 'hex', count: 3 },
        { class: 'diamond', count: 3 }
    ];
    
    particleTypes.forEach(type => {
        for (let i = 0; i < type.count; i++) {
            const particle = document.createElement('div');
            particle.className = `particle ${type.class}`;
            
            // Random positioning
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            
            // Random size variations for certain types
            if (type.class === 'hex' || type.class === 'diamond') {
                const size = 8 + Math.random() * 8; // 8-16px
                particle.style.width = size + 'px';
                particle.style.height = size + 'px';
            }
            
            // Random animation delay
            particle.style.animationDelay = Math.random() * 10 + 's';
            
            particlesContainer.appendChild(particle);
        }
    });
}

function initTypedAnimation() {
    const typedElement = document.querySelector('.typed[data-typed-items]');
    if (!typedElement) return;
    
    const items = typedElement.getAttribute('data-typed-items').split(',');
    let currentIndex = 0;
    let currentText = '';
    let isDeleting = false;
    let typeSpeed = 100;
    
    function typeWriter() {
        const fullText = items[currentIndex];
        
        if (isDeleting) {
            currentText = fullText.substring(0, currentText.length - 1);
            typeSpeed = 50;
        } else {
            currentText = fullText.substring(0, currentText.length + 1);
            typeSpeed = 100;
        }
        
        typedElement.textContent = currentText;
        
        if (!isDeleting && currentText === fullText) {
            // Pause at end of word
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && currentText === '') {
            isDeleting = false;
            currentIndex = (currentIndex + 1) % items.length;
            typeSpeed = 500;
        }
        
        setTimeout(typeWriter, typeSpeed);
    }
    
    // Start the animation
    setTimeout(typeWriter, 1000);
}

// ===== PROJECTS SECTION =====
function initProjects() {
    renderProjects();
    initProjectFilters();
}

function renderProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;

    projectsGrid.innerHTML = '';

    const filteredProjects = currentFilter === 'all' 
        ? projectsData 
        : projectsData.filter(project => project.category === currentFilter);

    filteredProjects.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsGrid.appendChild(projectCard);
    });

    // Add fade-in animation
    setTimeout(() => {
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('fade-in', 'visible');
            }, index * 100);
        });
    }, 100);
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card fade-in';
    card.setAttribute('data-category', project.category);
    
    card.innerHTML = `
        <div class="project-image">
            <img src="${project.image}" alt="${project.title}" onerror="this.src='assets/img/placeholder.jpg'">
            <div class="project-overlay">
                <span>View Details</span>
            </div>
        </div>
        <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${project.links.demo}" class="project-link">Live Demo</a>
                <a href="${project.links.github}" class="project-link">GitHub</a>
            </div>
        </div>
    `;

    // Add click event to open modal
    card.addEventListener('click', () => openProjectModal(project));

    return card;
}

function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Update current filter
            currentFilter = button.getAttribute('data-filter');
            
            // Re-render projects
            renderProjects();
        });
    });
}

// ===== MODAL =====
function initModal() {
    const modal = document.getElementById('project-modal');
    const closeBtn = document.querySelector('.close');
    
    closeBtn.addEventListener('click', closeModal);
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

function openProjectModal(project) {
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    
    modalBody.innerHTML = `
        <div class="modal-project">
            <h2>${project.title}</h2>
            <div class="modal-gallery">
                ${project.gallery.map(image => `
                    <img src="${image}" alt="${project.title}" onerror="this.style.display='none'">
                `).join('')}
            </div>
            <div class="modal-content-text">
                <p>${project.fullDescription}</p>
                <div class="modal-tech">
                    <h4>Technologies Used:</h4>
                    <div class="tech-tags">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                </div>
                <div class="modal-links">
                    <a href="${project.links.demo}" class="btn btn-primary" target="_blank">Live Demo</a>
                    <a href="${project.links.github}" class="btn btn-secondary" target="_blank">View Code</a>
                </div>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('project-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// ===== SKILLS SECTION =====
function initSkills() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const width = skillBar.getAttribute('data-width');
                
                setTimeout(() => {
                    skillBar.style.width = width;
                }, 300);
                
                observer.unobserve(skillBar);
            }
        });
    }, {
        threshold: 0.5
    });
    
    skillBars.forEach(bar => {
        observer.observe(bar);
    });
}

// ===== STATS ANIMATION =====
function initStatsAnimation() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumber = entry.target;
                const target = parseInt(statNumber.getAttribute('data-target'));
                
                animateCounter(statNumber, target);
                observer.unobserve(statNumber);
            }
        });
    }, {
        threshold: 0.5
    });
    
    statNumbers.forEach(stat => {
        observer.observe(stat);
    });
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const duration = 2000;
    const stepTime = duration / 50;
    
    const timer = setInterval(() => {
        current += increment;
        element.textContent = Math.floor(current);
        
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        }
    }, stepTime);
}

// ===== CONTACT FORM =====
function initContact() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
}

function handleContactSubmit(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Simulate form submission
    showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
    
    // Reset form
    e.target.reset();
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '1rem 1.5rem',
        borderRadius: '10px',
        background: type === 'success' ? '#64ffda' : '#ff6b6b',
        color: '#0a0a0a',
        fontWeight: '600',
        zIndex: '10000',
        transform: 'translateX(100%)',
        transition: 'transform 0.3s ease'
    });
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.fade-in, .slide-left, .slide-right');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// ===== MANUAL SCROLL FUNCTION =====
function scrollToSection(sectionId) {
    console.log(`Manual scroll to: ${sectionId}`);
    
    const section = document.getElementById(sectionId);
    if (!section) {
        console.error(`Section not found: ${sectionId}`);
        return;
    }
    
    const navbar = document.getElementById('navbar');
    const navbarHeight = navbar ? navbar.offsetHeight : 80;
    const targetPosition = section.offsetTop - navbarHeight - 20;
    
    console.log(`Section found. Scrolling to position: ${targetPosition}`);
    
    // Try multiple scroll methods
    try {
        // Method 1: window.scrollTo with smooth behavior
        window.scrollTo({
            top: Math.max(0, targetPosition),
            behavior: 'smooth'
        });
        
        setTimeout(() => {
            // Method 2: scrollIntoView as fallback
            if (Math.abs(window.scrollY - targetPosition) > 50) {
                section.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            }
        }, 100);
        
    } catch (error) {
        console.error('Scroll error:', error);
        // Method 3: Basic scroll without smooth behavior
        window.scrollTo(0, Math.max(0, targetPosition));
    }
    
    // Update active nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
        }
    });
}

// Make function globally available
// window.scrollToSection = scrollToSection;
// NOTE: Global scrollToSection is now handled by navigation.js for consistency.

// ===== UTILITY FUNCTIONS =====
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// ===== PERFORMANCE OPTIMIZATIONS =====
function initPerformanceOptimizations() {
    // Debounce scroll events
    let scrollTimeout;
    const originalScrollHandlers = [];
    
    // Optimize scroll performance
    const optimizedScroll = (callback, delay = 16) => {
        return function(...args) {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => callback.apply(this, args), delay);
        };
    };

    // Preload critical images
    const preloadImages = [
        'assets/img/CoverBG3.png',
        'assets/img/Potfolio_Pic_V2.jpg',
        'assets/img/THE_IC.png'
    ];

    preloadImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });

    // Resource hints for better performance
    const addResourceHint = (url, rel = 'prefetch') => {
        const link = document.createElement('link');
        link.rel = rel;
        link.href = url;
        document.head.appendChild(link);
    };

    // Prefetch common resources
    const commonResources = [
        'assets/css/components/loading.css',
        'assets/css/components/navigation.css'
    ];

    commonResources.forEach(resource => {
        addResourceHint(resource);
    });
}

// ===== LAZY LOADING =====
function initLazyLoading() {
    // Lazy loading for images
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                
                // Handle different image loading scenarios
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                
                if (img.dataset.srcset) {
                    img.srcset = img.dataset.srcset;
                    img.removeAttribute('data-srcset');
                }
                
                img.classList.remove('lazy');
                img.classList.add('loaded');
                
                // Add fade-in effect
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.3s ease';
                setTimeout(() => {
                    img.style.opacity = '1';
                }, 50);
                
                observer.unobserve(img);
            }
        });
    }, {
        root: null,
        rootMargin: '50px',
        threshold: 0.1
    });

    // Observe all images with lazy class or data-src attribute
    const lazyImages = document.querySelectorAll('img[data-src], img.lazy, .lazy-load');
    lazyImages.forEach(img => {
        imageObserver.observe(img);
    });

    // Lazy loading for sections/components
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const section = entry.target;
                
                // Add loaded class for CSS animations
                section.classList.add('section-loaded');
                
                // Initialize section-specific functionality
                const sectionId = section.id;
                switch(sectionId) {
                    case 'projects':
                        if (!section.dataset.loaded) {
                            initProjectsLazy();
                            section.dataset.loaded = 'true';
                        }
                        break;
                    case 'skills':
                        if (!section.dataset.loaded) {
                            initSkillAnimations();
                            section.dataset.loaded = 'true';
                        }
                        break;
                    case 'counter':
                        if (!section.dataset.loaded) {
                            initStatsAnimation();
                            section.dataset.loaded = 'true';
                        }
                        break;
                }
            }
        });
    }, {
        root: null,
        rootMargin: '100px',
        threshold: 0.1
    });

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
}

// Lazy load projects (only load when needed)
function initProjectsLazy() {
    console.log('Loading projects...');
    // This will be called when projects section comes into view
    if (typeof renderProjects === 'function') {
        renderProjects();
    }
}

// ===== MODERN FEATURES DETECTION =====
function detectFeatures() {
    const features = {
        intersectionObserver: 'IntersectionObserver' in window,
        webp: false,
        modernJS: 'Promise' in window && 'fetch' in window
    };

    // WebP detection
    const webpTest = new Image();
    webpTest.onload = webpTest.onerror = function() {
        features.webp = (webpTest.height === 2);
        document.documentElement.classList.toggle('webp', features.webp);
    };
    webpTest.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';

    // Add feature classes to HTML
    Object.keys(features).forEach(feature => {
        if (features[feature]) {
            document.documentElement.classList.add(feature);
        }
    });

    return features;
}

// ===== GLOBAL LINK HANDLER =====
function initGlobalLinkHandler() {
    console.log('Initializing global link handler...');
    
    // Handle all anchor links with hash
    document.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        if (!link) return;
        
        const href = link.getAttribute('href');
        if (!href || !href.startsWith('#') || href === '#') return;
        
        // Skip if this is a nav-link (already handled)
        if (link.classList.contains('nav-link')) return;
        
        console.log(`Global link handler - clicked: ${href}`);
        
        e.preventDefault();
        e.stopPropagation();
        
        const targetSection = document.querySelector(href);
        if (targetSection) {
            const navbar = document.getElementById('navbar');
            const navbarHeight = navbar ? navbar.offsetHeight : 80;
            const targetPosition = targetSection.offsetTop - navbarHeight - 20;
            
            console.log(`Global handler - scrolling to: ${targetPosition}`);
            
            window.scrollTo({
                top: Math.max(0, targetPosition),
                behavior: 'smooth'
            });
            
            // Update active nav link
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(navLink => {
                navLink.classList.remove('active');
                if (navLink.getAttribute('href') === href) {
                    navLink.classList.add('active');
                }
            });
            
            // Update URL
            if (history.pushState) {
                history.pushState(null, null, href);
            }
        } else {
            console.error(`Target section not found: ${href}`);
        }
    });
}

// ===== SIMPLE NAVIGATION FALLBACK =====
function initSimpleNavigation() {
    console.log('Initializing simple navigation fallback...');
    
    // Wait a bit to ensure DOM is fully ready
    setTimeout(() => {
        const navLinks = document.querySelectorAll('a[href^="#"]');
        console.log(`Found ${navLinks.length} hash links`);
        
        navLinks.forEach((link, index) => {
            const href = link.getAttribute('href');
            console.log(`Link ${index}: ${href}`);
            
            if (href && href !== '#') {
                link.addEventListener('click', function(e) {
                    console.log(`Simple nav - Link clicked: ${href}`);
                    
                    const target = document.querySelector(href);
                    if (target) {
                        e.preventDefault();
                        
                        // Simple scroll to target
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                        
                        console.log('Simple nav - Scrolled to target');
                    } else {
                        console.log(`Simple nav - Target not found: ${href}`);
                    }
                });
            }
        });
    }, 1000);
}

// ===== DIRECT TEST FUNCTION =====
function testNavigation() {
    console.log('=== NAVIGATION TEST ===');
    
    // Test if sections exist
    const sections = ['home', 'about', 'services', 'projects', 'skills', 'contact'];
    sections.forEach(id => {
        const section = document.getElementById(id);
        console.log(`Section ${id}:`, section ? 'Found' : 'NOT FOUND');
        if (section) {
            console.log(`  - Position: ${section.offsetTop}`);
        }
    });
    
    // Test if nav links exist
    const navLinks = document.querySelectorAll('.nav-link');
    console.log(`Nav links found: ${navLinks.length}`);
    navLinks.forEach((link, i) => {
        console.log(`  Link ${i}: ${link.getAttribute('href')}`);
    });
    
    // Test scroll to about section
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
        console.log('Testing scroll to about section...');
        setTimeout(() => {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }, 1000);
    }
}

// Run test after page loads
window.addEventListener('load', () => {
    setTimeout(testNavigation, 2000);
});

// Initialize all features
function init() {
    const features = detectFeatures();
    
    initPerformanceOptimizations();
    initLoadingScreen();
    initNavigation();
    initHero();
    initContact();
    initScrollAnimations();
    initModal();
    initGlobalLinkHandler();
    
    // Initialize lazy loading if supported
    if (features.intersectionObserver) {
        initLazyLoading();
    } else {
        // Fallback for older browsers
        initProjects();
        initSkills();
        initStatsAnimation();
    }
    
    // Initial projects load
    initProjects();
}

// Start the initialization
init();

// Initialize simple navigation as backup
setTimeout(initSimpleNavigation, 2000);
