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

const client = new ApolloClient({
  uri: process.env.API_URL,
  headers: {
    'X-Api-Key': process.env.API_KEY
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
