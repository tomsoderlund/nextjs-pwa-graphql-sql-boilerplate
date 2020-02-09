import React from 'react'
import Link from 'next/link'
import ErrorPage from 'next/error'

import { withApollo } from '../../graphql/apollo'
import { useGetArticle } from '../../hooks/useArticle'

import Page from '../../components/Page'
import ArticleDetails from '../../components/articles/ArticleDetails'

function ArticlePage ({ query }) {
  const { data, loading, error } = useGetArticle(query.article)

  if (error || (data && !data.article)) return <ErrorPage />
  if (loading) return <div>Loading...</div>

  return <Page title={data.article.title} >
    <ArticleDetails
      article={data.article}
    />

    <h2>Routing</h2>
    <p>Current query: <strong>{JSON.stringify(query)}</strong></p>

    <ul>
      <li><Link href='/'><a>Home</a></Link></li>
      <li><Link href='/articles/other-1'><a>Other route</a></Link></li>
    </ul>

    <p>Get the <a target='_blank' href='https://github.com/tomsoderlund/nextjs-pwa-graphql-sql-boilerplate'>source code for nextjs-pwa-graphql-sql-boilerplate</a></p>
  </Page>
}

export default withApollo(ArticlePage)
