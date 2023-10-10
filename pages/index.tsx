import React from 'react'
import Link from 'next/link'
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

      <h2>Routing</h2>
      <p>Current query: <strong>{JSON.stringify('query')}</strong></p>

      <ul>
        <li><Link legacyBehavior href='/'><a>Home</a></Link></li>
        <li><Link legacyBehavior href='/articles/other-1'><a>Other route</a></Link></li>
      </ul>

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
