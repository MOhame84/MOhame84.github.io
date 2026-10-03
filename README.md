# Mohamed — Cybersecurity Portfolio

A simple static HTML, CSS and JavaScript portfolio site. No npm, React, Vite or Tailwind are required.

## Project structure

    MOhame84.github.io/
    ├── .github/
    │   └── workflows/
    │       └── deploy.yml
    ├── assets/
    │   └── favicon.svg
    ├── index.html
    ├── style.css
    ├── script.js
    ├── robots.txt
    ├── README.md
    └── CHECKLIST.md

## Run locally

Because this is a static site, you can open index.html directly in a browser.

For a local HTTP server:

    python -m http.server 8000

Then open http://localhost:8000.

## Deploy to GitHub Pages

The repository uses GitHub Actions to publish the repository root as a static Pages artifact. Pushes to main trigger deployment.

In GitHub, make sure Settings → Pages → Build and deployment → Source is set to GitHub Actions.

## Editing content

Most page content is written directly in index.html. Replace any [SQUARE BRACKETS] placeholders before publishing.

## Accessibility and performance notes

- Skip-to-content link and visible keyboard focus states.
- Responsive mobile menu with labelled controls.
- prefers-reduced-motion disables animations and smooth scrolling.
- Semantic header, main, footer and nav landmarks with a single h1.
- No build step and no runtime dependencies.
- Google Fonts are the only external request.
