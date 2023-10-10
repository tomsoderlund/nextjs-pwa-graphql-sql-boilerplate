import React from 'react'
import type { AppProps } from 'next/app'
import Router from 'next/router'

import { googlePageview } from '../components/GoogleAnalytics'

Router.events.on('routeChangeComplete', path => googlePageview(path))

export default function App ({ Component, pageProps, router }: AppProps): React.ReactElement {
  // this.props (Server + Client): Component, err, pageProps, router
  return (
    <Component
      {...pageProps}
      {...router}
    />
  )
}
