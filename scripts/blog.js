// Tiny drawer toggle
document.addEventListener('DOMContentLoaded', () => {
  const drawer = document.querySelector('[data-drawer]');
  const openBtn = document.querySelector('[data-open-drawer]');
  if (!drawer || !openBtn) return;

  openBtn.addEventListener('click', () => drawer.classList.add('open'));
  drawer.addEventListener('click', (e) => {
    if (e.target === drawer) drawer.classList.remove('open');
  });
});
