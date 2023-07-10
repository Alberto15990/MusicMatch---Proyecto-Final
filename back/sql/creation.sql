DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS playlists;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS users (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    email TEXT NOT NULL UNIQUE,
    username TEXT NOT NULL,
    password TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS playlists (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    food TEXT NOT NULL,
    party TEXT NOT NULL,
    people_qty INTEGER NOT NULL,
    playlist_id TEXT NOT NULL
);





