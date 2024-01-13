-- Table: article
-- An article or blog post

DROP TABLE IF EXISTS "article" CASCADE;

CREATE TABLE "article" (
    id SERIAL PRIMARY KEY,
    created_date timestamp with time zone NOT NULL DEFAULT now(),

    title text NOT NULL,
    content text
);
