import React, { Fragment } from 'react'

import { config } from '../config/config'

import PageHead from '../components/PageHead'
import Header from '../components/Header'

function Page ({ title, description, children }) {
  return <Fragment>
    <PageHead
      title={title}
      description={description}
    />

    <Header title={config.appName} />

    <main>
      <section className='content'>
        {children}
      </section>
    </main>

  </Fragment>
}

export default Page
