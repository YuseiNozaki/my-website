// Email reveal (anti-spam)
(function() {
  const el = document.getElementById('email-display');
  if (!el) return;
  const u = 'yusei.9933';
  const d = 'gmail.com';
  el.textContent = u + '@' + d;
  el.style.cursor = 'pointer';
  el.title = 'クリックでメーラーを開く';
  el.addEventListener('click', function() {
    window.location.href = 'mailto:' + u + '@' + d;
  });
})();

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Hamburger menu
const hamburger = document.getElementById('nav-hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
}
