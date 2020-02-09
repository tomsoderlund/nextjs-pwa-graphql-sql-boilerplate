import gql from 'graphql-tag'

const ArticleShortInfo = `
  fragment ArticleShortInfo on Article {
    id
    title
    content
    date_published
  }
`

export const GET_ARTICLES = gql`
  ${ArticleShortInfo}

  query GetArticles {
    articles (sort: "title asc") {
      ...ArticleShortInfo
    }
  }
`

// export const GET_ARTICLES_VARS = {
//   skip: 0,
//   first: 10
// }

export const GET_ARTICLE = gql`
  ${ArticleShortInfo}

  query GetArticle ($id: ID, $slugAndId: String) {
    article (id: $id, slugAndId: $slugAndId) {
      ...ArticleShortInfo
    }
  }
`

export const ADD_ARTICLE = gql`
  ${ArticleShortInfo}

  mutation AddArticle ($title: String!) {
    addArticle (title: $title) {
      ...ArticleShortInfo
    }
  }
`

export const UPDATE_ARTICLE = gql`
  ${ArticleShortInfo}

  mutation UpdateArticle ($id: ID!, $title: String) {
    updateArticle (id: $id, title: $title) {
      ...ArticleShortInfo
    }
  }
`

export const DELETE_ARTICLE = gql`
  mutation DeleteArticle ($id: ID!) {
    deleteArticle (id: $id) {
      id
    }
  }
`
