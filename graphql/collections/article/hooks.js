// Client-side
import { useQuery, useMutation } from '@apollo/react-hooks'

import {
  GET_ARTICLES,
  GET_ARTICLE,
  ADD_ARTICLE,
  UPDATE_ARTICLE,
  DELETE_ARTICLE
} from './queries'

// { data, loading, error } = useGetArticles()
export const useGetArticles = () => useQuery(GET_ARTICLES)

// const { data, loading, error } = useGetArticle('slug-1')
export const useGetArticle = (slugAndId) => useQuery(GET_ARTICLE, { variables: { slugAndId } })

// addArticle({ variables })
export const useAddArticle = () => {
  const [addArticleMutation] = useMutation(ADD_ARTICLE, {
    update: (cache, { data: { addArticle } }) => {
      const { variables } = cache.watches.values().next().value
      const { articles } = cache.readQuery({ query: GET_ARTICLES, variables })
      cache.writeQuery({
        query: GET_ARTICLES,
        variables,
        data: {
          articles: [...articles, addArticle]
        }
      })
    }
  })
  return addArticleMutation
}

// updateArticle({ variables })
export const useUpdateArticle = () => {
  const [updateArticleMutation] = useMutation(UPDATE_ARTICLE, {
    update: (cache, { data: { updateArticle } }) => {
      const { variables } = cache.watches.values().next().value
      const { articles } = cache.readQuery({ query: GET_ARTICLES, variables })
      cache.writeQuery({
        query: GET_ARTICLES,
        variables,
        data: {
          articles: articles.map(articleItem => articleItem.id !== updateArticle.id ? articleItem : updateArticle)
        }
      })
    }
  })
  return updateArticleMutation
}

// deleteArticle({ variables })
export const useDeleteArticle = () => {
  const [deleteArticleMutation] = useMutation(DELETE_ARTICLE, {
    update: (cache, { data: { deleteArticle } }) => {
      const { variables } = cache.watches.values().next().value
      const { articles } = cache.readQuery({ query: GET_ARTICLES, variables })
      cache.writeQuery({
        query: GET_ARTICLES,
        variables,
        data: {
          articles: articles.filter(articleItem => articleItem.id !== deleteArticle.id)
        }
      })
    }
  })
  return deleteArticleMutation
}
