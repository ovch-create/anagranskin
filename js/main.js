// ============================================================
// ANAGRAN · Reishi Lab · #sunskin landing
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // ===== FAQ accordion =====
  document.querySelectorAll('.faq__item').forEach(item => {
    const btn = item.querySelector('.faq__q');
    btn.addEventListener('click', () => {
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq__item').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });

  // ===== Smooth scroll for anchor links =====
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // ===== Reveal on scroll (lightweight) =====
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('.step, .mirror__card, .proto-step, .maps__product, .reishi__compare-col, .parallel__row').forEach(el => {
    el.classList.add('reveal');
    io.observe(el);
  });

});
