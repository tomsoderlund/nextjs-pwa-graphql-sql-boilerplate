import React from 'react'

import { useListArticles, useCreateArticle } from '../../graphql/collections/article/hooks'
import ArticleListItem from './ArticleListItem'

const useCreateArticleForm = () => {
  const [inputs, setInputs] = React.useState({ title: '' })
  const createArticle = () => useCreateArticle()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    if (event) event.preventDefault()
    if (!inputs.title) {
      window.alert('No title provided')
      return
    }
    await createArticle({ variables: inputs })
    // Clear input form when done
    setInputs({ title: '' })
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist()
    setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }))
  }

  return { inputs, handleInputChange, handleSubmit }
}

const ArticleList = () => {
  const { inputs, handleInputChange, handleSubmit } = useCreateArticleForm()

  const { data, loading, error } = useListArticles()
  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  return (
    <>
      {data.articles && data.articles.map(article => (
        <ArticleListItem
          key={article.id}
          article={article}
        />
      ))}

      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Enter an article title'
          name='title'
          required
          value={inputs.title}
          onChange={handleInputChange}
        />
        <button type='submit'>Add article</button>
        <style jsx>{`
          form {
            margin-top: 1em
          }
        `}
        </style>
      </form>
    </>
  )
}
export default ArticleList
