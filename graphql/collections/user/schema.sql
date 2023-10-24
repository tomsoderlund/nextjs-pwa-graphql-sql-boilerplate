-- Table: user
-- Represents a user who can log in, perform actions, and own data.

DROP TABLE IF EXISTS "user" CASCADE;

CREATE TABLE "user" (
    id SERIAL PRIMARY KEY,
    created_date timestamp with time zone NOT NULL DEFAULT now(),

    name text,
    firebase_uid varchar(128) NOT NULL UNIQUE,

    is_system_admin boolean NOT NULL DEFAULT false
);
