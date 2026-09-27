const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const signal = document.querySelector('.signal');

if (signal && !reducedMotion.matches && 'IntersectionObserver' in window) {
  document.documentElement.classList.add('motion-ready');
  const observer = new IntersectionObserver((entries) => {
    if (!entries[0].isIntersecting) return;
    signal.classList.add('is-active');
    observer.disconnect();
  }, { threshold: 0.28 });
  observer.observe(signal);
}
