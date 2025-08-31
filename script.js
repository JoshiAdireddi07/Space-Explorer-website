// Generate starfield
function createStarfield() {
    const starfield = document.getElementById('starfield');
    const numStars = 200;

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.animationDuration = (Math.random() * 3 + 2) + 's';
        starfield.appendChild(star);
    }
}

// Generate new planet appearance
function generateNewPlanet() {
    const viewer = document.querySelector('spline-viewer');
    if (viewer) {
        viewer.style.transform = 'scale(0.95)';
        setTimeout(() => {
            viewer.style.transform = 'scale(1)';
        }, 200);
    }
}

// Header scroll effect
function handleScroll() {
    const header = document.querySelector('.main-header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
        header.style.background = 'rgba(0, 0, 0, 0.8)';
    }
}

// Initialize starfield and event listeners
function initialize() {
    createStarfield();
    
    // Add scroll listener for header effect
    window.addEventListener('scroll', handleScroll);
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Spline viewer interactive effects
function setupSplineViewer() {
    const viewer = document.querySelector('spline-viewer');
    if (viewer) {
        viewer.style.transition = 'transform 0.3s ease';
        
        viewer.addEventListener('mouseenter', () => {
            viewer.style.transform = 'scale(1.02)';
        });
        
        viewer.addEventListener('mouseleave', () => {
            viewer.style.transform = 'scale(1)';
        });
    }
}

// Wait for DOM content to load
document.addEventListener('DOMContentLoaded', () => {
    initialize();
    setupSplineViewer();
});

// Additional utility functions
const SpaceExplorer = {
    // Animate elements on scroll
    animateOnScroll: function() {
        const elements = document.querySelectorAll('.hero-title, .planet-title');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        });
        
        elements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.6s ease';
            observer.observe(el);
        });
    },
    
    // Add particle effects
    addParticleEffects: function() {
        const heroSection = document.querySelector('.hero-section');
        const numParticles = 20;
        
        for (let i = 0; i < numParticles; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: rgba(255, 255, 255, 0.6);
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: float ${Math.random() * 6 + 4}s ease-in-out infinite;
                animation-delay: ${Math.random() * 2}s;
            `;
            heroSection.appendChild(particle);
        }
        
        // Add CSS for particle animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float {
                0%, 100% { 
                    transform: translateY(0px) rotate(0deg);
                    opacity: 0.6;
                }
                50% { 
                    transform: translateY(-20px) rotate(180deg);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(style);
    },
    
    // Initialize all effects
    init: function() {
        this.animateOnScroll();
        this.addParticleEffects();
    }
};

// Initialize additional effects after page load
window.addEventListener('load', () => {
    SpaceExplorer.init();
});
