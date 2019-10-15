import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

import { config } from '../config/config'

export default class MyDocument extends Document {
  render () {
    return (
      <html>
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          {config.googleAnalyticsId
            ? <>
              <script async src={`https://www.googletagmanager.com/gtag/js?id=${config.googleAnalyticsId}`} />
              <script
                dangerouslySetInnerHTML={{
                  __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${config.googleAnalyticsId}');`
                }}
              />
          </> : null}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
