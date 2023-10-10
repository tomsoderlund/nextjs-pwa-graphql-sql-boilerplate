/*
CRUD actions for Collections:

  import { useListCollections, useGetCollection, useCreateCollection, useUpdateCollection, useDeleteCollection } from 'graphql/collections/[collection]/hooks'
  const { data } = useListCollections()

  const createCollection = useCreateCollection()
  const { data } = await createCollection({
    variables: {
      input: {...}
    }
  })

Using 'Collection' type in your code:

  import { Collection } from 'graphql/__generated__/graphql'

*/

/*
import { useQuery, QueryResult, useMutation, MutationFunction } from '@apollo/client'

import {
  GetCollectionQuery,
  GetCollectionQueryVariables,
  ListCollectionsQuery,
  ListCollectionsQueryVariables,
  CreateCollectionMutation,
  CreateCollectionMutationVariables,
  UpdateCollectionMutation,
  UpdateCollectionMutationVariables,
  DeleteCollectionMutation,
  DeleteCollectionMutationVariables
} from 'graphql/__generated__/graphql'
import {
  LIST_COLLECTIONS,
  GET_COLLECTION,
  CREATE_COLLECTION,
  UPDATE_COLLECTION,
  DELETE_COLLECTION
} from './queries'

export const useListCollections = (): QueryResult<ListCollectionsQuery, ListCollectionsQueryVariables> => {
  return useQuery(LIST_COLLECTIONS)
}

export const useGetCollection = (id: number): QueryResult<GetCollectionQuery, GetCollectionQueryVariables> =>
  useQuery(GET_COLLECTION, { variables: { id } })

export const useCreateCollection = (): MutationFunction<CreateCollectionMutation, CreateCollectionMutationVariables> => {
  const [createCollectionMutation] = useMutation(
    CREATE_COLLECTION,
    {
      refetchQueries: [{ query: LIST_COLLECTIONS }]
    }
  )
  return createCollectionMutation
}

export const useUpdateCollection = (): MutationFunction<UpdateCollectionMutation, UpdateCollectionMutationVariables> => {
  const [updateCollectionMutation] = useMutation(UPDATE_COLLECTION)
  return updateCollectionMutation
}

export const useDeleteCollection = (): MutationFunction<DeleteCollectionMutation, DeleteCollectionMutationVariables> => {
  const [deleteCollectionMutation] = useMutation(
    DELETE_COLLECTION,
    {
      refetchQueries: [{ query: LIST_COLLECTIONS }]
    }
  )
  return deleteCollectionMutation
}
*/
