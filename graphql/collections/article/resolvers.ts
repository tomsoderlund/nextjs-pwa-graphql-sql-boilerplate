// For Postgraphile makeWrapResolversPlugin; see graphql/server/resolverExtensions.ts

import { ArticleInput } from 'graphql/__generated__/graphql'

export const createArticle = async (resolve: any, source: any, args: any, context: any, resolveInfo: any): Promise<void> => {
  // const articleInput: ArticleInput = args.input.article
  // ...do something before save to local database
  // Continue with the original resolver
  const result = await resolve(source, args, context, resolveInfo)
  return result
}
