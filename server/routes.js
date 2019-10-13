const routes = require('next-routes')
const routesImplementation = routes()

// routesImplementation
//   .add([identifier], pattern = /identifier, page = identifier)
//   .add('/blog/:slug', 'blogShow')
//   .add('showBlogPostRoute', '/blog/:slug', 'blogShow')

routesImplementation.add('/articles/:slug', 'articleList')
routesImplementation.add('/articles', 'articleList')
routesImplementation.add('/', 'articleList')

module.exports = routesImplementation

// Usage inside Page.getInitialProps (req = { pathname, asPath, query } = { pathname: '/', asPath: '/about', query: { slug: 'about' } })
