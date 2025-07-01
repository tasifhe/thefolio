// ===== LAZY LOADING MODULE =====
(function() {
    'use strict';
    
    let imageObserver, sectionObserver;
    
    function init() {
        console.log('Lazy loading module initializing...');
        
        // Check for Intersection Observer support
        if (!('IntersectionObserver' in window)) {
            console.log('IntersectionObserver not supported, loading all content immediately');
            loadAllContent();
            return;
        }
        
        setupImageLazyLoading();
        setupSectionLazyLoading();
        
        console.log('Lazy loading module initialized');
    }
    
    function setupImageLazyLoading() {
        imageObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    loadImage(img);
                    imageObserver.unobserve(img);
                }
            });
        }, {
            root: null,
            rootMargin: '50px',
            threshold: 0.1
        });
        
        // Observe lazy images
        const lazyImages = document.querySelectorAll('img[data-src], img.lazy');
        lazyImages.forEach(function(img) {
            imageObserver.observe(img);
        });
        
        console.log(`Observing ${lazyImages.length} lazy images`);
    }
    
    function setupSectionLazyLoading() {
        sectionObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const section = entry.target;
                    loadSectionContent(section);
                }
            });
        }, {
            root: null,
            rootMargin: '100px',
            threshold: 0.1
        });
        
        // Observe sections
        const sections = document.querySelectorAll('section');
        sections.forEach(function(section) {
            sectionObserver.observe(section);
        });
    }
    
    function loadImage(img) {
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
        
        // Fade in effect
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
        
        setTimeout(function() {
            img.style.opacity = '1';
        }, 50);
    }
    
    function loadSectionContent(section) {
        section.classList.add('section-loaded');
        
        const sectionId = section.id;
        switch(sectionId) {
            case 'projects':
                if (!section.dataset.loaded && window.initProjects) {
                    window.initProjects();
                    section.dataset.loaded = 'true';
                }
                break;
            case 'skills':
                if (!section.dataset.loaded && window.initSkills) {
                    window.initSkills();
                    section.dataset.loaded = 'true';
                }
                break;
            case 'counter':
                if (!section.dataset.loaded && window.initStatsAnimation) {
                    window.initStatsAnimation();
                    section.dataset.loaded = 'true';
                }
                break;
        }
    }
    
    function loadAllContent() {
        // Fallback for browsers without IntersectionObserver
        const lazyImages = document.querySelectorAll('img[data-src], img.lazy');
        lazyImages.forEach(loadImage);
        
        const sections = document.querySelectorAll('section');
        sections.forEach(loadSectionContent);
    }
    
    // Initialize
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
})();
