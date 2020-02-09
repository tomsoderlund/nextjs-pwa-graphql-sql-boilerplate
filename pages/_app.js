import React from 'react'
import App from 'next/app'
import Router from 'next/router'

import { googlePageview } from '../components/GoogleAnalytics'

Router.events.on('routeChangeComplete', path => googlePageview(path))

export default class MyApp extends App {
  // this.props (Server + Client): Component, err, pageProps, router
  render () {
    const { Component, pageProps, router } = this.props
    return (
      <Component {...pageProps} query={router.query} />
    )
  }
}
