// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.feature-card, .testimonial-card, .step, .post-card');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Set initial state for animated elements
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.feature-card, .testimonial-card, .step, .post-card');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Trigger initial check
    animateOnScroll();
});

// Add scroll event listener
window.addEventListener('scroll', animateOnScroll);

// CTA Button Animation
const ctaButtons = document.querySelectorAll('.cta-button');
ctaButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-3px)';
        button.style.boxShadow = '0 7px 20px rgba(110, 72, 170, 0.4)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
        button.style.boxShadow = '0 4px 15px rgba(110, 72, 170, 0.3)';
    });
});

// Ad Visibility Tracking
function trackAdVisibility() {
    const ads = document.querySelectorAll('.ad-section, .native-ad');
    
    ads.forEach(ad => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log('Ad is visible:', ad);
                    // Here you would typically send analytics data
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(ad);
    });
}

// Initialize ad tracking
trackAdVisibility();

// Fake analytics for demo purposes
setTimeout(() => {
    console.log('Simulating analytics data...');
    console.log('User from: USA');
    console.log('CTR: 4.8%');
    console.log('Avg. session duration: 2m 45s');
}, 3000);

// Time-based CTA enhancement
function timeBasedCTA() {
    const now = new Date();
    const hour = now.getHours();
    const ctaText = document.querySelector('.final-cta .cta-button');
    
    if (hour >= 18 || hour < 6) {
        // Evening/night
        ctaText.textContent = 'Download Now - Night Owl Special';
    } else if (hour >= 6 && hour < 12) {
        // Morning
        ctaText.textContent = 'Start Your Day with Mood Game';
    }
}

timeBasedCTA();