document.addEventListener('DOMContentLoaded', function () {
  // Fade-in animation for elements with .fade-in class
  const fadeIns = document.querySelectorAll('.fade-in');
  function fadeInOnScroll() {
    fadeIns.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        section.classList.add('visible');
      }
    });
  }
  window.addEventListener('scroll', fadeInOnScroll);
  fadeInOnScroll();
});
