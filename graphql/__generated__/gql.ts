/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  fragment ArticleShortInfo on Article {\n    id\n  }\n": types.ArticleShortInfoFragmentDoc,
    "\n  query ListArticles {\n    allArticlesList (orderBy: TITLE_ASC) {\n      id\n      ...ArticleShortInfo\n    }\n  }\n": types.ListArticlesDocument,
    "\n  query GetArticle ($id: Int!) {\n    articleById(id: $id) {\n      id\n      ...ArticleShortInfo\n    }\n  }\n": types.GetArticleDocument,
    "\n  mutation CreateArticle ($input: CreateArticleInput!) {\n    createArticle(input: $input) {\n      article {\n        id\n        ...ArticleShortInfo\n      }\n    }\n  }\n": types.CreateArticleDocument,
    "\n  mutation UpdateArticle ($id: Int!, $articlePatch: ArticlePatch!) {\n    updateArticleById(input: {id: $id, articlePatch: $articlePatch}) {\n      article {\n        ...ArticleShortInfo\n      }\n    }\n  }\n": types.UpdateArticleDocument,
    "\n  mutation DeleteArticle ($id: Int!) {\n    deleteArticleById(input: {id: $id}) {\n      article {\n        ...ArticleShortInfo\n      }\n    }\n  }\n": types.DeleteArticleDocument,
    "\n  fragment UserShortInfo on User {\n    id\n    firebaseUid\n  }\n": types.UserShortInfoFragmentDoc,
    "\n  query GetUser ($firebaseUid: String!) {\n    userByFirebaseUid(firebaseUid: $firebaseUid) {\n      id\n    }\n  }\n": types.GetUserDocument,
    "\n  mutation CreateUser ($input: CreateUserInput!) {\n    createUser(input: $input) {\n      user {\n        ...UserShortInfo\n      }\n    }\n  }\n": types.CreateUserDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment ArticleShortInfo on Article {\n    id\n  }\n"): (typeof documents)["\n  fragment ArticleShortInfo on Article {\n    id\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query ListArticles {\n    allArticlesList (orderBy: TITLE_ASC) {\n      id\n      ...ArticleShortInfo\n    }\n  }\n"): (typeof documents)["\n  query ListArticles {\n    allArticlesList (orderBy: TITLE_ASC) {\n      id\n      ...ArticleShortInfo\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetArticle ($id: Int!) {\n    articleById(id: $id) {\n      id\n      ...ArticleShortInfo\n    }\n  }\n"): (typeof documents)["\n  query GetArticle ($id: Int!) {\n    articleById(id: $id) {\n      id\n      ...ArticleShortInfo\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateArticle ($input: CreateArticleInput!) {\n    createArticle(input: $input) {\n      article {\n        id\n        ...ArticleShortInfo\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateArticle ($input: CreateArticleInput!) {\n    createArticle(input: $input) {\n      article {\n        id\n        ...ArticleShortInfo\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UpdateArticle ($id: Int!, $articlePatch: ArticlePatch!) {\n    updateArticleById(input: {id: $id, articlePatch: $articlePatch}) {\n      article {\n        ...ArticleShortInfo\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateArticle ($id: Int!, $articlePatch: ArticlePatch!) {\n    updateArticleById(input: {id: $id, articlePatch: $articlePatch}) {\n      article {\n        ...ArticleShortInfo\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DeleteArticle ($id: Int!) {\n    deleteArticleById(input: {id: $id}) {\n      article {\n        ...ArticleShortInfo\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteArticle ($id: Int!) {\n    deleteArticleById(input: {id: $id}) {\n      article {\n        ...ArticleShortInfo\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment UserShortInfo on User {\n    id\n    firebaseUid\n  }\n"): (typeof documents)["\n  fragment UserShortInfo on User {\n    id\n    firebaseUid\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetUser ($firebaseUid: String!) {\n    userByFirebaseUid(firebaseUid: $firebaseUid) {\n      id\n    }\n  }\n"): (typeof documents)["\n  query GetUser ($firebaseUid: String!) {\n    userByFirebaseUid(firebaseUid: $firebaseUid) {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateUser ($input: CreateUserInput!) {\n    createUser(input: $input) {\n      user {\n        ...UserShortInfo\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateUser ($input: CreateUserInput!) {\n    createUser(input: $input) {\n      user {\n        ...UserShortInfo\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;