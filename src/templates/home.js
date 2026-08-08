'use strict';

const { layout } = require('./layout');
const { renderHero } = require('./partials/hero');
const { renderAbout } = require('./partials/about');
const { renderProjectsSection } = require('./partials/projects-section');

function renderHomePage({ profile, themes, defaultTheme, projects }) {
  const bodyHtml = [
    renderHero({ profile, themes, defaultTheme }),
    renderAbout(profile),
    renderProjectsSection({ projects, intro: profile.projectsIntro }),
  ].join('\n\n');

  return layout({
    title: profile.seo.title,
    description: profile.seo.description,
    canonicalUrl: profile.seo.siteUrl,
    author: profile.name,
    assetRoot: '',
    bodyHtml,
    extraScripts: ['scripts/hero-network.js'],
    themeIds: themes.map((t) => t.id),
  });
}

module.exports = { renderHomePage };
