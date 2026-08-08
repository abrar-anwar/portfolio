'use strict';

const { escapeHtml } = require('../escape');

function renderThemeSwatches(themes, defaultTheme) {
  return themes
    .map(
      (theme) =>
        `            <button
              type="button"
              class="theme-swatch"
              style="--swatch-color: ${theme.previewColor}"
              data-theme-swatch="${theme.id}"
              aria-pressed="${theme.id === defaultTheme}"
              aria-label="${escapeHtml(theme.label)} theme"
              title="${escapeHtml(theme.label)}"
            ></button>`
    )
    .join('\n');
}

function renderHero({ profile, themes, defaultTheme, assetRoot = '' }) {
  return `  <section class="section">
    <div class="container">
      <div class="hero-greeting">
        <div class="hero-prompt">${escapeHtml(profile.terminalPrompt)}<span class="hero-cursor">_</span></div>
        <h1 class="hero-heading">${escapeHtml(profile.heroHeading)}</h1>
      </div>

      <div class="terminal-window">
        <canvas class="hero-network" aria-hidden="true"></canvas>

        <div class="terminal-titlebar">
          <div class="terminal-dots">
            <span class="terminal-dot terminal-dot--red"></span>
            <span class="terminal-dot terminal-dot--yellow"></span>
            <span class="terminal-dot terminal-dot--green"></span>
          </div>
          <div class="terminal-path">~/portfolio/index.html</div>
          <ul class="terminal-nav">
            <li>
              <a
                class="contact-btn"
                title="Click me to send email to ${escapeHtml(profile.name)}..."
                href="mailto:${escapeHtml(profile.contactEmail)}?subject=${encodeURIComponent(profile.contactSubject)}"
              >[ CONTACT_ME ]</a>
            </li>
          </ul>
        </div>

        <div class="profile-column">
          <div class="profile-photo">
            <img src="${assetRoot}images/profile-pic.jpg" alt="Photo of ${escapeHtml(profile.name)}">
          </div>
          <div class="theme-switcher">
            <div class="theme-switcher-label">THEME</div>
            <div class="theme-swatches">
${renderThemeSwatches(themes, defaultTheme)}
            </div>
          </div>
        </div>

        <div class="services-column">
          <div class="services-panel">
            <div class="services-panel-label">// services.log</div>
            <p>${escapeHtml(profile.servicesNote)}</p>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

module.exports = { renderHero };
