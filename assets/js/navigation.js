// ===== NAVIGATION MODULE =====
(function() {
    'use strict';
    
    let navbar, navToggle, navMenu, navLinks;
    
    // Initialize navigation when DOM is ready
    function init() {
        console.log('Navigation module initializing...');
        
        // Get navigation elements
        navbar = document.getElementById('navbar');
        navToggle = document.getElementById('nav-toggle');
        navMenu = document.getElementById('nav-menu');
        navLinks = document.querySelectorAll('.nav-link');
        
        if (!navbar || !navToggle || !navMenu) {
            console.error('Navigation elements not found');
            return false;
        }
        
        console.log(`Found ${navLinks.length} navigation links`);
        
        // Setup event listeners
        setupMobileMenu();
        setupSmoothScrolling();
        setupScrollEffects();
        
        console.log('Navigation module initialized successfully');
        return true;
    }
    
    // Setup mobile menu functionality
    function setupMobileMenu() {
        navToggle.addEventListener('click', function(e) {
            e.preventDefault();
            const isActive = navMenu.classList.contains('active');
            
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            navToggle.setAttribute('aria-expanded', !isActive);
            
            // Prevent body scroll when menu is open
            document.body.style.overflow = isActive ? '' : 'hidden';
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navbar.contains(e.target) && navMenu.classList.contains('active')) {
                closeMenu();
            }
        });
        
        // Close menu with escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                closeMenu();
            }
        });
    }
    
    // Close mobile menu
    function closeMenu() {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }
    
    // Setup smooth scrolling for navigation links
    function setupSmoothScrolling() {
        navLinks.forEach(function(link, index) {
            const href = link.getAttribute('href');
            console.log(`Setting up nav link ${index}: ${href}`);
            
            link.addEventListener('click', function(e) {
                console.log(`Nav link clicked: ${href}`);
                
                if (!href || !href.startsWith('#') || href === '#') {
                    return;
                }
                
                e.preventDefault();
                e.stopPropagation();
                
                // Close mobile menu
                closeMenu();
                
                // Scroll to section
                scrollToSection(href.substring(1));
                
                // Update active link
                updateActiveLink(href);
            });
        });
    }
    
    // Scroll to a specific section
    function scrollToSection(sectionId) {
        console.log(`Scrolling to section: ${sectionId}`);
        
        const targetSection = document.getElementById(sectionId);
        if (!targetSection) {
            console.error(`Section not found: ${sectionId}`);
            return;
        }
        
        const navbarHeight = navbar.offsetHeight || 80;
        const targetPosition = targetSection.offsetTop - navbarHeight - 20;
        
        console.log(`Target position: ${targetPosition}`);
        
        // Use multiple scroll methods for better compatibility
        try {
            window.scrollTo({
                top: Math.max(0, targetPosition),
                behavior: 'smooth'
            });
        } catch (error) {
            console.warn('Smooth scroll not supported, using fallback');
            window.scrollTo(0, Math.max(0, targetPosition));
        }
        
        // Update URL
        if (window.history && window.history.pushState) {
            window.history.pushState(null, null, `#${sectionId}`);
        }
    }
    
    // Update active navigation link
    function updateActiveLink(targetHref) {
        navLinks.forEach(function(link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === targetHref) {
                link.classList.add('active');
            }
        });
    }
    
    // Setup scroll effects
    function setupScrollEffects() {
        let ticking = false;
        
        function updateNavbarOnScroll() {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            ticking = false;
        }
        
        function updateActiveOnScroll() {
            const sections = document.querySelectorAll('section[id]');
            const scrollPosition = window.scrollY + (navbar.offsetHeight || 80) + 100;
            
            let current = '';
            sections.forEach(function(section) {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            });
            
            if (current) {
                updateActiveLink(`#${current}`);
            }
        }
        
        window.addEventListener('scroll', function() {
            if (!ticking) {
                requestAnimationFrame(function() {
                    updateNavbarOnScroll();
                    updateActiveOnScroll();
                });
                ticking = true;
            }
        });
    }
    
    // Expose scrollToSection globally for onclick handlers
    window.scrollToSection = function(sectionId) {
        console.log(`Global scrollToSection called: ${sectionId}`);
        scrollToSection(sectionId);
    };
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
})();
