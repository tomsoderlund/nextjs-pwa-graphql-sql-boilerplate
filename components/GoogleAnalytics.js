import ReactGA from 'react-ga'

import isDevelopment from '../lib/isDevelopment'

/* options: dimension1: userRole */
export const googlePageview = (path, options = { anonymizeIp: true }) => {
  ReactGA.pageview(path, options)
  if (isDevelopment()) console.log(`Google pageview:`, path, options)
}

export const googleEvent = ({ category, action }) => {
  ReactGA.event({ category, action })
  if (isDevelopment()) console.log(`Google event:`, { category, action })
}
