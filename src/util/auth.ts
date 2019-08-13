import * as localStorage from 'local-storage'
import * as queryString from 'query-string'

const { protocol, hostname, port } = window.location
const root = `${protocol}//${hostname}${port !== '80' ? ':' + port : ''}`

const oauth = (state: string = '/') => {
  window.location.assign(process.env.AUTH_URL + root + '/oauth&state=' + state)
}

export const login = () => {
  if (window.location.hash) {
    const parsed = queryString.parse(window.location.hash)
    localStorage.set('access_token', parsed.access_token)
    if (parsed.state) localStorage.set('state', parsed.state)
    history.pushState('', document.title, window.location.pathname)
  }

  const access = localStorage.get('access_token')

  if (!access) {
    oauth()
  }

  return access
}

export const logout = (state: string = '/') => {
  localStorage.remove('hash')
  localStorage.remove('access_token')
  localStorage.remove('expires')
  oauth(state)
}
