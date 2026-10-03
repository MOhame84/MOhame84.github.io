(() => {
  const header = document.getElementById('site-header');
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const year = document.getElementById('year');

  if (year) year.textContent = new Date().getFullYear();

  const setHeaderState = () => {
    if (header) header.classList.toggle('scrolled', window.scrollY > 24);
  };
  setHeaderState();
  window.addEventListener('scroll', setHeaderState, { passive: true });

  const setMenu = (open) => {
    if (!menuToggle || !mobileMenu || !header) return;
    menuToggle.classList.toggle('open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    mobileMenu.hidden = !open;
    header.classList.toggle('menu-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  };

  if (menuToggle) menuToggle.addEventListener('click', () => setMenu(menuToggle.getAttribute('aria-expanded') !== 'true'));
  document.querySelectorAll('#mobile-menu a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
  window.addEventListener('keydown', (event) => { if (event.key === 'Escape') setMenu(false); });

  const navLinks = Array.from(document.querySelectorAll('.desktop-nav a, #mobile-menu a')).filter((link) => link.getAttribute('href')?.startsWith('#'));
  const sections = navLinks.map((link) => document.getElementById(link.getAttribute('href').slice(1))).filter(Boolean);
  const markActive = (id) => navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === '#' + id));

  if ('IntersectionObserver' in window) {
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) markActive(entry.target.id); });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach((section) => navObserver.observe(section));
  }

  const revealItems = document.querySelectorAll('[data-reveal]');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced || !('IntersectionObserver' in window)) {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  } else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.12 });
    revealItems.forEach((item) => revealObserver.observe(item));
  }
})();