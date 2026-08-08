'use strict';

/**
 * Accent-color themes. `id` is persisted to localStorage and written to
 * <html data-theme="..."> — see src/styles/tokens.css for what each id maps
 * to and src/scripts/theme-switcher.js for the runtime swap.
 *
 * `previewColor` must stay in sync with the matching `:root[data-theme]`
 * block in src/styles/tokens.css — it's what the swatch buttons render
 * inline, since server-rendered HTML can't read a CSS variable back out.
 */
module.exports = [
  { id: 'green', label: 'Green', previewColor: 'oklch(0.75 0.19 150)' },
  { id: 'cyan', label: 'Cyan', previewColor: 'oklch(0.75 0.19 200)' },
  { id: 'amber', label: 'Amber', previewColor: 'oklch(0.75 0.19 70)' },
  { id: 'magenta', label: 'Magenta', previewColor: 'oklch(0.75 0.19 340)' },
];

module.exports.defaultTheme = 'green';
