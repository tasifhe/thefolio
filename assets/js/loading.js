// ===== LOADING SCREEN MODULE =====
(function() {
    'use strict';
    
    let loadingScreen;
    let isLoadingComplete = false;
    
    function init() {
        console.log('Loading screen module initializing...');
        
        loadingScreen = document.getElementById('loading-screen');
        if (!loadingScreen) {
            console.log('No loading screen found');
            return;
        }
        
        // Setup skip button
        const skipButton = document.getElementById('skip-loading');
        if (skipButton) {
            skipButton.addEventListener('click', function() {
                hideLoadingScreen();
            });
        }
        
        // Auto-hide after delay
        setTimeout(function() {
            hideLoadingScreen();
        }, 4000);
        
        // Start loading animations
        startLoadingAnimations();
        
        console.log('Loading screen module initialized');
    }
    
    function startLoadingAnimations() {
        // Add your loading animations here
        // This is a placeholder for loading screen animations
    }
    
    function hideLoadingScreen() {
        if (isLoadingComplete || !loadingScreen) return;
        
        console.log('Hiding loading screen...');
        isLoadingComplete = true;
        
        loadingScreen.style.opacity = '0';
        loadingScreen.style.pointerEvents = 'none';
        
        setTimeout(function() {
            loadingScreen.style.display = 'none';
        }, 500);
    }
    
    // Expose globally
    window.hideLoadingScreen = hideLoadingScreen;
    
    // Initialize
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
})();
