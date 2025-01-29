// Scroll to top functionality
const scrollTopBtn = document.querySelector('.scroll-top-btn');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.opacity = '1';
        scrollTopBtn.style.pointerEvents = 'all';
    } else {
        scrollTopBtn.style.opacity = '0';
        scrollTopBtn.style.pointerEvents = 'none';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Share functionality
const shareBtn = document.querySelector('.share-btn');

shareBtn.addEventListener('click', async () => {
    try {
        if (navigator.share) {
            await navigator.share({
                title: 'Let\'s Help Everyone',
                text: 'Check out this amazing academic resource platform!',
                url: window.location.href
            });
        } else {
            // Fallback for browsers that don't support Web Share API
            alert('Share this page: ' + window.location.href);
        }
    } catch (err) {
        console.log('Error sharing:', err);
    }
});

// Animated title effect
const animateTitle = () => {
    const letters = document.querySelectorAll('.letter');
    letters.forEach((letter, index) => {
        setTimeout(() => {
            letter.style.transform = 'translateY(-10px)';
            setTimeout(() => {
                letter.style.transform = 'translateY(0)';
            }, 200);
        }, index * 200);
    });
};

// Run title animation on load and every 5 seconds
window.addEventListener('load', () => {
    animateTitle();
    setInterval(animateTitle, 5000);
});

// Search functionality
const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');

searchBtn.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
        // Add your search logic here
        console.log('Searching for:', searchTerm);
    }
});

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchBtn.click();
    }
});

// Add hover effect to resource cards
const resourceCards = document.querySelectorAll('.resource-card');

resourceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Add smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});