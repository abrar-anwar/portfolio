'use strict';

const { escapeHtml } = require('./escape');

/**
 * Shared HTML shell for every page. `assetRoot` is the relative path back
 * to the site root (e.g. '' at /, '../' from /case-studies/<slug>.html) so
 * every page can share the same stylesheet/script/image references without
 * hard-coding absolute paths.
 */
function layout({
  title,
  description,
  canonicalUrl,
  author = '',
  assetRoot = '',
  bodyClass = '',
  bodyHtml,
  extraScripts = [],
  themeIds = [],
}) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}">
  <meta name="author" content="${escapeHtml(author)}">
  <meta property="og:title" content="${escapeHtml(title)}">
  <meta property="og:type" content="website">
  <meta property="og:description" content="${escapeHtml(description)}">
  <meta property="og:url" content="${escapeHtml(canonicalUrl)}">
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="${escapeHtml(title)}">
  <meta name="twitter:description" content="${escapeHtml(description)}">

  <link rel="icon" href="${assetRoot}images/favicon.png">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700;800&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="${assetRoot}styles/tokens.css">
  <link rel="stylesheet" href="${assetRoot}styles/base.css">
  <link rel="stylesheet" href="${assetRoot}styles/components.css">
  <link rel="stylesheet" href="${assetRoot}styles/case-study.css">

  <script>
    /* Applies the stored theme before first paint to avoid a flash of the
       default accent color. Kept inline + tiny on purpose. */
    (function () {
      try {
        var stored = window.localStorage.getItem('theme');
        var known = ${JSON.stringify(themeIds)};
        if (stored && known.indexOf(stored) !== -1) {
          document.documentElement.setAttribute('data-theme', stored);
        }
      } catch (err) {}
    })();
  </script>
</head>
<body class="${escapeHtml(bodyClass)}">
${bodyHtml}
  <script src="${assetRoot}scripts/theme-switcher.js" defer></script>
${extraScripts.map((src) => `  <script src="${assetRoot}${src}" defer></script>`).join('\n')}
</body>
</html>
`;
}

module.exports = { layout };
