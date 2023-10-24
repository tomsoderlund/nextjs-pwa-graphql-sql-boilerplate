import React from 'react'

import { Article } from 'graphql/__generated__/graphql'
import { useListArticles, useCreateArticle } from '../../graphql/collections/article/hooks'
import ArticleListItem from './ArticleListItem'

interface CreateArticleFormProps {
  inputs: Partial<Article>
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>
}

const useCreateArticleForm = (): CreateArticleFormProps => {
  const [inputs, setInputs] = React.useState({ title: '' })
  const createArticle = useCreateArticle()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event?.preventDefault()
    if (inputs.title === '') {
      window.alert('No title provided')
      return
    }
    await createArticle({ variables: { input: { article: inputs } } })
    // Clear input form when done
    setInputs({ title: '' })
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.persist()
    setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }))
  }

  return { inputs, handleInputChange, handleSubmit }
}

const ArticleList = (): React.ReactElement | string => {
  const { inputs, handleInputChange, handleSubmit } = useCreateArticleForm()

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

      <form onSubmit={(event) => { void handleSubmit(event) }}>
        <input
          type='text'
          placeholder='Enter an article title'
          name='title'
          required
          value={inputs.title as string}
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
