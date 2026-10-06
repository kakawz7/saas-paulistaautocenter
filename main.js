/* Paulista Auto Center — interações leves (sem bibliotecas) */
(() => {
  window.__pacReady = true;

  /* Header muda ao rolar */
  const header = document.getElementById('header');
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 24);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* Menu mobile */
  const btn = document.querySelector('.menu-btn');
  const nav = document.getElementById('menu');
  const setMenu = (open) => {
    document.body.classList.toggle('menu-open', open);
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  };
  btn.addEventListener('click', () => setMenu(!document.body.classList.contains('menu-open')));
  nav.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.body.classList.contains('menu-open')) { setMenu(false); btn.focus(); }
  });
  window.matchMedia('(min-width: 980px)').addEventListener('change', (e) => { if (e.matches) setMenu(false); });

  /* Elementos entrando na tela */
  const items = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
    items.forEach((el) => io.observe(el));
  } else {
    items.forEach((el) => el.classList.add('is-in'));
  }

  /* Destaca no menu a seção visível */
  const links = [...document.querySelectorAll('.nav__link')];
  const byId = new Map(links.map((a) => [a.getAttribute('href').slice(1), a]));
  if ('IntersectionObserver' in window) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((l) => l.removeAttribute('aria-current'));
        const link = byId.get(entry.target.id);
        if (link) link.setAttribute('aria-current', 'true');
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    byId.forEach((_, id) => { const s = document.getElementById(id); if (s) spy.observe(s); });
  }

  /* Ano no rodapé */
  document.querySelectorAll('[data-year]').forEach((n) => { n.textContent = new Date().getFullYear(); });
})();
