# Next.js PWA with GraphQL (Apollo) and Postgres SQL boilerplate

_Note: this is my v3 boilerplate for React web apps. See also [nextjs-sql-rest-api-boilerplate](https://github.com/tomsoderlund/nextjs-sql-rest-api-boilerplate) and [nextjs-express-mongoose-crudify-boilerplate](https://github.com/tomsoderlund/nextjs-express-mongoose-crudify-boilerplate)._

## Why is this awesome?

This is a great template for a any project where you want **React (with Hooks)** (with server-side rendering, powered by [Next.js](https://github.com/zeit/next.js)) as frontend and **GraphQL and Postgres SQL** as backend.
_Lightning fast, all JavaScript._

* Great starting point for a [PWA (Progressive Web App)](https://en.wikipedia.org/wiki/Progressive_web_applications).
* Both front-end client and GraphQL/SQL server in one project.
* A fast Postgres SQL database server.
* GraphQL API with Apollo.
* React Hooks for business logic.
* PWA features such as `manifest.json` and offline support (`next-offline`).
* Easy to style the visual theme using CSS (e.g. using [Design Profile Generator](https://tomsoderlund.github.io/design-profile-generator/)).
* `sitemap.xml` and `robots.txt` support.
* Google Analytics and `google-site-verification` support (see `config/config.js`).
* Flexible client-side routing with `next-routes` (see `server/routes.js`).
* Flexible configuration with `config/config.js` and `.env` file.
* Hot reloading with `nodemon`.
* Unit testing with Jasmine (`yarn unit`).
* Code linting and formatting with StandardJS (`yarn lint`/`yarn fix`).

## Demo

See [**nextjs-pwa-graphql-sql-boilerplate** running on Heroku here](https://nextjs-pwa-graphql-sql.herokuapp.com/).

![nextjs-pwa-graphql-sql-boilerplate demo on phone](docs/demo-phone_half.png)

![nextjs-pwa-graphql-sql-boilerplate demo on Heroku](docs/demo.gif)

## How to use

Clone this repository:

    git clone https://github.com/tomsoderlund/nextjs-pwa-graphql-sql-boilerplate.git [MY_APP]

Install dependencies:

    cd [MY_APP]
    yarn  # or npm install

Install Postgres and set up the database:

    psql postgres  # Start the Postgres command-line client
    
    CREATE DATABASE "nextjs-pwa-graphql-sql";  -- You can also use \connect to connect to existing database
    CREATE TABLE article (id serial, title varchar(200), content text);  -- Create a blank table
    INSERT INTO article (title) VALUES ('The first article');  -- Add example data
    SELECT * FROM article;  -- Check data exists
    \q

Start it by doing the following:

    export DATABASE_URL=[your Postgres URL]  # Or use a .env file
    yarn dev

In production:

    yarn build
    yarn start

If you navigate to `http://localhost:3123/` you will see a web page with a list of articles (or an empty list if you haven’t added one).

### GraphQL client and server

Your GraphQL API server is running at `http://localhost:3123/graphql`


## Deploying

### Deploying on Heroku

    heroku create [MY_APP]
    heroku addons:create heroku-postgresql:hobby-dev
    git push heroku master

### Deploying on Zeit Now

(Coming)


## How to remove/replace SQL database

1. `graphql/schema.js`: remove `pg`
2. `graphql/article/resolvers.js`: remove “sql*” references
