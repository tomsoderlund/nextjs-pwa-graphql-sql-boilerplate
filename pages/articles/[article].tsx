import React from 'react'
import Link from 'next/link'
import { useGetArticle } from '../../graphql/collections/article/hooks'

import ArticleDetails from '../../components/articles/ArticleDetails'

interface ArticlePageProps {
  query: {
    article: string
  }
  asPath: string
}

const ArticlePage: React.FC<ArticlePageProps> = ({ query, asPath }) => {
  const { data, loading, error } = useGetArticle(parseInt(query.article))

  if (error != null || (data && !data.article)) throw error

  return (
    <>
      {loading
        ? (
          <div>Loading...</div>
          )
        : (
          <ArticleDetails article={data.article} />
          )}

      <h2>Routing</h2>
      <p>Current query: <strong>{JSON.stringify(query)}</strong></p>

      <ul>
        <li>
          <Link legacyBehavior href='/'>
            <a>Home</a>
          </Link>
        </li>
      </ul>
    </>
  )
}

export default ArticlePage
