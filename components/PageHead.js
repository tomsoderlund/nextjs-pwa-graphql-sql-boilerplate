import Head from 'next/head'

import { config } from '../config/config'

const PageHead = ({ title, description = config.appDescription }) => {
  const pageTitle = title
    ? `${title} – ${config.appName}`
    : `${config.appName} – ${config.appTagline}`

  const iconUrl = '/favicon.png'
  const fontString = 'Source+Sans+Pro:300,400,700'

  return <Head>
    <title>{pageTitle}</title>
    <meta name='description' content={description} />
    <meta charSet='utf-8' />
    <meta httpEquiv='content-language' content='en' />
    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    <link rel='shortcut icon' type='image/x-icon' href={iconUrl} />
    <link rel='stylesheet' href={`https://fonts.googleapis.com/css?family=${fontString}&display=swap`} />
    <link rel='stylesheet' href='/app.css' />

    <meta property='og:description' content={description} />
    <meta property='og:locale' content='en_US' />
    <meta property='og:site_name' content={config.appName} />
    <meta property='og:title' content={pageTitle} />

    <meta name='twitter:card' content='summary' />
    <meta name='twitter:creator' content='@Weld_io' />
    <meta name='twitter:description' content={description} />
    <meta name='twitter:site' content='@Weld_io' />
    <meta name='twitter:title' content={pageTitle} />

    <link rel='apple-touch-icon' href={iconUrl} />
    {/*
      <link rel='canonical' href={websiteUrl} />
      <meta property='og:url' content={websiteUrl} />
      <meta name='twitter:url' content={websiteUrl} />

      <meta property='og:image' content={thumbnailUrl} />
      <meta name='twitter:image' content={thumbnailUrl} />

      <link rel='apple-touch-startup-image' href='https://www.weld.io/images/weld-startup-animation.9de803d6.gif' />
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-status-bar-style' content='black-translucent' />
      <meta name='apple-mobile-web-app-title' content={config.appName} />
    */}

    {config.googleSiteVerification ? <meta name='google-site-verification' content={config.googleSiteVerification} /> : null}

  </Head>
}
export default PageHead
