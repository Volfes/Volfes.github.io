// 1. Obsługa Menu Mobilnego
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    hamburger.classList.toggle("toggle");
});

// 2. Sticky Header - zmiana wyglądu przy skrolowaniu
window.addEventListener("scroll", () => {
    const nav = document.getElementById("navbar");
    if (window.scrollY > 50) {
        nav.classList.add("nav-scrolled");
    } else {
        nav.classList.remove("nav-scrolled");
    }
});

// 3. Scroll Reveal - Animacja pojawiania się elementów
const revealElements = document.querySelectorAll(".feature-card, .price-card, .hero-content, .reveal-hidden");

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => {
    el.classList.add("reveal-hidden"); // Stan początkowy
    revealObserver.observe(el);
});