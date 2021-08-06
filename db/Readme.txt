First migration:(in migrations folder)
npx knex migrate:make init --migrations-directory db/migrations


Sync migrations to actual db:(in root folder) => npm run migrate
npx knex migrate:latest --knexfile db/knexfile.js