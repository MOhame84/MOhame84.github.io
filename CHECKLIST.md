# What you still need to replace

All of these live in `src/data/content.js` unless noted otherwise.

## Already filled in for you

- [x] `contact.linkedin` — your real LinkedIn profile
- [x] `contact.upwork` — your real Upwork profile
- [x] `contact.freelancer` — your real Freelancer.com profile
- [x] `contact.mostaql` — your real Mostaql profile
- [x] `profile.fullName` — "Mohamed Elsayed Mohamed" (displayed name stays "Mohamed")

## Still required

- [ ] `contact.email` — `[ADD EMAIL]`
- [ ] `contact.github` — only add this if you actually want a GitHub profile linked; otherwise leave
      it as a placeholder and it will stay hidden on the site.
- [ ] Project links — five entries marked `[ADD REPOSITORY LINK]`, `[ADD PROFILE OR WRITE-UP LINK]`
      and `[ADD LINK OR REMOVE]`. Delete the `link` line if a project has no public link.
- [ ] Certification statuses — set each to `Completed`, `In Progress` or `Planned`.
      Do not mark anything Completed before it is.
- [ ] Third certification entry `[Add certification name]` — replace it or delete the entry.

## In `index.html`

- [ ] `<link rel="canonical">` and `og:url` — your real domain
- [ ] `og:description` and the meta description if you want different wording
- [ ] Add an Open Graph image later: put `og-image.png` in `public/` and add
      `<meta property="og:image" content="/og-image.png" />`

## In `vite.config.js`

- [ ] `base` — `'/'` for Vercel or a custom domain, `'/repo-name/'` for GitHub Pages

## Worth reviewing before publishing

- [ ] The About paragraphs — rewrite anything that does not sound like you
- [ ] Skills — remove anything you would not be comfortable being asked about in an interview
- [ ] Services — prices are not listed anywhere; add them only if you want them public
- [ ] Graduation year or expected year, if you want it in the Education section
- [ ] A CV file: put `cv.pdf` in `public/` and link to `/cv.pdf` from the hero or contact section
