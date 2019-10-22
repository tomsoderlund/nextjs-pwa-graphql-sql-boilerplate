const routes = require('next-routes')
const routesImplementation = routes()

// routesImplementation
//   .add([identifier], pattern = /identifier, page = identifier)
//   .add('/blog/:slug', 'blogShow')
//   .add('showBlogPostRoute', '/blog/:slug', 'blogShow')

routesImplementation.add('/articles/:slug', 'index')
routesImplementation.add('/articles', 'index')
routesImplementation.add('/', 'index')

module.exports = routesImplementation

// Usage inside Page.getInitialProps (req = { pathname, asPath, query } = { pathname: '/', asPath: '/about', query: { slug: 'about' } })
// Note: query contains both /:params and ?query=value from url
