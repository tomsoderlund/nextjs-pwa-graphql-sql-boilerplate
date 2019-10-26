import Head from 'next/head'

import manifest from '../public/manifest.json'
import { config } from '../config/config'

const PageHead = ({ title, description = config.appDescription }) => {
  const pageTitle = title
    ? `${title} – ${config.appName}`
    : `${config.appName} – ${config.appTagline}`

  const iconUrl = '/icon.png'
  const fontString = 'Source+Sans+Pro:300,400,700'
  const locale = 'en_US'

  return <Head>
    <title>{pageTitle}</title>
    <meta name='description' content={description} />

    <meta charSet='utf-8' />
    <meta httpEquiv='content-language' content={locale.split('_')[0]} />
    <meta name='viewport' content='initial-scale=1.0, width=device-width' />

    <link rel='manifest' href='/manifest.json' />

    <link rel='stylesheet' href={`https://fonts.googleapis.com/css?family=${fontString}&display=swap`} />
    <link rel='stylesheet' href='/app.css' />

    <link rel='shortcut icon' type='image/x-icon' href={iconUrl} />

    <meta property='og:site_name' content={config.appName} />
    <meta property='og:title' content={pageTitle} />
    <meta property='og:description' content={description} />
    <meta property='og:locale' content={locale} />

    <link rel='apple-touch-icon' href={iconUrl} />
    {(manifest.display === 'standalone') ? <meta name='apple-mobile-web-app-capable' content='yes' /> : null}
    <meta name='apple-mobile-web-app-status-bar-style' content='black-translucent' />
    <meta name='apple-mobile-web-app-title' content={config.appName} />

    {/*
      <link rel='apple-touch-startup-image' href='' />

      <meta name='twitter:card' content='summary' />
      <meta name='twitter:creator' content='@TwitterName' />
      <meta name='twitter:site' content='@TwitterName' />

      <link rel='canonical' href={websiteUrl} />
      <meta property='og:url' content={websiteUrl} />

      <meta property='og:image' content={thumbnailUrl} />
    */}

    {config.googleSiteVerification ? <meta name='google-site-verification' content={config.googleSiteVerification} /> : null}

  </Head>
}
export default PageHead
