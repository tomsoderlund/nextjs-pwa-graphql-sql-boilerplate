import { postgraphile } from 'postgraphile'
import PostGraphileNestedMutations from 'postgraphile-plugin-nested-mutations'

import { isDevelopment } from '../../config/config'
import { pool } from './postgres'
import resolverExtensions from './resolverExtensions'

export default postgraphile(
  pool,
  'public',
  {
    // watchPg: true, // Need extension for this to work properly
    graphiql: isDevelopment,
    enhanceGraphiql: isDevelopment,
    // externalUrlBase: "/api", // Don't use this since graphql route is incorrect w/ it
    graphqlRoute: '/api/graphql',
    graphiqlRoute: '/api/graphiql',
    retryOnInitFail: true,
    simpleCollections: 'only',
    appendPlugins: [
      PostGraphileNestedMutations,
      resolverExtensions
    ],
    graphileBuildOptions: {
      // nestedMutationsSimpleFieldNames: true
    },
    extendedErrors: ['severity', 'code', 'detail', 'hint', 'position', 'internalPosition', 'internalQuery', 'where', 'schema', 'table', 'column', 'dataType', 'constraint', 'file', 'line', 'routine'],
    // showErrorStack: isDevelopment,
    allowExplain: () => { return isDevelopment }
    // exportGqlSchemaPath: './graphql/__postgraphile__/schema.graphql'
    // retryOnInitFail is mainly so that going to /api/graphiql
    // doesn't crash entire app if config is incorrect. Fix config.
  }
)
