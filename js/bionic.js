/*
 * bionic.js — Bionic Bold utility (Apr 23 2026)
 * Wraps the first 2–4 characters of each word ≥4 chars in <b>.
 * Opt-in: only runs on elements matching [data-bionic="true"] or .bionic.
 * Skips nav, footer, headings, links, buttons, form controls,
 * already-bolded text, and code/pre blocks.
 *
 * Length rule (Apr 24 2026 density tune — only bold words with 6+ letters):
 *   len 1–5  → bold 0 (skip short words)
 *   len 6–8  → bold first 3
 *   len 9+   → bold first 4
 */
(function () {
  'use strict';

  var SKIP_TAGS = {
    B: 1, STRONG: 1, A: 1, BUTTON: 1, INPUT: 1, TEXTAREA: 1, SELECT: 1,
    SCRIPT: 1, STYLE: 1, CODE: 1, PRE: 1, SVG: 1, NOSCRIPT: 1,
    H1: 1, H2: 1, H3: 1, H4: 1, H5: 1, H6: 1,
    NAV: 1, FOOTER: 1, LABEL: 1
  };

  function boldPrefixLen(wordLen) {
    if (wordLen <= 5) return 0;
    if (wordLen <= 8) return 3;
    return 4;
  }

  function escapeHtml(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function transformText(text) {
    // Only letter runs are candidates. Punctuation / digits / whitespace pass through.
    return escapeHtml(text).replace(/([A-Za-zÀ-ÿ]+)/g, function (word) {
      var n = boldPrefixLen(word.length);
      if (n === 0) return word;
      return '<b>' + word.slice(0, n) + '</b>' + word.slice(n);
    });
  }

  function shouldSkip(node) {
    for (var p = node.parentNode; p; p = p.parentNode) {
      if (p.nodeType === 1 && SKIP_TAGS[p.tagName]) return true;
    }
    return false;
  }

  function processRoot(root) {
    if (!root || root.dataset.bionicApplied === '1') return;
    root.dataset.bionicApplied = '1';

    var walker = document.createTreeWalker(
      root,
      NodeFilter.SHOW_TEXT,
      null,
      false
    );
    var nodes = [];
    while (walker.nextNode()) {
      var n = walker.currentNode;
      if (!n.nodeValue || !n.nodeValue.trim()) continue;
      if (shouldSkip(n)) continue;
      nodes.push(n);
    }

    nodes.forEach(function (node) {
      var newHtml = transformText(node.nodeValue);
      if (newHtml === escapeHtml(node.nodeValue)) return; // nothing to bold
      var tpl = document.createElement('template');
      tpl.innerHTML = newHtml;
      node.parentNode.replaceChild(tpl.content, node);
    });
  }

  function init() {
    var roots = document.querySelectorAll('[data-bionic="true"], .bionic');
    for (var i = 0; i < roots.length; i++) processRoot(roots[i]);
  }

  // Expose for tests / manual invocation
  window.BionicBold = {
    apply: processRoot,
    _prefixLen: boldPrefixLen,
    _transform: transformText
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
