import React from 'react'

import { config } from '../config/config'
import formatDate from '../lib/formatDate'

const getDate = () => formatDate(new Date())
const pages = ['/']

const sitemapXml = '<?xml version="1.0" encoding="UTF-8"?>' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' +
    pages.map(path => `<url><loc>${config.appUrl}${path.substr(1)}</loc><lastmod>${getDate()}</lastmod></url>`) +
  '</urlset>'

export default class Sitemap extends React.Component {
  static getInitialProps ({ res }) {
    res.setHeader('Content-Type', 'text/xml')
    res.write(sitemapXml)
    res.end()
  }
}
