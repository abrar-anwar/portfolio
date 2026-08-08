#!/usr/bin/env node
'use strict';

/**
 * Static site build. No bundler, no templating DSL — reads data from
 * src/data, renders pages with the functions in src/templates, and copies
 * static assets into dist/. Run with `npm run build`; `npm run deploy`
 * additionally publishes dist/ to the gh-pages branch.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SRC = path.join(ROOT, 'src');
const DIST = path.join(ROOT, 'dist');

const profile = require('../src/data/profile');
const themes = require('../src/data/themes');
const { PROJECTS } = require('../src/data/projects');

const { renderHomePage } = require('../src/templates/home');
const { renderCaseStudyPage } = require('../src/templates/case-study');

function rimraf(target) {
  fs.rmSync(target, { recursive: true, force: true });
}

function copyDir(from, to) {
  fs.mkdirSync(to, { recursive: true });
  for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
    const src = path.join(from, entry.name);
    const dest = path.join(to, entry.name);
    if (entry.isDirectory()) {
      copyDir(src, dest);
    } else {
      fs.copyFileSync(src, dest);
    }
  }
}

function writeFile(relativePath, contents) {
  const fullPath = path.join(DIST, relativePath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, contents);
}

function build() {
  rimraf(DIST);
  fs.mkdirSync(DIST, { recursive: true });

  copyDir(path.join(SRC, 'assets', 'images'), path.join(DIST, 'images'));
  copyDir(path.join(SRC, 'styles'), path.join(DIST, 'styles'));
  copyDir(path.join(SRC, 'scripts'), path.join(DIST, 'scripts'));

  writeFile(
    'index.html',
    renderHomePage({
      profile,
      themes,
      defaultTheme: themes.defaultTheme,
      projects: PROJECTS,
    })
  );

  let caseStudyCount = 0;
  for (const project of PROJECTS) {
    if (!project.caseStudy) continue;
    writeFile(
      path.join('case-studies', `${project.slug}.html`),
      renderCaseStudyPage({ project, profile, themes })
    );
    caseStudyCount += 1;
  }

  console.log(`Built dist/: index.html, ${caseStudyCount}/${PROJECTS.length} case-study pages, assets copied.`);
}

build();
