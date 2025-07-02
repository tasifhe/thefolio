// ===== NAVIGATION MODULE =====
(function() {
    'use strict';
    
    let navbar, navLinks, sections, navToggle, navMenu;
    
    function init() {
        console.log('Navigation module initializing...');
        
        // Get DOM elements
        navbar = document.getElementById('navbar');
        navLinks = document.querySelectorAll('.nav-link');
        sections = document.querySelectorAll('section[id]');
        navToggle = document.getElementById('nav-toggle');
        navMenu = document.getElementById('nav-menu');
        
        if (!navbar || !navLinks.length || !sections.length) {
            console.error('Navigation: Required elements not found');
            return;
        }
        
        // Initialize navigation features
        initSmoothScroll();
        initActiveSection();
        initMobileMenu();
        initScrollBehavior();
        
        console.log('Navigation module initialized successfully');
    }
    
    // Smooth scrolling for navigation links
    function initSmoothScroll() {
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    // Close mobile menu if open
                    if (navMenu.classList.contains('show')) {
                        navMenu.classList.remove('show');
                        navToggle.classList.remove('active');
                    }
                    
                    // Smooth scroll to target
                    const offsetTop = targetSection.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                    
                    // Update active state
                    updateActiveNavLink(this);
                }
            });
        });
    }
    
    // Update active navigation link based on scroll position
    function initActiveSection() {
        window.addEventListener('scroll', throttle(updateActiveSection, 100));
    }
    
    function updateActiveSection() {
        const scrollPos = window.pageYOffset + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.id;
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                const correspondingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                if (correspondingLink) {
                    updateActiveNavLink(correspondingLink);
                }
            }
        });
    }
    
    function updateActiveNavLink(activeLink) {
        navLinks.forEach(link => {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
        });
        
        activeLink.classList.add('active');
        activeLink.setAttribute('aria-current', 'page');
    }
    
    // Mobile menu functionality
    function initMobileMenu() {
        if (navToggle) {
            navToggle.addEventListener('click', function() {
                navMenu.classList.toggle('show');
                this.classList.toggle('active');
                
                // Update ARIA attributes
                const isExpanded = navMenu.classList.contains('show');
                this.setAttribute('aria-expanded', isExpanded);
                
                // Prevent body scroll when menu is open
                document.body.style.overflow = isExpanded ? 'hidden' : '';
            });
        }
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navbar.contains(e.target) && navMenu.classList.contains('show')) {
                navMenu.classList.remove('show');
                navToggle.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        });
    }
    
    // Navbar scroll behavior
    function initScrollBehavior() {
        let lastScrollTop = 0;
        
        window.addEventListener('scroll', throttle(function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Add/remove scrolled class
            if (scrollTop > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            
            // Hide/show navbar on scroll (optional)
            if (scrollTop > lastScrollTop && scrollTop > 200) {
                navbar.classList.add('nav-hidden');
            } else {
                navbar.classList.remove('nav-hidden');
            }
            
            lastScrollTop = scrollTop;
        }, 100));
    }
    
    // Throttle function for performance
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
        };
    }
    
    // Public API
    window.scrollToSection = function(sectionId) {
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    };
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
})();
