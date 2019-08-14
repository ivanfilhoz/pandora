import * as React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks'
import { ServerError } from 'apollo-link-http-common'
import { login, logout } from './auth'

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

export const APIProvider: React.FunctionComponent = ({ children }) => (
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>{children}</ApolloHooksProvider>
  </ApolloProvider>
)
