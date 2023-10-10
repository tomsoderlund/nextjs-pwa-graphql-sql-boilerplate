-- Table: user
-- Represents a Brizo Dashboard user who can log in, perform actions, and own data.

DROP TABLE IF EXISTS "user" CASCADE;

CREATE TABLE "user" (
    id SERIAL PRIMARY KEY,
    name text,
    firebase_uid varchar(128) NOT NULL UNIQUE,
    created_date timestamp with time zone NOT NULL DEFAULT now(),
    is_system_admin boolean NOT NULL DEFAULT false -- For the entire Brizo Dashboard, see also user_goodsowner.is_admin
);
