import React, { Fragment } from 'react'

import { config } from '../config/config'
import { withApollo } from '../graphql/apollo'

import PageHead from '../components/PageHead'
import Header from '../components/Header'

function Page ({ title, children }) {
  return <Fragment>
    <PageHead title={title} />
    <Header title={config.appName} />

    <main>
      <section className='content'>
        {children}
      </section>
    </main>

  </Fragment>
}

export default withApollo(Page)
