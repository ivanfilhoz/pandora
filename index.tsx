import * as React from 'react'
import { render } from 'react-dom'
import { LocaleProvider } from 'antd'
import antLocale from 'antd/lib/locale-provider/pt_BR'
import { locale } from 'moment'
import 'moment/locale/pt-br'
locale('pt-BR')
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks'
import { App } from './src/App'
import { ServerError } from 'apollo-link-http-common'
import { login, logout } from './src/util/auth'

const token = login()

const client = new ApolloClient({
  uri: process.env.API_URL,
  headers: {
    Authorization: token
  },
  onError: err => {
    const networkErr =
      err.networkError &&
      (err.networkError as ServerError).response &&
      (err.networkError as ServerError).response.status === 401
    const graphqlErr =
      err.graphQLErrors && err.graphQLErrors[0].message.match(/Not Authorized/)
    if (networkErr || graphqlErr) {
      logout()
    }
  }
})

render(
  <LocaleProvider locale={antLocale}>
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
        <App />
      </ApolloHooksProvider>
    </ApolloProvider>
  </LocaleProvider>,
  document.getElementById('root')
)
