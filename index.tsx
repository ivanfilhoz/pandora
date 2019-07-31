import * as React from 'react'
import { render } from 'react-dom'
import { LocaleProvider } from 'antd'
import antLocale from 'antd/lib/locale-provider/pt_BR'
import { locale } from 'moment'
import 'moment/locale/pt-br'
locale('pt-BR')
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { App } from './src/App'
import * as localStorage from 'local-storage'
import * as queryString from 'query-string'
import { ServerError } from 'apollo-link-http-common'

let token

if (window.location.hash) {
  localStorage.set('hash', window.location.hash)
  const parsed = queryString.parse(window.location.hash)
  localStorage.set('access_token', parsed.access_token)
  localStorage.set('expires', parsed.expires)
  history.pushState('', document.title, window.location.pathname)
}

token = localStorage.get('access_token')

if (!token) {
  window.location.assign(process.env.AUTH_URL + window.location.href)
}

console.log(localStorage.get('hash'))

const client = new ApolloClient({
  uri: process.env.API_URL,
  headers: {
    Authorization: 'Bearer ' + token
  },
  onError: err => {
    const networkErr =
      err.networkError &&
      (err.networkError as ServerError).response.status === 401
    const graphqlErr =
      err.graphQLErrors && err.graphQLErrors[0].message.match(/Not Authorized/)
    if (networkErr || graphqlErr) {
      console.log('not autorized')
      // window.location.assign(process.env.AUTH_URL + window.location.href)
    }
  }
})

render(
  <LocaleProvider locale={antLocale}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </LocaleProvider>,
  document.getElementById('root')
)
