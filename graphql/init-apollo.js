import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost' // ApolloClient also but bug https://github.com/apollographql/apollo-client/issues/4843
// import ApolloClient from 'apollo-boost/lib/index'
import fetch from 'isomorphic-unfetch'

import { config } from '../config/config'

let apolloClient = null

function create (initialState) {
  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    link: new HttpLink({
      uri: `${config.appUrl}graphql`, // Server URL (must be absolute)
      credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
      fetch: !process.browser && fetch // Use fetch() polyfill on the server
    }),
    cache: new InMemoryCache().restore(initialState || {})
  })
}

export default function initApollo (initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState)
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState)
  }

  return apolloClient
}
