/*
 * sticky-cta.js — mobile bottom-of-viewport CTA (Apr 23 2026)
 * Injects a sticky "Claim Free Profile" CTA on every page except
 * free-profile.html (don't self-link). CSS handles the mobile-only
 * visibility via media query in style.css.
 *
 * Opt-out: a page can skip the CTA by adding data-no-sticky-cta="true"
 * to its <body>, or by including an element with class .sticky-cta already.
 */
(function () {
  'use strict';

  function init() {
    // Skip if page opted out
    if (document.body.getAttribute('data-no-sticky-cta') === 'true') return;
    // Skip if already present (e.g. page-baked CTA)
    if (document.querySelector('.sticky-cta')) return;
    // Skip on the Free Profile page itself
    var path = (window.location.pathname || '').toLowerCase();
    if (path.indexOf('free-profile') !== -1) return;

    var wrap = document.createElement('div');
    wrap.className = 'sticky-cta';
    wrap.setAttribute('role', 'complementary');
    wrap.setAttribute('aria-label', 'Claim your free profile');

    var a = document.createElement('a');
    a.href = 'free-profile.html';
    a.textContent = 'Claim Free Profile \u2192';

    wrap.appendChild(a);
    document.body.appendChild(wrap);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
