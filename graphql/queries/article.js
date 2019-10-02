import gql from 'graphql-tag'

const ArticleShortInfo = `
  fragment ArticleShortInfo on Article {
    id
    title
    content
    link
    date_published
  }
`

export const GET_NEWSITEMS = gql`
  ${ArticleShortInfo}
  {
    articles (sort: "title asc") {
      ...ArticleShortInfo
    }
  }
`

// export const GET_NEWSITEMS_VARS = {
//   skip: 0,
//   first: 10
// }

export const GET_NEWSITEM_ITEM = articleSlug => {
  const articleId = articleSlug.split('-').pop()
  return gql`
    ${ArticleShortInfo}

    {
      article (id: "${articleId}") {
        ...ArticleShortInfo
        source_id
      }
    }
  `
}

export const ADD_NEWSITEM = gql`
  ${ArticleShortInfo}

  mutation AddArticle ($title: String!) {
    addArticle (title: $title) {
      ...ArticleShortInfo
    }
  }
`

export const DELETE_NEWSITEM = gql`
  mutation DeleteArticle ($id: ID!) {
    deleteArticle (id: $id) {
      id
    }
  }
`

export const UPDATE_NEWSITEM = gql`
  ${ArticleShortInfo}

  mutation UpdateArticle ($id: ID!, $title: String) {
    updateArticle (id: $id, title: $title) {
      ...ArticleShortInfo
    }
  }
`
