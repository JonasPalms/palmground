const matches = import.meta.glob('@/components/demoes/*.astro', { eager: true })

function getDemoComponent(path) {
  return matches[`/src/components/demoes/${path}.astro`]
}

export const demos = [
  {
    route: 'crypto',
    title: 'Web Crypto API',
    heading: 'Web Crypto API',
    technologies: ['javascript', 'web-api'],
    component: getDemoComponent('Crypto'),
  },
  {
    route: 'dialog',
    title: 'Dialog Element',
    heading: 'Dialog Element',
    technologies: ['html', 'javascript'],
    component: getDemoComponent('Dialog'),
  },
  {
    route: 'popover',
    title: 'Popover API',
    heading: 'Popover API',
    technologies: ['html', 'javascript'],
    component: getDemoComponent('Popover'),
  },
]
