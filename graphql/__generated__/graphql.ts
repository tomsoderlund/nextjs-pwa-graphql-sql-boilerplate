/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /**
   * A point in time as described by the [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. May or may not include a timezone.
   */
  Datetime: { input: any; output: any; }
};

export type Article = Node & {
  __typename?: 'Article';
  content?: Maybe<Scalars['String']['output']>;
  dateCreated?: Maybe<Scalars['Datetime']['output']>;
  id: Scalars['Int']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

/** A condition to be used against `Article` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type ArticleCondition = {
  /** Checks for equality with the object’s `content` field. */
  content?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `dateCreated` field. */
  dateCreated?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `title` field. */
  title?: InputMaybe<Scalars['String']['input']>;
};

/** An input for mutations affecting `Article` */
export type ArticleInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Represents an update to a `Article`. Fields that are set will be updated. */
export type ArticlePatch = {
  content?: InputMaybe<Scalars['String']['input']>;
  dateCreated?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Methods to use when ordering `Article`. */
export enum ArticlesOrderBy {
  ContentAsc = 'CONTENT_ASC',
  ContentDesc = 'CONTENT_DESC',
  DateCreatedAsc = 'DATE_CREATED_ASC',
  DateCreatedDesc = 'DATE_CREATED_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC'
}

/** All input for the create `Article` mutation. */
export type CreateArticleInput = {
  /** The `Article` to be created by this mutation. */
  article: ArticleInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** The output of our create `Article` mutation. */
export type CreateArticlePayload = {
  __typename?: 'CreateArticlePayload';
  /** The `Article` that was created by this mutation. */
  article?: Maybe<Article>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `deleteArticleById` mutation. */
export type DeleteArticleByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
};

/** All input for the `deleteArticle` mutation. */
export type DeleteArticleInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Article` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** The output of our delete `Article` mutation. */
export type DeleteArticlePayload = {
  __typename?: 'DeleteArticlePayload';
  /** The `Article` that was deleted by this mutation. */
  article?: Maybe<Article>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedArticleId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a single `Article`. */
  createArticle?: Maybe<CreateArticlePayload>;
  /** Deletes a single `Article` using its globally unique id. */
  deleteArticle?: Maybe<DeleteArticlePayload>;
  /** Deletes a single `Article` using a unique key. */
  deleteArticleById?: Maybe<DeleteArticlePayload>;
  /** Updates a single `Article` using its globally unique id and a patch. */
  updateArticle?: Maybe<UpdateArticlePayload>;
  /** Updates a single `Article` using a unique key and a patch. */
  updateArticleById?: Maybe<UpdateArticlePayload>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateArticleArgs = {
  input: CreateArticleInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteArticleArgs = {
  input: DeleteArticleInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteArticleByIdArgs = {
  input: DeleteArticleByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateArticleArgs = {
  input: UpdateArticleInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateArticleByIdArgs = {
  input: UpdateArticleByIdInput;
};

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
};

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  __typename?: 'Query';
  /** Reads a set of `Article`. */
  allArticlesList?: Maybe<Array<Article>>;
  /** Reads a single `Article` using its globally unique `ID`. */
  article?: Maybe<Article>;
  articleById?: Maybe<Article>;
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID']['output'];
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllArticlesListArgs = {
  condition?: InputMaybe<ArticleCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ArticlesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryArticleArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryArticleByIdArgs = {
  id: Scalars['Int']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID']['input'];
};

/** All input for the `updateArticleById` mutation. */
export type UpdateArticleByIdInput = {
  /** An object where the defined keys will be set on the `Article` being updated. */
  articlePatch: ArticlePatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
};

/** All input for the `updateArticle` mutation. */
export type UpdateArticleInput = {
  /** An object where the defined keys will be set on the `Article` being updated. */
  articlePatch: ArticlePatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Article` to be updated. */
  nodeId: Scalars['ID']['input'];
};

/** The output of our update `Article` mutation. */
export type UpdateArticlePayload = {
  __typename?: 'UpdateArticlePayload';
  /** The `Article` that was updated by this mutation. */
  article?: Maybe<Article>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

export type ArticleShortInfoFragment = { __typename?: 'Article', id: number } & { ' $fragmentName'?: 'ArticleShortInfoFragment' };

export type ListArticlesQueryVariables = Exact<{ [key: string]: never; }>;


export type ListArticlesQuery = { __typename?: 'Query', allArticlesList?: Array<(
    { __typename?: 'Article', id: number }
    & { ' $fragmentRefs'?: { 'ArticleShortInfoFragment': ArticleShortInfoFragment } }
  )> | null };

export type GetArticleQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetArticleQuery = { __typename?: 'Query', articleById?: (
    { __typename?: 'Article', id: number }
    & { ' $fragmentRefs'?: { 'ArticleShortInfoFragment': ArticleShortInfoFragment } }
  ) | null };

export type CreateArticleMutationVariables = Exact<{
  input: CreateArticleInput;
}>;


export type CreateArticleMutation = { __typename?: 'Mutation', createArticle?: { __typename?: 'CreateArticlePayload', article?: (
      { __typename?: 'Article', id: number }
      & { ' $fragmentRefs'?: { 'ArticleShortInfoFragment': ArticleShortInfoFragment } }
    ) | null } | null };

export type UpdateArticleMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  articlePatch: ArticlePatch;
}>;


export type UpdateArticleMutation = { __typename?: 'Mutation', updateArticleById?: { __typename?: 'UpdateArticlePayload', article?: (
      { __typename?: 'Article' }
      & { ' $fragmentRefs'?: { 'ArticleShortInfoFragment': ArticleShortInfoFragment } }
    ) | null } | null };

export type DeleteArticleMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteArticleMutation = { __typename?: 'Mutation', deleteArticleById?: { __typename?: 'DeleteArticlePayload', article?: (
      { __typename?: 'Article' }
      & { ' $fragmentRefs'?: { 'ArticleShortInfoFragment': ArticleShortInfoFragment } }
    ) | null } | null };

export const ArticleShortInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArticleShortInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Article"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]} as unknown as DocumentNode<ArticleShortInfoFragment, unknown>;
export const ListArticlesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListArticles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allArticlesList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"TITLE_ASC"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArticleShortInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArticleShortInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Article"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]} as unknown as DocumentNode<ListArticlesQuery, ListArticlesQueryVariables>;
export const GetArticleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetArticle"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"articleById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArticleShortInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArticleShortInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Article"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]} as unknown as DocumentNode<GetArticleQuery, GetArticleQueryVariables>;
export const CreateArticleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateArticle"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateArticleInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createArticle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"article"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArticleShortInfo"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArticleShortInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Article"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]} as unknown as DocumentNode<CreateArticleMutation, CreateArticleMutationVariables>;
export const UpdateArticleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateArticle"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"articlePatch"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ArticlePatch"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateArticleById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"articlePatch"},"value":{"kind":"Variable","name":{"kind":"Name","value":"articlePatch"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"article"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArticleShortInfo"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArticleShortInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Article"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]} as unknown as DocumentNode<UpdateArticleMutation, UpdateArticleMutationVariables>;
export const DeleteArticleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteArticle"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteArticleById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"article"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArticleShortInfo"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArticleShortInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Article"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]} as unknown as DocumentNode<DeleteArticleMutation, DeleteArticleMutationVariables>;