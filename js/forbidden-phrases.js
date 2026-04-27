/*
 * forbidden-phrases.js — opt-in cliché blocker for profile-creation forms.
 * Apr 27 2026.
 * Opt in: <form data-block-cliches="true">. Runs on text inputs + textareas
 * inside that form. Surfaces a Gold tooltip below the field when matched.
 * Does NOT block submit. Does NOT touch display copy.
 *
 * Phrases blocked (case-insensitive, whole-word match):
 *   - rainbow bridge
 *   - fur baby / furbaby
 *   - crossed over
 *   - over the rainbow
 *
 * Tooltip text: "You don't have to say that. Tell us the truth."
 */
(function () {
  'use strict';

  var PHRASES = [
    /\brainbow\s+bridge\b/i,
    /\bfur\s*baby\b/i,
    /\bcrossed\s+over\b/i,
    /\bover\s+the\s+rainbow\b/i
  ];
  var TIP_TEXT = "You don't have to say that. Tell us the truth.";

  function ensureStyles() {
    if (document.getElementById('fp-styles')) return;
    var s = document.createElement('style');
    s.id = 'fp-styles';
    s.textContent =
      '.fp-tip{display:block;margin-top:6px;font-size:12px;color:#C9A24C;' +
      'border-left:2px solid #C9A24C;padding:4px 10px;' +
      'background:rgba(201,162,76,0.08);letter-spacing:0.02em;' +
      'font-family:var(--font-body,inherit);}' +
      '.fp-tip[hidden]{display:none;}';
    document.head.appendChild(s);
  }

  function attachTip(input) {
    if (input.dataset.fpAttached === '1') return;
    input.dataset.fpAttached = '1';

    var tip = document.createElement('span');
    tip.className = 'fp-tip';
    tip.hidden = true;
    tip.textContent = TIP_TEXT;
    input.insertAdjacentElement('afterend', tip);

    function check() {
      var v = input.value || '';
      var hit = PHRASES.some(function (re) { return re.test(v); });
      tip.hidden = !hit;
    }
    input.addEventListener('input', check);
    input.addEventListener('blur', check);
  }

  function init() {
    var forms = document.querySelectorAll('form[data-block-cliches="true"]');
    if (!forms.length) return;
    ensureStyles();
    forms.forEach(function (f) {
      var fields = f.querySelectorAll(
        'input[type="text"], input[type="email"], input:not([type]), textarea'
      );
      fields.forEach(attachTip);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
