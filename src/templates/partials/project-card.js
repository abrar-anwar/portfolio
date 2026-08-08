'use strict';

const { escapeHtml } = require('../escape');

/**
 * Renders a single project card. `caseStudyHref` is passed in by the
 * caller (rather than derived here) so this partial stays agnostic of
 * where case-study pages live on disk.
 */
function projectCard(project, { assetRoot = '', caseStudyHref = null } = {}) {
  const paragraphs = project.description
    .map((para) => `        <p class="project-card-intro">${escapeHtml(para)}</p>`)
    .join('\n');

  const links = [];
  if (project.link) {
    links.push(
      `<a class="project-card-link" target="_blank" rel="noopener" href="${escapeHtml(
        project.link
      )}">./visit &#8599;</a>`
    );
  }
  if (caseStudyHref) {
    links.push(`<a class="project-card-link" href="${escapeHtml(caseStudyHref)}">./case-study</a>`);
  }

  return `      <article class="project-card">
        <img class="project-card-thumb" src="${assetRoot}${escapeHtml(project.image)}" alt="${escapeHtml(
    project.title
  )} storefront preview" loading="lazy">
        <div class="project-card-body">
          <h3 class="project-card-title">${escapeHtml(project.title)}</h3>
${paragraphs}
          <div class="project-card-links">
            ${links.join('\n            ')}
          </div>
        </div>
      </article>`;
}

module.exports = { projectCard };
