import React from 'react'
import type { GetStaticPropsResult } from 'next'

import { config } from '../config/config'

import ArticleList from '../components/articles/ArticleList'

interface StartPageProps {
  title: string
}

function StartPage ({ title }: StartPageProps): React.ReactElement {
  // Note: 'query' contains both /:params and ?query=value from url
  return (
    <>
      <h1>{config.appName}: {title}</h1>
      <p><em>{config.appTagline}</em></p>

      <ArticleList />

      <h2>GraphQL</h2>
      <p>Try the <a target='_blank' rel='noopener noreferrer' href='/api/graphiql'>GraphQL Explorer</a></p>

      <h2>Source code</h2>
      <p>Get the <a target='_blank' rel='noopener noreferrer' href='https://github.com/tomsoderlund/nextjs-pwa-graphql-sql-boilerplate'>source code for nextjs-pwa-graphql-sql-boilerplate</a></p>
    </>
  )
}

export default StartPage

export const getStaticProps = async (): Promise<GetStaticPropsResult<{}>> => ({
  props: {
    title: 'Welcome'
  }
})
