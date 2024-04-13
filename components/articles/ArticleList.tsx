import React from 'react'

import { useListArticles } from '../../graphql/collections/article/hooks'
import ArticleListItem from './ArticleListItem'

const ArticleList = (): React.ReactElement | string => {
  const { data, loading, error } = useListArticles()
  if (loading) return 'Loading...'
  if (error != null) return `Error! ${error.message}`

  return (
    <>
      {data?.allArticlesList?.map((article) => (
        <ArticleListItem
          key={article.id}
          article={article}
        />
      ))}
    </>
  )
}
export default ArticleList
