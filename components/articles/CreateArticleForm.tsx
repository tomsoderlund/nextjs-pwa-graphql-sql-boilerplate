import React from 'react'

import { ArticleInput } from 'graphql/__generated__/graphql'
import { useCreateArticle } from '../../graphql/collections/article/hooks'

interface CreateArticleFormProps {
  inputs: ArticleInput
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>
}

const useCreateArticleForm = (): CreateArticleFormProps => {
  const [inputs, setInputs] = React.useState<ArticleInput>({ title: '' })
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

const CreateArticleForm = (): React.ReactElement => {
  const { inputs, handleInputChange, handleSubmit } = useCreateArticleForm()
  return (
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
  )
}
export default CreateArticleForm
