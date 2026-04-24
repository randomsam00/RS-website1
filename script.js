// Mobile nav toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// Scroll-triggered fade-up animation
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.fade-up').forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 80}ms`;
  observer.observe(el);
});

// Nav background on scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (navbar) {
    navbar.style.background = window.scrollY > 20
      ? 'rgba(8,8,8,0.97)'
      : 'rgba(8,8,8,0.85)';
  }
}, { passive: true });

// Inquiry form — show confirmation on submit
const form = document.getElementById('inquiryForm');
if (form) {
  form.addEventListener('submit', (e) => {
    const btn = form.querySelector('.form-submit');
    btn.textContent = '✓ Sent! I\'ll be in touch soon.';
    btn.style.background = 'linear-gradient(135deg, #00C853, #00796B)';
    btn.disabled = true;
  });
}
