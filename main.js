(function () {
  function ready(fn) {
    if (document.readyState !== 'loading') {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  ready(function () {
    var navToggle = document.getElementById('navToggle');
    var siteNav = document.getElementById('siteNav');
    var navList = siteNav ? siteNav.querySelector('.nav-list') : null;

    if (navToggle && navList) {
      navToggle.addEventListener('click', function () {
        var expanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', String(!expanded));
        navList.classList.toggle('open');
      });
    }

    // Set current year in footer
    var yearEl = document.getElementById('year');
    if (yearEl) {
      yearEl.textContent = String(new Date().getFullYear());
    }
  });
})();



