import { ApolloClient, InMemoryCache } from '@apollo/client'

import { config } from '../config/config'

const client = new ApolloClient({
  uri: `${(config.appUrl ?? '').slice(0, -1)}${config.graphqlPath as string}`,
  cache: new InMemoryCache()
})

export default client
