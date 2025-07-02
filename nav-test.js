// Navigation Test Script
console.log('Starting navigation test...');

// Test if elements exist
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

console.log('Navbar found:', !!navbar);
console.log('Nav links found:', navLinks.length);
console.log('Sections found:', sections.length);

// List all sections and their IDs
sections.forEach(section => {
    console.log(`Section: ${section.id}, offsetTop: ${section.offsetTop}`);
});

// Test click event on first nav link
if (navLinks.length > 0) {
    const firstLink = navLinks[0];
    console.log('First nav link href:', firstLink.getAttribute('href'));
    
    // Add test click listener
    firstLink.addEventListener('click', function(e) {
        console.log('Test: Nav link clicked!', this.getAttribute('href'));
    });
}

// Test if scrollToSection function exists
if (typeof window.scrollToSection === 'function') {
    console.log('scrollToSection function is available');
} else {
    console.log('scrollToSection function NOT available');
}
