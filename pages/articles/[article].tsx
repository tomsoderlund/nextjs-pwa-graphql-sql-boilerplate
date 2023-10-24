import React from 'react'
import Link from 'next/link'

import { Article } from 'graphql/__generated__/graphql'
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
  if (error != null || (data !== undefined && (data.articleById === undefined || data.articleById === null))) {
    throw new Error(`Error: ${error?.message as string}`)
  }

  return (
    <>
      {loading
        ? (
          <div>Loading...</div>
          )
        : (
          <ArticleDetails article={data?.articleById as Article} />
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
