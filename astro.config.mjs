// @ts-check
import { defineConfig } from 'astro/config'
import { loadEnv } from 'vite'

const { SITE_BASE } = loadEnv(process.env.NODE_ENV, process.cwd(), '')

import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
  experimental: {
    svg: true,
  },
  site: 'https://palmo.dk',
  base: SITE_BASE || '',
  markdown: {
    shikiConfig: {
      themes: {
        light: 'min-light',
        dark: 'night-owl',
      },
    },
  },

  integrations: [mdx()],
})
