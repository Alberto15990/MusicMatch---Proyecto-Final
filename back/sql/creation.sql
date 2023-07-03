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



------

INSERT INTO playlists (
  food, party, people_qty, playlist_id)
VALUES ('italian','a',1,'37i9dQZF1DX8NTLI2TtZa6');

INSERT INTO playlists (
  food, party, people_qty,playlist_id)
VALUES ('italian','b',1,'0C1xOlXjCWiPSu7cTFeXg0');

INSERT INTO playlists (
  food, party, people_qty,playlist_id)
VALUES ('italian','c',1,'38JmDMAI5MztUH9klEQWU6');

------

INSERT INTO playlists (
  food, party, people_qty,playlist_id)
VALUES ('italian','a',2,'37i9dQZF1DX9sIqqvKsjG8');

INSERT INTO playlists (
  food, party, people_qty,playlist_id)
VALUES ('italian','b',2,'37i9dQZF1DWWQRwui0ExPn');

INSERT INTO playlists (
  food, party, people_qty,playlist_id)
VALUES ('italian','c',2,'5iwkYfnHAGMEFLiHFFGnP4');


------

INSERT INTO playlists (
  food, party, people_qty,playlist_id)
VALUES ('italian','a',3,'37i9dQZF1DWZZbwlv3Vmtr');

INSERT INTO playlists (
  food, party, people_qty,playlist_id)
VALUES ('italian','b',3,'37i9dQZF1DX4PP3DA4J0N8');

INSERT INTO playlists (
  food, party, people_qty,playlist_id)
VALUES ('italian','c',3,'0KbjM73h2sobBPwvsB2HXa');


------

INSERT INTO playlists (
  food, party, people_qty,playlist_id)
VALUES ('american','a',1,'0hZNf3tcMT4x03FyjKYJ3M');

INSERT INTO playlists (
  food, party, people_qty,playlist_id)
VALUES ('american','b',1,'37i9dQZF1DWTLSN7iG21yC');

INSERT INTO playlists (
  food, party, people_qty,playlist_id)
VALUES ('american','c',1,'37i9dQZF1DX30w0JtSIv4j');

------

INSERT INTO playlists (
  food, party, people_qty,playlist_id)
VALUES ('american','a',2,'37i9dQZF1DWXLeA8Omikj7');

INSERT INTO playlists (
  food, party, people_qty,playlist_id)
VALUES ('american','b',2,'1qvW13XhfMMZMlzQx362HR');

INSERT INTO playlists (
  food, party, people_qty,playlist_id)
VALUES ('american','c',2,'37i9dQZF1DWY7IeIP1cdjF');


------

INSERT INTO playlists (
  food, party, people_qty,playlist_id)
VALUES ('american','a',3,'0Jx08l1U5auUhwTjSbVhjF');

INSERT INTO playlists (
  food, party, people_qty,playlist_id)
VALUES ('american','b',3,'37i9dQZF1DXctgIf9k05Pu');

INSERT INTO playlists (
  food, party, people_qty,playlist_id)
VALUES ('american','c',3,'7tbwnPU6xcZzRIxrVBOdPd');


------

INSERT INTO playlists (
  food, party, people_qty,playlist_id)
VALUES ('spanish','a',1,'4u7JoYkMYv11s56opC5AxK');

INSERT INTO playlists (
  food, party, people_qty,playlist_id)
VALUES ('spanish','b',1,'3DIjw8eboATMgRN2RC6mz6');

INSERT INTO playlists (
  food, party, people_qty,playlist_id)
VALUES ('spanish','c',1,'68YVlaeP6vVsGBlVpOmvPZ');

------

INSERT INTO playlists (
  food, party, people_qty,playlist_id)
VALUES ('spanish','a',2,'37i9dQZF1DWT5lkChsPmpy');

INSERT INTO playlists (
  food, party, people_qty,playlist_id)
VALUES ('spanish','b',2,'37i9dQZF1DX72ScqV2Zfd6');

INSERT INTO playlists (
  food, party, people_qty,playlist_id)
VALUES ('spanish','c',2,'4T3wbxYf4sfPCGKa2ABVAT');


------

INSERT INTO playlists (
  food, party, people_qty,playlist_id)
VALUES ('spanish','a',3,'37i9dQZF1DWSluGMsH1R9r');

INSERT INTO playlists (
  food, party, people_qty,playlist_id)
VALUES ('spanish','b',3,'37i9dQZF1DX2MyUCsl25eb');

INSERT INTO playlists (
  food, party, people_qty,playlist_id)
VALUES ('spanish','c',3,'0OfkB0lDBhmtG0aPptIBFp');




