import React from 'react'
import Router from 'next/router'
import App from 'next/app'
import { googlePageview } from '../components/GoogleAnalytics'
import { withApollo } from '../graphql/apollo'

Router.events.on('routeChangeComplete', path => googlePageview(path))

class MyApp extends App {
  render () {
    const { Component, pageProps, router } = this.props
    return (
      <Component {...pageProps} query={router.query} />
    )
  }
}

export default withApollo(MyApp)
