import { config } from '../config/config'
import isDevelopment from '../lib/isDevelopment'

/* options: dimension1: userRole */
export const googlePageview = (path, options) => {
  const completeOptions = Object.assign({}, options, { 'page_path': path }) // 'page_title' : 'homepage'
  if (config.googleAnalyticsId) window.gtag('config', config.googleAnalyticsId, completeOptions)
  if (isDevelopment()) console.log(`Google pageview:`, { path, options: completeOptions })
}

export const googleEvent = (action, options) => {
  if (config.googleAnalyticsId) window.gtag('event', action, options)
  if (isDevelopment()) console.log(`Google event:`, { action, options })
}
