// _error.js is only used in production. In development you'll get an error with the call stack to know where the error originated from.

import React from 'react'

const Error = ({ statusCode }) => (
  <div
    className='error'
  >
    An error occurred ({statusCode})
  </div>
)

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
