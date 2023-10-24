import { gql } from 'graphql/__generated__'

// ----- Fragments -----

gql(`
  fragment UserShortInfo on User {
    id
    firebaseUid
  }
`)

// ----- Queries -----

export const GET_USER = gql(`
  query GetUser ($firebaseUid: String!) {
    userByFirebaseUid(firebaseUid: $firebaseUid) {
      id
    }
  }
`)

// ----- Mutations -----

export const CREATE_USER = gql(`
  mutation CreateUser ($input: CreateUserInput!) {
    createUser(input: $input) {
      user {
        ...UserShortInfo
      }
    }
  }
`)
