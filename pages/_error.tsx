// _error.js is only used in production. In development you'll get an error with the call stack to know where the error originated from.
import React from 'react'

import Page from '../components/Page'

const ErrorPage = ({ statusCode }) => (
  <Page
    title='Error'
  >
    <h1>Error (code {statusCode})</h1>
    <p>Sorry, but there was an error (code {statusCode}).</p>
  </Page>
)

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res
    ? res.statusCode
    : err
      ? err.statusCode
      : 404
  return { statusCode }
}

export default ErrorPage
