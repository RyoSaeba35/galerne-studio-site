import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://galernestudio.com',
  // Pages are emitted as /fr.html, /apps/fidele.html… which Cloudflare Pages serves at
  // /fr and /apps/fidele (no trailing slash), matching canonicals, links and the sitemap.
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en', fr: 'fr' } },
    }),
  ],
});
