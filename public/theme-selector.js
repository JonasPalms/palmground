let currentTheme = localStorage.getItem('theme')

const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

if (!currentTheme) {
  mediaQuery.matches ? (currentTheme = 'dark') : (currentTheme = 'light')

  localStorage.setItem('theme', currentTheme)
}

document.documentElement.dataset.theme = currentTheme

function toogleTheme() {
  currentTheme = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light'

  document.documentElement.dataset.theme = currentTheme
  localStorage.setItem('theme', currentTheme)
}

document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('#theme-toggle')
  button.addEventListener('click', () => {
    toogleTheme()
  })
})

mediaQuery.addEventListener('change', (event) => {
  if (event.matches && currentTheme === 'light') {
    toogleTheme()
  }

  if (!event.matches && currentTheme === 'dark') {
    toogleTheme()
  }
})
