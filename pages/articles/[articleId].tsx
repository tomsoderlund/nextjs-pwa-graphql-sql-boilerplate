import React from 'react'
import Link from 'next/link'
import type { GetStaticPropsContext, GetStaticPropsResult, GetStaticPathsContext, GetStaticPathsResult } from 'next'
import { ParsedUrlQuery } from 'querystring'

import { Article } from 'graphql/__generated__/graphql'
import { useGetArticle } from '../../graphql/collections/article/hooks'
import ArticleDetails from '../../components/articles/ArticleDetails'

interface ArticlePageParams extends ParsedUrlQuery {
  articleId: string
}

interface ArticlePageProps {
  articleId: number | null
  title: string
}

const ArticlePage = ({ articleId }: ArticlePageProps): React.ReactElement => {
  console.log('articleId:', articleId)
  const { data, loading, error } = useGetArticle(articleId ?? 0)
  if (error != null || (data !== undefined && (data.articleById === undefined || data.articleById === null))) {
    throw new Error(`Error: ${error?.message as string}`)
  }

  return (
    <>
      {loading
        ? (
          <div>Loading...</div>
          )
        : (
          <ArticleDetails article={data?.articleById as Article} />
          )}

      <ul>
        <li>
          <Link legacyBehavior href='/'>
            <a>Home</a>
          </Link>
        </li>
      </ul>
    </>
  )
}

export default ArticlePage

export async function getStaticProps (context: GetStaticPropsContext<ArticlePageParams>): Promise<GetStaticPropsResult<ArticlePageProps>> {
  const articleId = context.params?.articleId ?? null
  return {
    props: {
      title: `Article ${articleId as string}`,
      articleId: articleId !== null ? parseInt(articleId) : null
    }
  }
}

export async function getStaticPaths (context: GetStaticPathsContext): Promise<GetStaticPathsResult<ArticlePageParams>> {
  // const locales = context.locales ?? ['en']
  return {
    paths: [],
    fallback: true // false → 404, true: Next.js tries to generate page
  }
}
