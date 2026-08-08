# Portfolio

Static site, no framework. A small Node build script reads content from
`src/data/`, renders it with plain JS template functions in
`src/templates/`, and writes the result to `dist/`, which is what gets
published to GitHub Pages.

## Commands

```bash
npm install       # installs gh-pages (only dependency, only used for deploy)
npm run build     # builds dist/ from src/
npm run serve     # builds, then serves dist/ locally so you can preview it
npm run deploy    # builds, then publishes dist/ to the gh-pages branch
```

`dist/` is generated — it's git-ignored and rebuilt from scratch every time
you run `npm run build`. Never hand-edit anything in `dist/`.

## Project layout

```
src/
  data/
    profile.js      # name, bio, skills, contact — all page copy lives here
    projects.js      # project cards + case study content, see below
  templates/
    layout.js         # shared <head>/<body> shell
    home.js             # composes the homepage from partials
    case-study.js         # renders one case-study page
    partials/               # hero, about/skills, project cards, tabs
  styles/            # plain CSS, split by concern (tokens/base/components/case-study)
  scripts/           # tabs.js — the only client-side JS on the site
  assets/images/     # images copied as-is into dist/images
build/
  build.js           # the entire build process, no bundler
```

## Adding a project

Open `src/data/projects.js`. `PROJECTS` is one flat array — add a new
entry to it:

```js
{
  slug: 'my-new-project',            // used for the case-study URL, keep it URL-safe
  tabs: ['shopify'],                  // which tab(s) this shows under — see below
  title: 'My New Project',
  image: 'images/my-new-project.png', // see "Adding an image" below
  description: [
    'One or two sentences about the project.',
  ],
  link: 'https://example.com',        // optional — omit to hide the "visit" link
},
```

That's it — the build picks up every entry automatically, no other file
needs to change. It always shows in the homepage's "All" tab too (see
"The All tab" below), regardless of what's in `tabs`.

### Showing a project in more than one tab

List more than one id in `tabs` — e.g. `tabs: ['shopify', 'shopify-plus']`
shows that same card under both tabs. It's still a single entry in the
array; nothing else needs to change.

### Adding an image

Drop the image file into `src/assets/images/` and reference it from
`projects.js` as `images/<filename>`. The build copies everything in that
folder into `dist/images/` verbatim. Thumbnails render at a 640×400-ish
aspect ratio (see `.project-card-thumb` in `src/styles/components.css`),
so roughly that aspect ratio looks best.

The three projects shipped today (`placeholder-project-one/two/three`) use
generated placeholder SVGs — replace their `image` field and delete the
placeholder SVGs from `src/assets/images/` once you have real screenshots.

### Adding a new tab

Add an entry to the `TABS` array at the top of `projects.js`, then add
that tab's id to `tabs: [...]` on whichever projects should show under
it. The tab icon (the Shopify mark) is rendered by `renderTabIcon()` in
`src/templates/partials/projects-section.js` and is the same for every
tab — extend that function if a new tab should get its own icon.

### The "All" tab

The homepage always shows an extra "All" tab first, active by default, so
every project is visible on load without requiring a click — useful while
the catalog is small. It isn't in `projects.js`; it's computed in
`renderProjectsSection()` (`src/templates/partials/projects-section.js`)
as the union of every tab in `TABS`, so it stays in sync automatically as
you add, remove, or rename tabs and projects.

## Adding a case study

A project gets its own case-study page automatically the moment its
object in `projects.js` has a `caseStudy` field:

```js
{
  slug: 'my-new-project',
  // ...same fields as above...
  caseStudy: {
    client: 'My New Project',
    role: 'Shopify Theme Development',
    timeline: '6 weeks',
    stack: ['Shopify Liquid', 'JavaScript', 'CSS'],
    summary: 'One-paragraph overview of the engagement.',
    challenge: 'The problem the client had before this project.',
    solution: 'What you built and why.',
    gallery: ['images/my-project-1.png', 'images/my-project-2.png'], // optional, see below
  },
},
```

Running `npm run build` will generate `dist/case-studies/my-new-project.html`
and the project card will automatically show a "./case-study" link next to
"./visit". Leave `caseStudy` out entirely for projects that don't have a
write-up yet — the card just won't show that link.

**`gallery` is optional.** Leave it out (or give it a single path) and the
page shows one full-width image, same as the project's card `image`. Give
it two or more image paths and they lay out as a uniform grid instead
(`.cs-gallery` in `src/styles/case-study.css`) — every tile is cropped to
the same aspect ratio, so screenshots that aren't all the same dimensions
(the usual case) still look consistent side by side.

The case-study template is `src/templates/case-study.js` — edit it if you
want to add/remove sections across every case study at once.

## Editing personal content

Name, bio, skills, contact email, and SEO metadata are all in
`src/data/profile.js`. Nothing else needs to change to update that copy.

## Deploying

```bash
npm run deploy
```

This builds `dist/` and pushes it to the `gh-pages` branch via the
`gh-pages` package. GitHub Pages should be configured (once) to serve from
that branch — Repo Settings → Pages → Branch: `gh-pages`.
