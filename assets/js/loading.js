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
    
    // Easing function for smooth animations
    function easeOutCubic(t) {
        return 1 - Math.pow(1 - t, 3);
    }
    
    function startLoadingAnimations() {
        const stepDots = document.querySelectorAll('.step-dot');
        const progressBar = document.querySelector('.progress-bar');
        const progressText = document.querySelector('.progress-text');
        const loadingPercentage = document.querySelector('.loading-percentage');
        const statusLines = document.querySelectorAll('.status-line');
        
        if (!stepDots.length) return;
        
        const loadingSteps = [
            { text: 'Initializing systems...', percentage: 0 },
            { text: 'Loading core modules...', percentage: 16 },
            { text: 'Establishing connections...', percentage: 32 },
            { text: 'Configuring UI components...', percentage: 50 },
            { text: 'Optimizing performance...', percentage: 67 },
            { text: 'Finalizing setup...', percentage: 83 },
            { text: 'Ready to launch!', percentage: 100 }
        ];
        
        let currentStep = 0;
        
        function animateStep() {
            if (currentStep >= stepDots.length) {
                // All steps completed
                setTimeout(() => {
                    if (!isLoadingComplete) {
                        hideLoadingScreen();
                    }
                }, 500);
                return;
            }
            
            // Update current step dot
            if (currentStep > 0) {
                stepDots[currentStep - 1].classList.remove('active');
                stepDots[currentStep - 1].classList.add('completed');
            }
            
            stepDots[currentStep].classList.add('active');
            
            // Update progress text and percentage
            if (progressText && loadingSteps[currentStep]) {
                progressText.textContent = loadingSteps[currentStep].text;
            }
            
            if (loadingPercentage && loadingSteps[currentStep]) {
                loadingPercentage.textContent = loadingSteps[currentStep].percentage + '%';
            }
            
            // Animate progress bar smoothly
            if (progressBar && loadingSteps[currentStep]) {
                const targetWidth = loadingSteps[currentStep].percentage;
                const currentWidth = parseInt(progressBar.style.width) || 0;
                
                // Smooth progress bar animation
                let animationProgress = 0;
                const animationDuration = 400;
                const startTime = Date.now();
                
                function animateProgress() {
                    const elapsed = Date.now() - startTime;
                    animationProgress = Math.min(elapsed / animationDuration, 1);
                    
                    const easedProgress = easeOutCubic(animationProgress);
                    const currentProgressWidth = currentWidth + (targetWidth - currentWidth) * easedProgress;
                    
                    progressBar.style.width = currentProgressWidth + '%';
                    
                    if (animationProgress < 1) {
                        requestAnimationFrame(animateProgress);
                    }
                }
                
                requestAnimationFrame(animateProgress);
            }
            
            // Animate system status lines
            if (statusLines[currentStep]) {
                statusLines[currentStep].style.opacity = '1';
                statusLines[currentStep].style.animation = 'typewriter 0.5s ease-out';
            }
            
            currentStep++;
            
            // Schedule next step
            setTimeout(animateStep, 600 + Math.random() * 400); // Random timing between 600-1000ms
        }
        
        // Start the animation sequence
        setTimeout(animateStep, 500);
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
