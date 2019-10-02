import React from 'react'

import { config } from '../config/config'

import PageHead from '../components/PageHead'
import ArticleList from '../components/ArticleList'

function IndexPage ({ query }) {
  return <main>
    <PageHead title='Start page' />

    <h1>{config.appName}</h1>

    <ArticleList />

  </main>
}

export default IndexPage
