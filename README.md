# #CrossBowH — portfolio

Single-page cybersecurity portfolio built with [Astro](https://astro.build). The visual design follows
the "digital garden" board layout of shellsharks.com: dark background, centred wordmark, hamburger menu,
and a two-column grid of colour-tinted cards. All identity, logo, artwork and content are original to #CrossBowH.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # type-checks, then writes the static site to dist/
npm run preview  # serves dist/ locally
```

**About the `#` in the folder name.** Vite (Astro's bundler) cannot build from a path that contains `#`.
The npm scripts go through `scripts/astro.mjs`, which runs Astro from a temporary symlink without the `#`.
If you rename the folder (for example to `crossbowH`), everything keeps working and the symlink is simply skipped.
Run Astro through the npm scripts rather than `npx astro ...` while the folder name contains `#`.

## Where to put your content

| What | File |
| --- | --- |
| Name, title, intro, announcement box, About text, social links, email, contact form endpoint, site URL, SEO description | `src/config/site.ts` |
| Projects | `src/data/projects.ts` |
| Blog posts (title, excerpt, date, link to the full article) | `src/data/blogPosts.ts` |
| Skills | `src/data/skills.ts` |
| Experience timeline | `src/data/experience.ts` |
| Certifications and achievements | `src/data/certifications.ts` |
| Images (project screenshots, post thumbnails, résumé PDF, social preview image) | `public/` |

Everything in `[BRACKETS]` is a placeholder. Entries marked `placeholder: true` show a small "sample" badge.

**Before publishing:**

1. Replace the placeholders and remove `placeholder: true` from real entries.
2. Set `showPlaceholders: false` in `src/config/site.ts`. Placeholder entries and links without a URL are then hidden,
   and empty sections show a short "coming soon" note instead of empty cards.
3. Set `url` in `src/config/site.ts` to your domain. This turns on canonical URLs, absolute Open Graph URLs,
   `sitemap-index.xml` and the sitemap line in `robots.txt`.
4. Optionally add a 1200×630 image to `public/` and set `ogImage` for link previews.

## Contact form

The site is static, so it cannot send email by itself. Until `contact.formEndpoint` is set, the form validates
input and then says clearly that **nothing was sent**.

To make it send, create a form with a service that accepts JSON POSTs and paste its endpoint into
`contact.formEndpoint`:

- **Formspree**: create a form, use `https://formspree.io/f/<id>`.
- **Web3Forms**: use `https://api.web3forms.com/submit` and set `formExtraFields: { access_key: '<your key>' }`.
- Or your own serverless function that receives `{ name, email, message }`.

## Project structure

```
src/
  config/site.ts          main content config
  data/                   projects, posts, skills, experience, certifications
  components/
    Header.astro          wordmark, hamburger menu, theme switch
    Footer.astro
    sections/             Intro, Spotlight (emblem + latest post), About, Projects, Blog, Contact
    ui/                   CrossBowLogo, Wordmark, Emblem, Card, Icon, ContactForm, ...
  layouts/BaseLayout.astro  <head>, metadata, theme bootstrap
  styles/global.css       design tokens (colours, type) and base styles
  pages/index.astro       the single page
public/
  favicon.svg             #CrossBowH favicon
  crossbowh-logo.svg      standalone logo mark
```

## Brand

- **Logo** (`src/components/ui/CrossBowLogo.astro`): a hash sign built from crossbow parts. The bow limb forms the top bar,
  the stock rails form the two strokes, the latch plate forms the lower bar, and a bolt flies through the centre.
- **Wordmark**: the mark plus `#CrossBowH` set in Orbitron (self-hosted via Fontsource).
- **Emblem**: a targeting-dial illustration used in the hero.
- **Themes**: dark (default), light and classic, switchable from the header and remembered per browser.

Icons are from [Phosphor](https://phosphoricons.com) (MIT), the same family the reference design uses.
