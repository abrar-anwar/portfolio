/**
 * Applies and persists the accent-color theme. Themes are pure CSS (see
 * styles/tokens.css) — this only ever toggles `data-theme` on <html> and
 * remembers the choice in localStorage. No inline styles, no stylesheet
 * swapping.
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'theme';
  var root = document.documentElement;

  function applyTheme(themeId) {
    root.setAttribute('data-theme', themeId);

    var swatches = document.querySelectorAll('[data-theme-swatch]');
    for (var i = 0; i < swatches.length; i++) {
      var isActive = swatches[i].getAttribute('data-theme-swatch') === themeId;
      swatches[i].setAttribute('aria-pressed', String(isActive));
    }
  }

  function init() {
    var stored = null;
    try {
      stored = window.localStorage.getItem(STORAGE_KEY);
    } catch (err) {
      /* localStorage unavailable (e.g. privacy mode) — fall back to default */
    }

    if (stored) {
      applyTheme(stored);
    }

    var swatches = document.querySelectorAll('[data-theme-swatch]');
    for (var i = 0; i < swatches.length; i++) {
      swatches[i].addEventListener('click', function (event) {
        var themeId = event.currentTarget.getAttribute('data-theme-swatch');
        applyTheme(themeId);
        try {
          window.localStorage.setItem(STORAGE_KEY, themeId);
        } catch (err) {
          /* ignore persistence failure */
        }
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
