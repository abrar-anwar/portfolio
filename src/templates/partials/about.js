'use strict';

const { escapeHtml } = require('../escape');

function renderSkillGroup(group) {
  const items = group.map((item) => `          <li>${escapeHtml(item)}</li>`).join('\n');
  return `        <ul>\n${items}\n        </ul>`;
}

function renderAbout({ about, skills }) {
  const paragraphs = about.paragraphs.map((p) => `      <p>${escapeHtml(p)}</p>`).join('\n');
  const groups = skills.groups.map(renderSkillGroup).join('\n');

  return `  <section class="section">
    <div class="container">
      <div class="about-grid">
        <div class="about-body">
          <h2 class="section-label">// 01. ${escapeHtml(about.heading)}</h2>
${paragraphs}
        </div>

        <div>
          <h2 class="section-label">// 02. ${escapeHtml(skills.heading)}</h2>
          <p class="skills-intro">${escapeHtml(skills.intro)}</p>
          <div class="skills-grid">
${groups}
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

module.exports = { renderAbout };
