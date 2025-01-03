// @ts-check
import { defineConfig } from 'astro/config'
import { loadEnv } from 'vite'
import rehypeAstroRelativeMarkdownLinks from 'astro-rehype-relative-markdown-links'

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
    rehypePlugins: [rehypeAstroRelativeMarkdownLinks],
    shikiConfig: {
      themes: {
        light: 'min-light',
        dark: 'night-owl',
      },
    },
  },

  integrations: [mdx()],
})
