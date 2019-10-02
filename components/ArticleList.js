import React from 'react'

import { useGetArticles, useAddArticle } from '../hooks/useArticle'
import ArticleItem from './ArticleItem'

const useAddArticleForm = () => {
  const [inputs, setInputs] = React.useState({})
  const addArticle = useAddArticle()

  const handleSubmit = async (event) => {
    if (event) {
      event.preventDefault()
    }
    await addArticle({ variables: inputs })
  }

  const handleInputChange = (event) => {
    event.persist()
    setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }))
  }

  return { inputs, handleInputChange, handleSubmit }
}

const ArticleList = () => {
  const { inputs, handleInputChange, handleSubmit } = useAddArticleForm()

  const { data, loading, error } = useGetArticles()
  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  return (
    <div>
      {data.articles.map(article => <ArticleItem key={article.id} article={article} />)}
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Enter an article title'
          name='title'
          value={inputs.title}
          onChange={handleInputChange}
        />
        <button type='submit'>Add article</button>
        <style jsx>{`
          form {
            margin-top: 1em
          }
        `}</style>
      </form>
    </div>
  )
}
export default ArticleList
