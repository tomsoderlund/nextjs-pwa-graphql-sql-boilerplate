import React from 'react'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import Router from 'next/router'

import client from '../graphql/apollo'
// import '../styles/globals.css'
// import AppThemeProvider from 'components/theme/AppThemeProvider'
import { googlePageview } from '../components/page/GoogleAnalytics'
import PageHead from '../components/page/PageHead'
import Notifications from '../components/page/Notifications'

Router.events.on('routeChangeComplete', path => googlePageview(path))

export default function App ({ Component, pageProps, router }: AppProps): React.ReactElement {
  // this.props (Server + Client): Component, err, pageProps, router
  return (
    <ApolloProvider client={client}>
      <PageHead {...pageProps} />
      <Component
        {...pageProps}
        {...router}
      />
      <Notifications />
    </ApolloProvider>
  )
}
