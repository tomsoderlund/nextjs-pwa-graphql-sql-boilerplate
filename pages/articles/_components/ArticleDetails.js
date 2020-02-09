import React from 'react'

const ArticleDetails = ({ article }) => {
  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  )
}
export default ArticleDetails
