import { useQuery, useMutation } from 'react-apollo-hooks'

import { GET_NEWSITEMS, ADD_NEWSITEM, UPDATE_NEWSITEM, DELETE_NEWSITEM } from '../graphql/queries/article'

// Returns: { data, loading, error }
export const useGetArticles = () => useQuery(GET_NEWSITEMS)

export const useAddArticle = () => {
  const addArticleMutation = useMutation(ADD_NEWSITEM, {
    update: (cache, { data: { addArticle } }) => {
      const { articles } = cache.readQuery({ query: GET_NEWSITEMS })
      cache.writeQuery({
        query: GET_NEWSITEMS,
        data: {
          articles: [...articles, addArticle]
        }
      })
    }
  })
  return addArticleMutation
}

export const useUpdateArticle = () => {
  const updateArticleMutation = useMutation(UPDATE_NEWSITEM, {
    update: (cache, { data: { updateArticle } }) => {
      const { articles } = cache.readQuery({ query: GET_NEWSITEMS })
      cache.writeQuery({
        query: GET_NEWSITEMS,
        data: {
          articles: articles.map(articleItem => articleItem.id !== updateArticle.id ? articleItem : updateArticle)
        }
      })
    }
  })
  return updateArticleMutation
}

export const useDeleteArticle = (article) => {
  const deleteArticleMutation = useMutation(DELETE_NEWSITEM, {
    variables: { id: article.id },
    update: (cache, { data: { deleteArticle } }) => {
      const { articles } = cache.readQuery({ query: GET_NEWSITEMS })
      cache.writeQuery({
        query: GET_NEWSITEMS,
        data: {
          articles: articles.filter(articleItem => articleItem.id !== deleteArticle.id)
        }
      })
    }
  })
  return deleteArticleMutation
}
