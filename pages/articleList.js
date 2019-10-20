import React from 'react'

import { config } from '../config/config'
import { withApollo } from '../graphql/apollo'

import { Link } from '../server/routes'
import Page from '../components/Page'
import ArticleList from '../components/ArticleList'

function IndexPage ({ query }) {
  // Note: query contains both /:params (server/routes.js) and ?query=value from url
  return <Page title={'Start page'} >
    <h1>{config.appName}</h1>

    <ArticleList />

    <h2>Routing</h2>
    Current page slug: <strong>'{query.slug}'</strong> (see server/routes.js)
    <ul>
      <li><Link route='/'><a>Home</a></Link></li>
      <li><Link route='/articles/other'><a>Other route</a></Link></li>
      <li><Link route='https://github.com/tomsoderlund/nextjs-pwa-graphql-sql-boilerplate'><a>Get the source code for nextjs-pwa-graphql-sql-boilerplate</a></Link></li>
    </ul>
  </Page>
}

export default withApollo(IndexPage)
