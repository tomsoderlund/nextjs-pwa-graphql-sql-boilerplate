import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

import { googleAnalyticsId } from '../config/config'

export default class NicheNewsDocument extends Document {
  render () {
    return (
      <html>
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          {googleAnalyticsId
            ? <>
              <script async src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`} />
              <script
                dangerouslySetInnerHTML={{
                  __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${googleAnalyticsId}');`
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
