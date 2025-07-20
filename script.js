document.addEventListener('DOMContentLoaded', function() {
    // Search functionality
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');
    
    searchBtn.addEventListener('click', function() {
        if (searchInput.value.trim() !== '') {
            // Redirect to your blog with search query
            window.location.href = `https://turuk324.blogspot.com/search?q=${encodeURIComponent(searchInput.value)}`;
        }
    });
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && searchInput.value.trim() !== '') {
            window.location.href = `https://turuk324.blogspot.com/search?q=${encodeURIComponent(searchInput.value)}`;
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animate elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.news-card, .tip-card, .trending-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animation
    const animatedElements = document.querySelectorAll('.news-card, .tip-card, .trending-item');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load
    
    // Adsterra script
    const loadAdsterraScript = function() {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = '//pl27198207.profitableratecpm.com/e2/43/2e/e2432eee9be24a28adbcbaf118f9de28.js';
        document.body.appendChild(script);
    };
    
    // Load ad script after a slight delay
    setTimeout(loadAdsterraScript, 2000);
});