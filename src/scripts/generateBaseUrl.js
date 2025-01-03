export function generateBaseUrl(url) {
  console.log(import.meta.env.BASE_URL)
  return `${import.meta.env.BASE_URL === '/' ? '' : import.meta.env.BASE_URL}${url}`
}
