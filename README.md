# Next.js + React Hooks + GraphQL (Apollo) + Postgres SQL boilerplate

_Note: this is my v3 boilerplate for React web apps. See also [nextjs-sql-rest-api-boilerplate](https://github.com/tomsoderlund/nextjs-sql-rest-api-boilerplate) and [nextjs-express-mongoose-crudify-boilerplate](https://github.com/tomsoderlund/nextjs-express-mongoose-crudify-boilerplate)._

## Why is this awesome?

This is a great starting point for a any project where you want **React (with Hooks)** (with server-side rendering, powered by [Next.js](https://github.com/zeit/next.js)) as frontend and **GraphQL and Postgres SQL** as backend.
_Lightning fast, all JavaScript._

* GraphQL API with Apollo.
* React Hooks for business logic.
* Flexible client-side routing with `next-routes` (see `server/routes.js`).
* Flexible configuration with `config/config.js` and `.env` file.
* Hot reloading with `nodemon`.
* Testing with Jasmine.
* Code formatting and linting with StandardJS.
* sitemap.xml, robots.txt, and Google Analytics support.

## Demo

See [**nextjs-graphql-hooks-boilerplate** running on Heroku here](https://nextjs-sql-rest-api.herokuapp.com/).

![nextjs-graphql-hooks-boilerplate demo on Heroku](docs/demo.gif)

## How to use

Clone this repository:

    git clone https://github.com/tomsoderlund/nextjs-graphql-hooks-boilerplate.git [MY_APP]

Install dependencies:

    cd [MY_APP]
    yarn  # or npm install

Install Postgres and set up the database:

    psql postgres  # Start the Postgres command-line client
    
    CREATE DATABASE "nextjs-graphql-hooks-boilerplate";  -- You can also use \connect to connect to existing database
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
