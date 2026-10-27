// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { site } from './src/config/site.ts';

// The npm scripts run Astro through scripts/astro.mjs, which works around the "#" in the
// folder name by running from a symlink. preserveSymlinks keeps Vite on that symlinked path.
const viaSymlink = process.env.CROSSBOWH_SYMLINK_ROOT === '1';

export default defineConfig({
  // Set `url` in src/config/site.ts once you know your domain; this enables sitemap.xml and canonical URLs.
  site: site.url || undefined,
  integrations: site.url ? [sitemap()] : [],
  vite: viaSymlink ? { resolve: { preserveSymlinks: true } } : {},
});
