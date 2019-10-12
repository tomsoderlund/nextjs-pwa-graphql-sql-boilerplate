import { useQuery, useMutation } from '@apollo/react-hooks'

import { GET_ARTICLES, ADD_ARTICLE, UPDATE_ARTICLE, DELETE_ARTICLE } from '../graphql/article/queries'

// Returns: { data, loading, error }
export const useGetArticles = () => useQuery(GET_ARTICLES)

export const useAddArticle = () => {
  const [addArticleMutation] = useMutation(ADD_ARTICLE, {
    update: (cache, { data: { addArticle } }) => {
      const { articles } = cache.readQuery({ query: GET_ARTICLES })
      cache.writeQuery({
        query: GET_ARTICLES,
        data: {
          articles: [...articles, addArticle]
        }
      })
    }
  })
  return addArticleMutation
}

export const useUpdateArticle = () => {
  const [updateArticleMutation] = useMutation(UPDATE_ARTICLE, {
    update: (cache, { data: { updateArticle } }) => {
      const { articles } = cache.readQuery({ query: GET_ARTICLES })
      cache.writeQuery({
        query: GET_ARTICLES,
        data: {
          articles: articles.map(articleItem => articleItem.id !== updateArticle.id ? articleItem : updateArticle)
        }
      })
    }
  })
  return updateArticleMutation
}

export const useDeleteArticle = (article) => {
  const [deleteArticleMutation] = useMutation(DELETE_ARTICLE, {
    variables: { id: article.id },
    update: (cache, { data: { deleteArticle } }) => {
      const { articles } = cache.readQuery({ query: GET_ARTICLES })
      cache.writeQuery({
        query: GET_ARTICLES,
        data: {
          articles: articles.filter(articleItem => articleItem.id !== deleteArticle.id)
        }
      })
    }
  })
  return deleteArticleMutation
}
