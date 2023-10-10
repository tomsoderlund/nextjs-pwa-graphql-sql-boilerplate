import React from 'react'
import Link from 'next/link'

import { useGetArticle } from '../../graphql/collections/article/hooks'

import Page from '../../components/Page'
import ArticleDetails from '../../components/articles/ArticleDetails'

function ArticlePage ({ query, asPath }) {
  const { data, loading, error } = useGetArticle(query.article)

  if ((error != null) || (data && !data.article)) throw error

  return (
    <Page
      title={loading ? 'Loading...' : data.article.title}
      path={asPath}
    >
      {loading
        ? <div>Loading...</div>
        : (
          <ArticleDetails
            article={data.article}
          />
          )}

      <h2>Routing</h2>
      <p>Current query: <strong>{JSON.stringify(query)}</strong></p>

      <ul>
        <li><Link legacyBehavior href='/'><a>Home</a></Link></li>
      </ul>
    </Page>
  )
}

export default ArticlePage
