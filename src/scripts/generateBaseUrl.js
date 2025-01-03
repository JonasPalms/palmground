export function generateBaseUrl(url) {
  return `${import.meta.env.BASE_URL === '/' ? '' : import.meta.env.BASE_URL}${url}`
}
