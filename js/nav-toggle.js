/*
 * nav-toggle.js — A.3 (Apr 28 2026)
 * Hamburger controller: toggle .active on #navLinks, sync aria-expanded,
 * close on Escape (restore focus), outside-click, or link click.
 */
(function () {
  'use strict';
  function init() {
    var toggle = document.getElementById('navToggle');
    var links = document.getElementById('navLinks');
    if (!toggle || !links) return;
    function open()  { links.classList.add('active');    toggle.setAttribute('aria-expanded', 'true'); }
    function close() { links.classList.remove('active'); toggle.setAttribute('aria-expanded', 'false'); }
    function isOpen() { return links.classList.contains('active'); }
    toggle.addEventListener('click', function (e) { e.stopPropagation(); isOpen() ? close() : open(); });
    links.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', close); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && isOpen()) { close(); toggle.focus(); } });
    document.addEventListener('click', function (e) { if (!isOpen()) return; if (toggle.contains(e.target) || links.contains(e.target)) return; close(); });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
