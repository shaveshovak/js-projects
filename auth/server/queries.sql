CREATE DATABASE jwttutorial;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (id, username, email, password) VALUES
  ('a1f7c9f8-ec4e-4b4a-b0e2-264b63b07c4a', 'john_doe', 'john@example.com', 'hashed_password_1'),
  ('52b56dc8-1dcb-4d84-b1c1-76e4d20a2c5b', 'jane_smith', 'jane@example.com', 'hashed_password_2');

SELECT * FROM users;

-- psql -U postgres
-- \c jwtutorial
-- \dt

-- DROP TABLE IF EXISTS users CASCADE;
