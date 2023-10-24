import React from 'react'

import { Article } from 'graphql/__generated__/graphql'

const ArticleDetails = ({ article }: { article: Article }): React.ReactElement => {
  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </>
  )
}
export default ArticleDetails
