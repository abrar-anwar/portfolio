'use strict';

const { escapeHtml } = require('../escape');
const { projectCard } = require('./project-card');

/**
 * Path (relative to site root) of a project's case-study page, if any.
 * Omits the .html extension — GitHub Pages serves foo.html at /foo, and
 * the extensionless form makes for a cleaner URL.
 */
function caseStudyPath(project) {
  return `case-studies/${project.slug}`;
}

function renderProjectsSection({ projects, intro, assetRoot = '' }) {
  const cards = projects
    .map((project) =>
      projectCard(project, {
        assetRoot,
        caseStudyHref: project.caseStudy ? `${assetRoot}${caseStudyPath(project)}` : null,
      })
    )
    .join('\n');

  return `  <section class="section" id="projects">
    <div class="container">
      <h2 class="section-label text-center projects-heading">// 03. ${escapeHtml(intro.heading)}</h2>
      <p class="projects-subheading text-center">${escapeHtml(intro.subheading)}</p>

      <div class="projects-shell">
        <div class="project-grid">
${cards}
        </div>
      </div>
    </div>
  </section>`;
}

module.exports = { renderProjectsSection, caseStudyPath };
