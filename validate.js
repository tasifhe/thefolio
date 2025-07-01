const fs = require('fs');
const path = require('path');

// Portfolio validation script
class PortfolioValidator {
    constructor(projectPath) {
        this.projectPath = projectPath;
        this.errors = [];
        this.warnings = [];
        this.successes = [];
    }

    validateFileStructure() {
        const requiredFiles = [
            'index.html',
            'assets/css/style.css',
            'assets/js/main.js',
            '_config.yml',
            'sitemap.xml',
            'robots.txt',
            '404.html',
            '.github/workflows/deploy.yml'
        ];

        requiredFiles.forEach(file => {
            const filePath = path.join(this.projectPath, file);
            if (fs.existsSync(filePath)) {
                this.successes.push(`✅ ${file} exists`);
            } else {
                this.errors.push(`❌ Missing required file: ${file}`);
            }
        });
    }

    validateHTML() {
        const htmlPath = path.join(this.projectPath, 'index.html');
        if (fs.existsSync(htmlPath)) {
            const htmlContent = fs.readFileSync(htmlPath, 'utf8');
            
            // Check for essential HTML elements
            const checks = [
                { pattern: /<title>.*<\/title>/, message: 'Title tag' },
                { pattern: /<meta name="description"/, message: 'Meta description' },
                { pattern: /<meta name="viewport"/, message: 'Viewport meta tag' },
                { pattern: /id="loading-screen"/, message: 'Loading screen element' },
                { pattern: /id="navbar"/, message: 'Navigation element' },
                { pattern: /id="home"/, message: 'Hero section' },
                { pattern: /id="about"/, message: 'About section' },
                { pattern: /id="projects"/, message: 'Projects section' },
                { pattern: /id="contact"/, message: 'Contact section' }
            ];

            checks.forEach(check => {
                if (check.pattern.test(htmlContent)) {
                    this.successes.push(`✅ HTML: ${check.message} found`);
                } else {
                    this.errors.push(`❌ HTML: ${check.message} missing`);
                }
            });
        }
    }

    validateCSS() {
        const cssPath = path.join(this.projectPath, 'assets/css/style.css');
        if (fs.existsSync(cssPath)) {
            const cssContent = fs.readFileSync(cssPath, 'utf8');
            
            // Check for gaming UI variables
            const cssChecks = [
                { pattern: /--primary-glow/, message: 'Primary glow variable' },
                { pattern: /--secondary-glow/, message: 'Secondary glow variable' },
                { pattern: /--glass-bg/, message: 'Glass background variable' },
                { pattern: /@keyframes/, message: 'CSS animations' },
                { pattern: /\.game-/, message: 'Gaming CSS classes' },
                { pattern: /@media.*max-width/, message: 'Responsive design' }
            ];

            cssChecks.forEach(check => {
                if (check.pattern.test(cssContent)) {
                    this.successes.push(`✅ CSS: ${check.message} found`);
                } else {
                    this.warnings.push(`⚠️ CSS: ${check.message} might be missing`);
                }
            });
        }
    }

    validateJavaScript() {
        const jsPath = path.join(this.projectPath, 'assets/js/main.js');
        if (fs.existsSync(jsPath)) {
            const jsContent = fs.readFileSync(jsPath, 'utf8');
            
            // Check for essential JavaScript functions
            const jsChecks = [
                { pattern: /function.*init/, message: 'Initialization functions' },
                { pattern: /addEventListener/, message: 'Event listeners' },
                { pattern: /projectsData/, message: 'Project data array' },
                { pattern: /querySelector/, message: 'DOM manipulation' },
                { pattern: /IntersectionObserver/, message: 'Scroll animations' }
            ];

            jsChecks.forEach(check => {
                if (check.pattern.test(jsContent)) {
                    this.successes.push(`✅ JS: ${check.message} found`);
                } else {
                    this.warnings.push(`⚠️ JS: ${check.message} might be missing`);
                }
            });
        }
    }

    generateReport() {
        console.log('\n🎮 PORTFOLIO VALIDATION REPORT 🎮\n');
        console.log('='.repeat(50));
        
        if (this.successes.length > 0) {
            console.log('\n✅ SUCCESSES:');
            this.successes.forEach(success => console.log(success));
        }
        
        if (this.warnings.length > 0) {
            console.log('\n⚠️ WARNINGS:');
            this.warnings.forEach(warning => console.log(warning));
        }
        
        if (this.errors.length > 0) {
            console.log('\n❌ ERRORS:');
            this.errors.forEach(error => console.log(error));
        }
        
        console.log('\n' + '='.repeat(50));
        console.log(`Total Checks: ${this.successes.length + this.warnings.length + this.errors.length}`);
        console.log(`Successes: ${this.successes.length}`);
        console.log(`Warnings: ${this.warnings.length}`);
        console.log(`Errors: ${this.errors.length}`);
        
        if (this.errors.length === 0) {
            console.log('\n🚀 PORTFOLIO IS READY FOR DEPLOYMENT! 🚀');
        } else {
            console.log('\n⚠️ Please fix errors before deployment.');
        }
    }

    run() {
        console.log('🎮 Validating portfolio...\n');
        this.validateFileStructure();
        this.validateHTML();
        this.validateCSS();
        this.validateJavaScript();
        this.generateReport();
    }
}

// Run validation
const projectPath = process.argv[2] || './';
const validator = new PortfolioValidator(projectPath);
validator.run();
