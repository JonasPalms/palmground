// @ts-check
import { defineConfig } from 'astro/config'

import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
  experimental: {
    svg: true,
  },
  site: 'https://palmo.dk',
  base: '/palmground',
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
