
const revealElements = document.querySelectorAll(
    '.service-card, .barber-placeholder, .gallery-item, .contact'
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach((element) => {
    element.classList.add('reveal');
    observer.observe(element);
});

// Mobile navigation scroll behavior
document.querySelectorAll('.navigation a, .header-button, .hero-buttons a').forEach((link) => {
    link.addEventListener('click', () => {
        console.log('Navigation:', link.textContent.trim());
    });
});
