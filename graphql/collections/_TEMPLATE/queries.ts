/*
import { gql } from 'graphql/__generated__'

// ----- Fragments -----

gql(`
  fragment CollectionShortInfo on Collection {
    id
  }
`)

// ----- Queries -----

export const LIST_COLLECTIONS = gql(`
  query ListCollections {
    allCollectionsList (orderBy: NAME_ASC) {
      id
      ...CollectionShortInfo
    }
  }
`)

// export const LIST_COLLECTIONS_VARS = {
//   skip: 0,
//   first: 10
// }

export const GET_COLLECTION = gql(`
  query GetCollection ($id: Int!) {
    collectionById(id: $id) {
      id
      ...CollectionShortInfo
    }
  }
`)

// ----- Mutations -----

export const CREATE_COLLECTION = gql(`
  mutation CreateCollection ($input: CreateCollectionInput!) {
    createCollection(input: $input) {
      collection {
        id
        ...CollectionShortInfo
      }
    }
  }
`)

export const UPDATE_COLLECTION = gql(`
  mutation UpdateCollection ($id: Int!, $collectionPatch: CollectionPatch!) {
    updateCollectionById(input: {id: $id, collectionPatch: $collectionPatch}) {
      collection {
        ...CollectionShortInfo
      }
    }
  }
`)

export const DELETE_COLLECTION = gql(`
  mutation DeleteCollection ($id: Int!) {
    deleteCollectionById(input: {id: $id}) {
      collection {
        ...CollectionShortInfo
      }
    }
  }
`)

*/
