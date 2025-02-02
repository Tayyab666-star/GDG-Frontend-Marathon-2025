// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Testimonial Auto-Slider
let index = 0;
const testimonials = document.querySelectorAll('.testimonial');
setInterval(() => {
    testimonials.forEach((t, i) => {
        t.style.transform = `translateX(-${index * 100}%)`;
    });
    index = (index + 1) % testimonials.length;
}, 3000);

// GSAP Animation for Hero Section
gsap.from('.hero h1', { opacity: 0, y: -50, duration: 1 });
gsap.from('.hero p', { opacity: 0, y: 50, duration: 1, delay: 0.5 });
