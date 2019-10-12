import React from 'react'
import Router from 'next/router'
import App, { Container } from 'next/app'
import { googlePageview } from '../components/GoogleAnalytics'
import { withApollo } from '../graphql/apollo'

Router.events.on('routeChangeComplete', path => googlePageview(path))

class MyApp extends App {
  render () {
    const { Component, pageProps, router } = this.props
    return (
      <Container>
        <Component {...pageProps} query={router.query} />
      </Container>
    )
  }
}

export default withApollo(MyApp)
