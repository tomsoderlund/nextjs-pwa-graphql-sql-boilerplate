import { gql } from 'graphql/__generated__'

// ----- Fragments -----

gql(`
  fragment ArticleShortInfo on Article {
    id
    title
    dateCreated
  }
`)

// ----- Queries -----

export const LIST_ARTICLES = gql(`
  query ListArticles {
    allArticlesList (orderBy: DATE_CREATED_DESC) {
      id
      ...ArticleShortInfo
    }
  }
`)

// export const LIST_ARTICLES_VARS = {
//   skip: 0,
//   first: 10
// }

export const GET_ARTICLE = gql(`
  query GetArticle ($id: Int!) {
    articleById(id: $id) {
      id
      ...ArticleShortInfo
    }
  }
`)

// ----- Mutations -----

export const CREATE_ARTICLE = gql(`
  mutation CreateArticle ($input: CreateArticleInput!) {
    createArticle(input: $input) {
      article {
        id
        ...ArticleShortInfo
      }
    }
  }
`)

export const UPDATE_ARTICLE = gql(`
  mutation UpdateArticle ($id: Int!, $articlePatch: ArticlePatch!) {
    updateArticleById(input: {id: $id, articlePatch: $articlePatch}) {
      article {
        ...ArticleShortInfo
      }
    }
  }
`)

export const DELETE_ARTICLE = gql(`
  mutation DeleteArticle ($id: Int!) {
    deleteArticleById(input: {id: $id}) {
      article {
        ...ArticleShortInfo
      }
    }
  }
`)
