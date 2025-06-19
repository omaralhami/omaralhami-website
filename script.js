// Language switching functionality
let currentLang = 'en';

function toggleLanguage() {
    const html = document.documentElement;
    const langBtn = document.getElementById('lang-text');
    const elementsToTranslate = document.querySelectorAll('[data-en][data-ar]');
    
    if (currentLang === 'en') {
        // Switch to Arabic
        currentLang = 'ar';
        html.setAttribute('lang', 'ar');
        langBtn.textContent = 'English';
        
        elementsToTranslate.forEach(element => {
            element.textContent = element.getAttribute('data-ar');
        });
    } else {
        // Switch to English
        currentLang = 'en';
        html.setAttribute('lang', 'en');
        langBtn.textContent = 'عربي';
        
        elementsToTranslate.forEach(element => {
            element.textContent = element.getAttribute('data-en');
        });
    }
}

// Back to top functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show/hide back to top button
window.addEventListener('scroll', function() {
    const backToTop = document.getElementById('backToTop');
    if (window.pageYOffset > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});



// Mobile touch enhancements
function addTouchFeedback() {
    const touchElements = document.querySelectorAll('.service-card, .testimonial-card, .cert-item, .project-card, .contact-btn, #lang-btn, .back-to-top');
    
    touchElements.forEach(element => {
        element.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
        }, { passive: true });
        
        element.addEventListener('touchend', function() {
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        }, { passive: true });
        
        element.addEventListener('touchcancel', function() {
            this.style.transform = '';
        }, { passive: true });
    });
}

// Prevent iOS zoom on input focus
function preventIOSZoom() {
    document.addEventListener('touchstart', function(event) {
        if (event.touches.length > 1) {
            event.preventDefault();
        }
    });
    
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function(event) {
        const now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
}

// Enhanced scroll performance for mobile
function optimizeScrolling() {
    let ticking = false;
    
    function updateScrollPosition() {
        const backToTop = document.getElementById('backToTop');
        if (backToTop) {
            if (window.pageYOffset > 200) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        }
        ticking = false;
    }
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateScrollPosition);
            ticking = true;
        }
    }, { passive: true });
}

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize mobile enhancements
    addTouchFeedback();
    preventIOSZoom();
    optimizeScrolling();
    
    // Simple click handlers for CTA buttons
    const ctaButtons = document.querySelectorAll('.cta-btn');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            // Add your contact/purchase logic here
            alert('Contact functionality to be implemented');
        });
    });

    // Simple hover effects for service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Simple hover effects for package cards
    const packageCards = document.querySelectorAll('.package-card');
    packageCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Simple hover effects for social links
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // Add your social media link logic here
            alert('Social media link to be implemented');
        });
    });
}); 