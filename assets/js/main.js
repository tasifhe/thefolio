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
    initHero();
    initProjects();
    initSkills();
    initContact();
    initScrollAnimations();
    initModal();
    
    // Update stats animation
    initStatsAnimation();
    
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
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scrolling and active link update
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Update active link on scroll
    window.addEventListener('scroll', updateActiveLink);
}

function updateActiveLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
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
// Optimize scroll events
window.addEventListener('scroll', throttle(() => {
    updateActiveLink();
}, 100));

// Lazy load images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// ===== ENHANCED GAMING UI FUNCTIONALITY =====

// ===== ADVANCED LOADING SCREEN =====
function initAdvancedLoadingScreen() {
    const progressBar = document.querySelector('.progress-bar');
    const progressText = document.querySelector('.progress-text');
    const loadingMessages = [
        'Initializing systems...',
        'Loading assets...',
        'Establishing connection...',
        'Calibrating interface...',
        'Ready to deploy!'
    ];
    
    let progress = 0;
    let messageIndex = 0;
    
    const loadingInterval = setInterval(() => {
        progress += Math.random() * 15 + 5;
        
        if (progress >= 100) {
            progress = 100;
            clearInterval(loadingInterval);
            setTimeout(() => {
                hideLoadingScreen();
            }, 500);
        }
        
        if (progressBar) {
            progressBar.style.width = progress + '%';
        }
        
        if (progressText && messageIndex < loadingMessages.length) {
            progressText.textContent = loadingMessages[messageIndex];
            if (progress > (messageIndex + 1) * 20) {
                messageIndex++;
            }
        }
    }, 200);
}

// ===== TERMINAL-STYLE TYPEWRITER =====
function initTerminalTypewriter() {
    const terminalElements = document.querySelectorAll('.terminal-typewriter');
    
    terminalElements.forEach(element => {
        const text = element.dataset.text || element.textContent;
        const speed = parseInt(element.dataset.speed) || 50;
        
        element.innerHTML = '';
        
        let i = 0;
        const cursor = document.createElement('span');
        cursor.className = 'terminal-cursor';
        cursor.textContent = '|';
        element.appendChild(cursor);
        
        const typeInterval = setInterval(() => {
            if (i < text.length) {
                element.insertBefore(document.createTextNode(text.charAt(i)), cursor);
                i++;
            } else {
                clearInterval(typeInterval);
                cursor.style.animation = 'blink 1s infinite';
            }
        }, speed);
    });
}

// ===== HUD ELEMENTS ANIMATION =====
function initHUDElements() {
    // Scanner effect for profile images
    const profileFrames = document.querySelectorAll('.profile-frame');
    profileFrames.forEach(frame => {
        const scanner = frame.querySelector('.profile-scanner');
        if (scanner) {
            setInterval(() => {
                scanner.style.animation = 'none';
                setTimeout(() => {
                    scanner.style.animation = 'scanEffect 3s ease-in-out';
                }, 100);
            }, 5000);
        }
    });
    
    // Level indicator animation
    const levelBars = document.querySelectorAll('.level-progress');
    levelBars.forEach(bar => {
        const targetWidth = bar.style.width || '85%';
        bar.style.width = '0%';
        
        setTimeout(() => {
            bar.style.width = targetWidth;
        }, 1000);
    });
}

// ===== GLITCH EFFECTS =====
function initGlitchEffects() {
    const glitchElements = document.querySelectorAll('.glitch-effect');
    
    glitchElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            triggerGlitchAnimation(element);
        });
    });
}

function triggerGlitchAnimation(element) {
    const originalText = element.textContent;
    const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    
    let iterations = 0;
    const maxIterations = 10;
    
    const glitchInterval = setInterval(() => {
        element.textContent = originalText
            .split('')
            .map((char, index) => {
                if (index < iterations) {
                    return originalText[index];
                }
                return glitchChars[Math.floor(Math.random() * glitchChars.length)];
            })
            .join('');
            
        if (iterations >= originalText.length) {
            clearInterval(glitchInterval);
            element.textContent = originalText;
        }
        
        iterations += 1/3;
    }, 50);
}

// ===== MINIMAL GAMING FOREGROUND PARTICLES =====
function initParticleSystem() {
    const particleContainers = document.querySelectorAll('.particles-container');
    
    particleContainers.forEach(container => {
        createMinimalForegroundParticles(container);
        // Very slow particle generation - minimal approach
        setInterval(() => {
            addMinimalForegroundParticle(container);
        }, 6000); // Add new particle every 6 seconds
    });
}

function createMinimalForegroundParticles(container) {
    const particleTypes = [
        { class: 'dot', count: 6, size: [2, 2] },
        { class: 'glow', count: 3, size: [3, 3] },
        { class: 'line', count: 2, size: [1, 6] }
    ];
    
    particleTypes.forEach(type => {
        for (let i = 0; i < type.count; i++) {
            createMinimalForegroundParticle(container, type);
        }
    });
}

function createMinimalForegroundParticle(container, type) {
    const particle = document.createElement('div');
    particle.className = `particle ${type.class}`;
    
    // Random position with some margin from edges
    particle.style.left = (10 + Math.random() * 80) + '%';
    particle.style.top = (10 + Math.random() * 80) + '%';
    
    // Fixed sizes for consistency
    particle.style.width = type.size[0] + 'px';
    particle.style.height = type.size[1] + 'px';
    
    // Staggered animation delays
    particle.style.animationDelay = Math.random() * 10 + 's';
    
    container.appendChild(particle);
    
    // Auto-remove line particles after they float
    if (type.class === 'line') {
        setTimeout(() => {
            if (particle.parentNode) {
                particle.remove();
            }
        }, 20000); // 20 seconds
    }
}

function addMinimalForegroundParticle(container) {
    // Occasionally add a dot
    if (Math.random() < 0.7) {
        createMinimalForegroundParticle(container, { class: 'dot', size: [2, 2] });
    }
    
    // Rarely add a glow
    if (Math.random() < 0.3) {
        createMinimalForegroundParticle(container, { class: 'glow', size: [3, 3] });
    }
    
    // Very rarely add a line
    if (Math.random() < 0.2) {
        createMinimalForegroundParticle(container, { class: 'line', size: [1, 6] });
    }
}

function getAnimationDuration(particleClass) {
    const durations = {
        'dot': 15,
        'glow': 12,
        'line': 18
    };
    return durations[particleClass] || 15;
}

// ===== MISSION STATS COUNTER =====
function initMissionStatsCounter() {
    const counters = document.querySelectorAll('.counter');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.dataset.target) || parseInt(counter.textContent);
                const duration = parseInt(counter.dataset.duration) || 2000;
                
                animateCounterWithEffects(counter, target, duration);
                observer.unobserve(counter);
            }
        });
    }, {
        threshold: 0.5
    });
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
}

function animateCounterWithEffects(element, target, duration) {
    let current = 0;
    const increment = target / (duration / 50);
    
    // Add glow effect during animation
    element.style.textShadow = '0 0 20px var(--primary-glow)';
    
    const timer = setInterval(() => {
        current += increment;
        element.textContent = Math.floor(current);
        
        // Add random flicker effect
        if (Math.random() < 0.1) {
            element.style.opacity = '0.8';
            setTimeout(() => {
                element.style.opacity = '1';
            }, 50);
        }
        
        if (current >= target) {
            element.textContent = target;
            element.style.textShadow = '0 0 10px var(--primary-glow)';
            clearInterval(timer);
            
            // Flash effect when complete
            element.style.transform = 'scale(1.1)';
            setTimeout(() => {
                element.style.transform = 'scale(1)';
            }, 200);
        }
    }, 50);
}

// ===== TERMINAL FORM VALIDATION =====
function initTerminalForm() {
    const terminalForm = document.querySelector('.terminal-form');
    if (!terminalForm) return;
    
    const inputs = terminalForm.querySelectorAll('.terminal-field');
    
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.style.boxShadow = '0 0 20px rgba(100, 255, 218, 0.4)';
            input.style.borderColor = 'var(--primary-glow)';
        });
        
        input.addEventListener('blur', () => {
            input.style.boxShadow = '0 0 15px rgba(100, 255, 218, 0.3)';
            input.style.borderColor = 'rgba(100, 255, 218, 0.2)';
        });
        
        input.addEventListener('input', () => {
            validateTerminalField(input);
        });
    });
}

function validateTerminalField(field) {
    const value = field.value.trim();
    const fieldType = field.type || field.tagName.toLowerCase();
    
    let isValid = true;
    let message = '';
    
    if (fieldType === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        isValid = emailRegex.test(value);
        message = isValid ? 'EMAIL_VALID' : 'INVALID_EMAIL_FORMAT';
    } else if (field.required && !value) {
        isValid = false;
        message = 'FIELD_REQUIRED';
    } else if (value) {
        message = 'DATA_ACCEPTED';
    }
    
    // Update field appearance
    if (isValid && value) {
        field.style.borderColor = 'var(--success-glow)';
        field.style.color = '#fff';
    } else if (!isValid) {
        field.style.borderColor = 'var(--danger-glow)';
        field.style.color = 'var(--danger-glow)';
    } else {
        field.style.borderColor = 'rgba(100, 255, 218, 0.2)';
        field.style.color = '#fff';
    }
    
    // Show terminal message
    showTerminalMessage(field, message);
}

function showTerminalMessage(field, message) {
    let messageEl = field.parentNode.querySelector('.terminal-message');
    
    if (!messageEl) {
        messageEl = document.createElement('div');
        messageEl.className = 'terminal-message';
        messageEl.style.cssText = `
            font-family: var(--game-font);
            font-size: 0.8rem;
            color: var(--primary-glow);
            margine-top: 5px;
            opacity: 0.8;
        `;
        field.parentNode.appendChild(messageEl);
    }
    
    messageEl.textContent = `> ${message}`;
}

// ===== SOUND EFFECTS SYSTEM =====
class GameSoundSystem {
    constructor() {
        this.sounds = {};
        this.enabled = true;
        this.volume = 0.3;
    }
    
    loadSound(name, url) {
        const audio = new Audio(url);
        audio.volume = this.volume;
        this.sounds[name] = audio;
    }
    
    play(name) {
        if (this.enabled && this.sounds[name]) {
            this.sounds[name].currentTime = 0;
            this.sounds[name].play().catch(() => {
                // Ignore autoplay restrictions
            });
        }
    }
    
    toggle() {
        this.enabled = !this.enabled;
        return this.enabled;
    }
}

// Initialize sound system
const soundSystem = new GameSoundSystem();

// ===== ENHANCED PROJECT FILTERS =====
function initEnhancedProjectFilters() {
    const filterButtons = document.querySelectorAll('.terminal-tab');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Get filter value
            const filter = button.dataset.filter || 'all';
            currentFilter = filter;
            
            // Add loading effect
            const projectsGrid = document.getElementById('projects-grid');
            projectsGrid.style.opacity = '0.5';
            
            // Re-render projects with delay for effect
            setTimeout(() => {
                renderEnhancedProjects();
                projectsGrid.style.opacity = '1';
            }, 300);
            
            // Sound effect
            soundSystem.play('click');
        });
    });
}

function renderEnhancedProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;

    projectsGrid.innerHTML = '';

    const filteredProjects = currentFilter === 'all' 
        ? projectsData 
        : projectsData.filter(project => project.category === currentFilter);

    filteredProjects.forEach((project, index) => {
        const projectCard = createEnhancedProjectCard(project, index);
        projectsGrid.appendChild(projectCard);
    });

    // Animate cards in
    setTimeout(() => {
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('fade-in', 'visible');
            }, index * 150);
        });
    }, 100);
}

function createEnhancedProjectCard(project, index) {
    const card = document.createElement('div');
    card.className = 'project-card game-asset fade-in';
    card.setAttribute('data-category', project.category);
    
    // Random status for demo
    const statuses = ['Active', 'Complete', 'Beta', 'Live'];
    const statusColors = ['var(--success-glow)', 'var(--primary-glow)', 'var(--warning-glow)', 'var(--danger-glow)'];
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    const statusColor = statusColors[statuses.indexOf(randomStatus)];
    
    card.innerHTML = `
        <div class="project-header asset-header">
            <img src="${project.image}" alt="${project.title}" onerror="this.src='assets/img/placeholder.jpg'">
            <div class="project-status status-badge" style="border-color: ${statusColor}; color: ${statusColor};">
                ${randomStatus}
            </div>
            <div class="project-overlay game-overlay">
                <span>Access Data</span>
            </div>
        </div>
        <div class="project-info asset-info">
            <h3 class="project-title asset-title">${project.title}</h3>
            <p class="project-category asset-category">${project.category.toUpperCase()}</p>
            <p class="project-description asset-description">${project.description}</p>
            <div class="project-tech tech-stack">
                ${project.technologies.map(tech => `<span class="tech-tag stack-item">${tech}</span>`).join('')}
            </div>
            <div class="project-actions asset-actions">
                <div class="project-links">
                    <a href="${project.links.demo}" class="project-link game-link">
                        <i class="fas fa-external-link-alt"></i>
                        <span>Deploy</span>
                    </a>
                    <a href="${project.links.github}" class="project-link game-link">
                        <i class="fab fa-github"></i>
                        <span>Source</span>
                    </a>
                </div>
                <div class="project-rating asset-rating">
                    <i class="fas fa-star"></i>
                    <span>${(Math.random() * 2 + 3).toFixed(1)}</span>
                </div>
            </div>
        </div>
    `;

    // Add enhanced click event
    card.addEventListener('click', (e) => {
        if (!e.target.closest('.project-link')) {
            openEnhancedProjectModal(project);
            soundSystem.play('select');
        }
    });
    
    // Add hover sound
    card.addEventListener('mouseenter', () => {
        soundSystem.play('hover');
    });

    return card;
}

// ===== ENHANCED MODAL =====
function openEnhancedProjectModal(project) {
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    
    modalBody.innerHTML = `
        <div class="modal-project terminal-window">
            <div class="terminal-header">
                <div class="terminal-controls">
                    <button class="terminal-btn close"></button>
                    <button class="terminal-btn minimize"></button>
                    <button class="terminal-btn maximize"></button>
                </div>
                <div class="terminal-title">PROJECT_DATA: ${project.title.toUpperCase()}</div>
            </div>
            <div class="terminal-content">
                <div class="project-data">
                    <h2>// ${project.title}</h2>
                    <div class="modal-gallery">
                        ${project.gallery.map((image, index) => `
                            <div class="gallery-item" style="animation-delay: ${index * 0.1}s">
                                <img src="${image}" alt="${project.title}" onerror="this.style.display='none'">
                            </div>
                        `).join('')}
                    </div>
                    <div class="modal-content-text">
                        <p class="terminal-text">${project.fullDescription}</p>
                        <div class="modal-tech">
                            <h4>> Technologies_Used:</h4>
                            <div class="tech-tags">
                                ${project.technologies.map(tech => `<span class="tech-tag terminal-tag">${tech}</span>`).join('')}
                            </div>
                        </div>
                        <div class="modal-stats">
                            <div class="stat-item">
                                <span class="stat-label">COMPLEXITY:</span>
                                <span class="stat-value">${Math.floor(Math.random() * 40 + 60)}%</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">PERFORMANCE:</span>
                                <span class="stat-value">${Math.floor(Math.random() * 20 + 80)}%</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">INNOVATION:</span>
                                <span class="stat-value">${Math.floor(Math.random() * 30 + 70)}%</span>
                            </div>
                        </div>
                        <div class="modal-links terminal-actions">
                            <a href="${project.links.demo}" class="game-button btn-primary" target="_blank">
                                <i class="fas fa-rocket"></i>
                                <span>Launch Project</span>
                            </a>
                            <a href="${project.links.github}" class="game-button btn-secondary" target="_blank">
                                <i class="fab fa-github"></i>
                                <span>View Source</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Terminal typing effect for description
    const terminalText = modalBody.querySelector('.terminal-text');
    if (terminalText) {
        const text = terminalText.textContent;
        terminalText.textContent = '';
        
        let i = 0;
        const typeInterval = setInterval(() => {
            if (i < text.length) {
                terminalText.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typeInterval);
            }
        }, 20);
    }
}

// ===== INITIALIZE ALL ENHANCED FEATURES =====
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all enhanced gaming features
    initAdvancedLoadingScreen();
    initTerminalTypewriter();
    initHUDElements();
    initGlitchEffects();
    initParticleSystem();
    initMissionStatsCounter();
    initTerminalForm();
    initEnhancedProjectFilters();
    
    // Replace basic functions with enhanced versions
    initProjects = renderEnhancedProjects;
    
    console.log('🎮 Enhanced Gaming UI Loaded Successfully! 🎮');
});

// ===== ADDITIONAL STYLES FOR ENHANCED FEATURES =====
const enhancedStyles = `
    .particle {
        position: absolute;
        border-radius: 50%;
        pointer-events: none;
        opacity: 0.6;
        box-shadow: 0 0 6px currentColor;
    }
    
    .terminal-cursor {
        animation: blink 1s infinite;
        color: var(--primary-glow);
    }
    
    .terminal-window {
        background: #0a0a0a;
        border: 2px solid var(--primary-glow);
        border-radius: 10px;
        overflow: hidden;
    }
    
    .terminal-content {
        padding: 2rem;
        background: #111;
    }
    
    .gallery-item {
        opacity: 0;
        animation: fadeInUp 0.6s forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .modal-stats {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
        margin: 2rem 0;
    }
    
    .modal-stats .stat-item {
        background: rgba(100, 255, 218, 0.1);
        padding: 1rem;
        border-radius: 8px;
        text-align: center;
        border: 1px solid rgba(100, 255, 218, 0.2);
    }
    
    .stat-label {
        display: block;
        font-size: 0.8rem;
        color: #ccc;
        margin-bottom: 0.5rem;
        font-family: var(--game-font);
    }
    
    .stat-value {
        display: block;
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--primary-glow);
        font-family: var(--game-font);
    }
    
    .terminal-actions {
        display: flex;
        gap: 1rem;
        justify-content: center;
        margin-top: 2rem;
    }
    
    .terminal-tag {
        background: rgba(100, 255, 218, 0.2);
        border: 1px solid var(--primary-glow);
    }
`;

// Add enhanced styles
const enhancedStyleSheet = document.createElement('style');
enhancedStyleSheet.textContent = enhancedStyles;
document.head.appendChild(enhancedStyleSheet);

// ===== CONSOLE EASTER EGG =====
console.log(`
    🎮 Welcome to my Game Developer Portfolio! 🎮
    
    Thanks for checking out the code!
    If you're interested in collaborating or have any questions,
    feel free to reach out through the contact form.
    
    Built with: HTML5, CSS3, Vanilla JavaScript
    Designed for: Performance, Accessibility, and User Experience
    
    Happy coding! 🚀
`);

// ===== EXPORT FOR POTENTIAL MODULE USE =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initNavigation,
        initProjects,
        initSkills,
        initContact,
        projectsData
    };
}

// Add mouse interaction for particles
function initParticleInteraction() {
    const containers = document.querySelectorAll('.particles-container');
    
    containers.forEach(container => {
        let mouseX = 0;
        let mouseY = 0;
        
        container.addEventListener('mousemove', (e) => {
            const rect = container.getBoundingClientRect();
            mouseX = ((e.clientX - rect.left) / rect.width) * 100;
            mouseY = ((e.clientY - rect.top) / rect.height) * 100;
            
            // Create trail particle
            if (Math.random() < 0.3) {
                createTrailParticle(container, mouseX, mouseY);
            }
            
            // Attract nearby particles
            attractParticles(container, mouseX, mouseY);
        });
        
        container.addEventListener('click', (e) => {
            const rect = container.getBoundingClientRect();
            const clickX = ((e.clientX - rect.left) / rect.width) * 100;
            const clickY = ((e.clientY - rect.top) / rect.height) * 100;
            
            // Create burst effect
            createBurstEffect(container, clickX, clickY);
        });
    });
}

function createTrailParticle(container, x, y) {
    const trail = document.createElement('div');
    trail.className = 'particle trail';
    trail.style.left = x + '%';
    trail.style.top = y + '%';
    trail.style.width = '4px';
    trail.style.height = '4px';
    
    container.appendChild(trail);
    
    setTimeout(() => {
        if (trail.parentNode) {
            trail.remove();
        }
    }, 1000);
}

function createBurstEffect(container, x, y) {
    for (let i = 0; i < 8; i++) {
        const burst = document.createElement('div');
        burst.className = 'particle burst energy';
        burst.style.left = x + '%';
        burst.style.top = y + '%';
        burst.style.width = '6px';
        burst.style.height = '6px';
        burst.style.animationDelay = (i * 0.1) + 's';
        
        container.appendChild(burst);
        
        setTimeout(() => {
            if (burst.parentNode) {
                burst.remove();
            }
        }, 2000);
    }
}

function attractParticles(container, mouseX, mouseY) {
    const particles = container.querySelectorAll('.particle:not(.trail):not(.burst)');
    
    particles.forEach(particle => {
        const rect = particle.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        const particleX = ((rect.left - containerRect.left + rect.width/2) / containerRect.width) * 100;
        const particleY = ((rect.top - containerRect.top + rect.height/2) / containerRect.height) * 100;
        
        const distanceX = mouseX - particleX;
        const distanceY = mouseY - particleY;
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
        
        if (distance < 20) { // Within 20% of screen
            const force = (20 - distance) / 20;
            const moveX = distanceX * force * 0.1;
            const moveY = distanceY * force * 0.1;
            
            particle.style.transform = `translate(${moveX}px, ${moveY}px)`;
            particle.style.transition = 'transform 0.3s ease-out';
            
            setTimeout(() => {
                particle.style.transform = '';
                particle.style.transition = '';
            }, 500);
        }
    });
}

// Initialize particle interaction
initParticleInteraction();
