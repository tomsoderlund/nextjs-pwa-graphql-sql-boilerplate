/*
CRUD actions for Articles:

  import { useListArticles, useGetArticle, useCreateArticle, useUpdateArticle, useDeleteArticle } from 'graphql/collections/article/hooks'
  const { data } = useListArticles()

  const createArticle = useCreateArticle()
  const { data } = await createArticle({
    variables: {
      input: {...}
    }
  })

Using 'Article' type in your code:

  import { Article } from 'graphql/__generated__/graphql'

*/

import { useQuery, QueryResult, useMutation, MutationFunction } from '@apollo/client'

import toSlug from 'lib/toSlug'
import {
  Article,
  GetArticleQuery,
  GetArticleQueryVariables,
  ListArticlesQuery,
  ListArticlesQueryVariables,
  CreateArticleMutation,
  CreateArticleMutationVariables,
  UpdateArticleMutation,
  UpdateArticleMutationVariables,
  DeleteArticleMutation,
  DeleteArticleMutationVariables
} from 'graphql/__generated__/graphql'
import {
  LIST_ARTICLES,
  GET_ARTICLE,
  CREATE_ARTICLE,
  UPDATE_ARTICLE,
  DELETE_ARTICLE
} from './queries'

export const articlePath = (article: Article): string => `/articles/${toSlug(article.title as string)}-${article.id}`

export const useListArticles = (): QueryResult<ListArticlesQuery, ListArticlesQueryVariables> => {
  return useQuery(LIST_ARTICLES)
}

export const useGetArticle = (id: number): QueryResult<GetArticleQuery, GetArticleQueryVariables> =>
  useQuery(GET_ARTICLE, { variables: { id } })

export const useCreateArticle = (): MutationFunction<CreateArticleMutation, CreateArticleMutationVariables> => {
  const [createArticleMutation] = useMutation(
    CREATE_ARTICLE,
    {
      refetchQueries: [{ query: LIST_ARTICLES }]
    }
  )
  return createArticleMutation
}

export const useUpdateArticle = (): MutationFunction<UpdateArticleMutation, UpdateArticleMutationVariables> => {
  const [updateArticleMutation] = useMutation(UPDATE_ARTICLE)
  return updateArticleMutation
}

export const useDeleteArticle = (): MutationFunction<DeleteArticleMutation, DeleteArticleMutationVariables> => {
  const [deleteArticleMutation] = useMutation(
    DELETE_ARTICLE,
    {
      refetchQueries: [{ query: LIST_ARTICLES }]
    }
  )
  return deleteArticleMutation
}
