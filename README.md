# Mohamed — Cybersecurity Portfolio

A personal portfolio site built with React, Vite and Tailwind CSS. Dark, minimal and
content-first: every piece of text lives in one data file so the site can be updated
without touching components.

## Requirements

- Node.js 18 or newer
- npm 9 or newer

## Install

```bash
npm install
```

## Run in development

```bash
npm run dev
```

Open the address Vite prints, usually http://localhost:5173

## Production build

```bash
npm run build     # output goes to dist/
npm run preview   # serve the built site locally to check it
```

## Project structure

```
mohamed-portfolio/
├── index.html                  # page shell, SEO metadata, fonts, favicon link
├── package.json
├── vite.config.js              # set `base` here for GitHub Pages
├── tailwind.config.js          # colour, type and animation tokens
├── postcss.config.js
├── .github/workflows/deploy.yml
├── public/
│   ├── favicon.svg
│   └── robots.txt
└── src/
    ├── main.jsx                # React entry point
    ├── App.jsx                 # section order
    ├── index.css               # Tailwind layers, base styles, reduced motion
    ├── data/
    │   └── content.js          # ALL text content and placeholders
    ├── hooks/
    │   └── useReveal.js        # scroll-reveal via IntersectionObserver
    └── components/
        ├── Navbar.jsx          # responsive nav + mobile menu + active link
        ├── Hero.jsx
        ├── About.jsx
        ├── Skills.jsx
        ├── Focus.jsx           # "Cybersecurity focus"
        ├── Projects.jsx
        ├── Services.jsx
        ├── Certifications.jsx
        ├── Education.jsx
        ├── Contact.jsx
        ├── Footer.jsx
        └── ui/
            ├── Section.jsx     # shared section shell (sticky heading column)
            ├── Reveal.jsx      # scroll-reveal wrapper
            └── Tag.jsx         # skill pill
```

## Editing content

Open `src/data/content.js`. Anything inside `[SQUARE BRACKETS]` is a placeholder and is
rendered in an amber colour on the page so it is easy to spot. Replace it with real
information, or delete the entry.

## Deploy to Vercel

1. Push the project to a GitHub repository.
2. Go to vercel.com, choose **Add New → Project**, and import the repository.
3. Vercel detects Vite automatically. Confirm the settings:
   - Framework preset: **Vite**
   - Build command: `npm run build`
   - Output directory: `dist`
4. Click **Deploy**. Every later push to `main` redeploys the site.
5. Keep `base: '/'` in `vite.config.js` for Vercel.

Optionally, deploy from the terminal:

```bash
npm i -g vercel
vercel          # preview deployment
vercel --prod   # production deployment
```

## Deploy to GitHub Pages

Two options. Pick one.

### Option A — GitHub Actions (recommended)

1. In `vite.config.js`, set the base path to your repository name:
   ```js
   base: '/your-repo-name/',
   ```
   Skip this step if the repository is named `your-username.github.io`.
2. Commit and push to `main`.
3. On GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` builds and publishes on every push.
   The live URL appears under **Actions** when it finishes.

### Option B — the `gh-pages` branch

1. Set `base: '/your-repo-name/'` in `vite.config.js`.
2. Run:
   ```bash
   npm run deploy
   ```
3. On GitHub: **Settings → Pages → Source: Deploy from a branch → `gh-pages` / root**.

Note: GitHub Pages serves static files only, which is all this site needs.

## Accessibility and performance notes

- Skip-to-content link, visible keyboard focus rings, labelled mobile menu button.
- `prefers-reduced-motion` disables animations and smooth scrolling.
- Semantic landmarks (`header`, `main`, `footer`, `nav`) and a single `h1`.
- No images to download; the only external request is Google Fonts.

## Before you publish: replacement checklist

See `CHECKLIST.md`.
