import React from 'react'
import Link from 'next/link'

import { config } from '../config/config'
import { withApollo } from '../graphql/apollo'

import Page from '../components/Page'
import ArticleList from './articles/_components/ArticleList'

function IndexPage ({ query }) {
  // Note: 'query' contains both /:params and ?query=value from url
  return <Page title={undefined} >
    <h1>{config.appName}</h1>

    <p><em>{config.appTagline}</em></p>

    <ArticleList />

    <h2>Routing</h2>
    <p>Current query: <strong>{JSON.stringify(query)}</strong></p>

    <ul>
      <li><Link href='/'><a>Home</a></Link></li>
      <li><Link href='/articles/other-1'><a>Other route</a></Link></li>
    </ul>

    <p>Get the <a target='_blank' href='https://github.com/tomsoderlund/nextjs-pwa-graphql-sql-boilerplate'>source code for nextjs-pwa-graphql-sql-boilerplate</a></p>
  </Page>
}

export default withApollo(IndexPage)
