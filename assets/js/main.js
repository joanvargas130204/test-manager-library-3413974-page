/* Manager Library - landing estática. JS vanilla, sin llamadas de red. */
(function () {
  'use strict';

  // 1. Enlace a la aplicación: se configura en <meta name="app-url"> del index.html
  var meta = document.querySelector('meta[name="app-url"]');
  var appUrl = meta ? meta.getAttribute('content') : '#';
  document.querySelectorAll('[data-app-link]').forEach(function (a) {
    a.setAttribute('href', appUrl);
    a.setAttribute('rel', 'noopener');
  });

  // 2. Menú móvil
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('menu-principal');
  function setMenu(open) {
    toggle.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
  }
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      setMenu(toggle.getAttribute('aria-expanded') !== 'true');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setMenu(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setMenu(false);
        toggle.focus();
      }
    });
  }

  // 3. Filtro de libros por categoría
  var chips = document.querySelectorAll('.chip');
  var books = document.querySelectorAll('.book');
  var status = document.getElementById('filtro-estado');
  function applyFilter(category) {
    var shown = 0;
    books.forEach(function (b) {
      var match = category === 'todos' || b.getAttribute('data-category') === category;
      b.hidden = !match;
      if (match) shown++;
    });
    chips.forEach(function (c) {
      var active = c.getAttribute('data-filter') === category;
      c.classList.toggle('is-active', active);
      c.setAttribute('aria-pressed', String(active));
    });
    if (status) {
      status.textContent = category === 'todos'
        ? 'Mostrando los ' + shown + ' libros'
        : 'Mostrando ' + shown + ' libro(s) de ' + category;
    }
  }
  chips.forEach(function (c) {
    c.addEventListener('click', function () { applyFilter(c.getAttribute('data-filter')); });
  });

  // 4. Formulario demostrativo: valida y muestra éxito, no envía datos
  var form = document.getElementById('form-contacto');
  var okMsg = document.getElementById('form-exito');
  var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  function setError(input, msg) {
    var err = document.getElementById(input.id + '-error');
    err.textContent = msg;
    if (msg) input.setAttribute('aria-invalid', 'true'); else input.removeAttribute('aria-invalid');
    return !msg;
  }
  function validate(input) {
    var v = input.value.trim();
    if (!v) return setError(input, 'Este campo es obligatorio.');
    if (input.type === 'email' && !emailRe.test(v)) return setError(input, 'Escribe un correo válido, por ejemplo nombre@dominio.com.');
    return setError(input, '');
  }
  if (form) {
    var fields = form.querySelectorAll('input, textarea');
    fields.forEach(function (f) {
      f.addEventListener('blur', function () { validate(f); });
      f.addEventListener('input', function () { if (f.getAttribute('aria-invalid')) validate(f); });
    });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      okMsg.hidden = true;
      var firstBad = null;
      fields.forEach(function (f) { if (!validate(f) && !firstBad) firstBad = f; });
      if (firstBad) { firstBad.focus(); return; }
      form.reset();
      okMsg.hidden = false;
    });
  }

  // 5. Año actual y día de hoy en el horario
  var year = document.getElementById('anio');
  if (year) year.textContent = String(new Date().getFullYear());
  var today = String(new Date().getDay());
  var row = document.querySelector('.hours tr[data-day="' + today + '"]');
  if (row) row.classList.add('is-today');

  // 6. Volver arriba y sección activa
  var topBtn = document.getElementById('volver-arriba');
  function onScroll() { if (topBtn) topBtn.hidden = window.scrollY < 400; }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  var links = document.querySelectorAll('.nav__link');
  if ('IntersectionObserver' in window) {
    var sections = document.querySelectorAll('main section[id]');
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (l) {
          if (l.getAttribute('href') === '#' + entry.target.id) l.setAttribute('aria-current', 'true');
          else l.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    sections.forEach(function (s) { obs.observe(s); });
  }
})();
