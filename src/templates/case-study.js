'use strict';

const { escapeHtml } = require('./escape');
const { layout } = require('./layout');

function renderStack(stack) {
  return stack.map((item) => `          <span class="cs-stack-item">${escapeHtml(item)}</span>`).join('\n');
}

/**
 * Single image renders full-width like before; multiple images render as
 * a uniform grid, each cropped to the same aspect ratio (see .cs-gallery
 * in src/styles/case-study.css) so mismatched screenshot dimensions still
 * look consistent. Falls back to the project's card thumbnail when
 * `caseStudy.gallery` isn't set.
 */
function renderImages(project, assetRoot) {
  const images = project.caseStudy.gallery && project.caseStudy.gallery.length > 0
    ? project.caseStudy.gallery
    : [project.image];
  const alt = `${escapeHtml(project.caseStudy.client)} preview`;

  if (images.length === 1) {
    return `<img class="cs-thumb" src="${assetRoot}${escapeHtml(images[0])}" alt="${alt}">`;
  }

  const items = images
    .map((src) => `          <img src="${assetRoot}${escapeHtml(src)}" alt="${alt}">`)
    .join('\n');
  return `<div class="cs-gallery">\n${items}\n        </div>`;
}

function renderCaseStudyPage({ project, profile, themes }) {
  const cs = project.caseStudy;
  const assetRoot = '../';
  const title = `${cs.client} Case Study | ${profile.name}`;
  const description = cs.summary;

  const bodyHtml = `  <section class="section">
    <div class="container">
      <nav class="cs-breadcrumb">
        <a href="${assetRoot}index.html">&larr; back to portfolio</a>
      </nav>

      <div class="cs-hero">
        <div class="cs-eyebrow">// case-study</div>
        <h1 class="cs-title">${escapeHtml(cs.client)}</h1>

        <dl class="cs-meta">
          <div class="cs-meta-item">
            <dt>Role</dt>
            <dd>${escapeHtml(cs.role)}</dd>
          </div>
          <div class="cs-meta-item">
            <dt>Timeline</dt>
            <dd>${escapeHtml(cs.timeline)}</dd>
          </div>
          ${
            project.link
              ? `<div class="cs-meta-item">
            <dt>Live site</dt>
            <dd><a class="contact-btn" style="padding:4px 10px" target="_blank" rel="noopener" href="${escapeHtml(
              project.link
            )}">./visit &#8599;</a></dd>
          </div>`
              : ''
          }
        </dl>

        ${renderImages(project, assetRoot)}
      </div>

      <div class="cs-section">
        <h2 class="cs-section-label">// overview</h2>
        <p>${escapeHtml(cs.summary)}</p>
      </div>

      <div class="cs-section">
        <h2 class="cs-section-label">// challenge</h2>
        <p>${escapeHtml(cs.challenge)}</p>
      </div>

      <div class="cs-section">
        <h2 class="cs-section-label">// solution</h2>
        <p>${escapeHtml(cs.solution)}</p>
      </div>

      <div class="cs-section">
        <h2 class="cs-section-label">// tech stack</h2>
        <div class="cs-stack">
${renderStack(cs.stack)}
        </div>
      </div>

      <div class="cs-footer-nav">
        <a class="contact-btn" href="${assetRoot}index.html#projects">&larr; all projects</a>
        <a class="contact-btn" href="mailto:${escapeHtml(profile.contactEmail)}?subject=${encodeURIComponent(
    `Question about the ${cs.client} project`
  )}">[ CONTACT_ME ]</a>
      </div>
    </div>
  </section>`;

  return layout({
    title,
    description,
    canonicalUrl: `${profile.seo.siteUrl}case-studies/${project.slug}`,
    author: profile.name,
    assetRoot,
    bodyHtml,
    themeIds: themes.map((t) => t.id),
  });
}

module.exports = { renderCaseStudyPage };
