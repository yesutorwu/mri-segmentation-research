'use strict';
document.body.classList.add('js');
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');
toggle.hidden = false;
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('open', open);
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  toggle.setAttribute('aria-expanded', 'false');
  nav.classList.remove('open');
}));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && nav.classList.contains('open')) {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.focus();
  }
});
const modal = document.querySelector('#lightbox');
let previousFocus;
document.querySelectorAll('.figure-zoom').forEach(button => {
  button.addEventListener('click', () => {
    const image = button.querySelector('img');
    previousFocus = button;
    modal.querySelector('img').src = image.src;
    modal.querySelector('img').alt = image.alt;
    modal.querySelector('p').textContent = button.closest('figure').querySelector('figcaption').textContent;
    modal.showModal();
    document.body.classList.add('modal-open');
  });
});
modal.querySelector('button').addEventListener('click', () => modal.close());
modal.addEventListener('click', event => {
  if (event.target === modal) {
    const box = modal.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) modal.close();
  }
});
modal.addEventListener('close', () => {
  document.body.classList.remove('modal-open');
  previousFocus?.focus();
});
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal');
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: 0.08});
  document.querySelectorAll('.helper,.verification-card,.profile').forEach(element => observer.observe(element));
  const navObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      nav.querySelectorAll('a').forEach(link => {
        const active = link.hash === '#' + entry.target.id;
        link.classList.toggle('active', active);
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, {rootMargin: '-15% 0px -65% 0px'});
  nav.querySelectorAll('a').forEach(link => navObserver.observe(document.querySelector(link.hash)));
}
