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
