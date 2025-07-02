// ===== SMOOTH SCROLL MODULE =====
(function() {
    'use strict';
    
    // Initialize smooth scrolling for all hash links
    function init() {
        console.log('Smooth scroll module initializing...');
        
        // Handle all anchor links with hash
        document.addEventListener('click', function(e) {
            const link = e.target.closest('a[href^="#"]');
            if (!link) return;
            
            const href = link.getAttribute('href');
            if (!href || href === '#') return;
            
            // Skip if this is a navigation link - let navigation.js handle it
            if (link.classList.contains('nav-link')) {
                console.log('Skipping nav-link, handled by navigation module');
                return;
            }
            
            console.log(`Smooth scroll - handling: ${href}`);
            
            e.preventDefault();
            e.stopPropagation();
            
            const sectionId = href.substring(1);
            const targetSection = document.getElementById(sectionId);
            
            if (targetSection) {
                scrollToTarget(targetSection, sectionId);
            } else {
                console.error(`Target section not found: ${href}`);
            }
        });
        
        console.log('Smooth scroll module initialized');
    }
    
    // Scroll to target element
    function scrollToTarget(targetElement, sectionId) {
        const navbar = document.getElementById('navbar');
        const navbarHeight = navbar ? navbar.offsetHeight : 80;
        const targetPosition = targetElement.offsetTop - navbarHeight - 20;
        
        console.log(`Scrolling to position: ${targetPosition}`);
        
        // Multiple scroll methods for compatibility
        try {
            // Primary method: smooth scroll
            window.scrollTo({
                top: Math.max(0, targetPosition),
                behavior: 'smooth'
            });
        } catch (error) {
            // Fallback method: scrollIntoView
            try {
                targetElement.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            } catch (error2) {
                // Last resort: instant scroll
                window.scrollTo(0, Math.max(0, targetPosition));
            }
        }
        
        // Update navigation active state
        updateNavigationState(sectionId);
        
        // Update URL
        if (window.history && window.history.pushState) {
            window.history.pushState(null, null, `#${sectionId}`);
        }
    }
    
    // Update navigation active state
    function updateNavigationState(sectionId) {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(function(link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
                link.classList.add('active');
            }
        });
    }
    
    // Expose function globally
    window.smoothScrollTo = function(sectionId) {
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            scrollToTarget(targetSection, sectionId);
        }
    };
    
    // Initialize
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
})();
