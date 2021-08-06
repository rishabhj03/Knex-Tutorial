//Up means new changes you want to do ,applies to migrations

//always use underscore , not camelCase because some databases can be case-sensitive
exports.up = function (knex) {
  return knex.schema.createTable("person", (table) => {
    table.increments("id");
    table.string("email").notNullable().unique();
    table.string("first_name").notNullable();
    table.string("last_name", 255).notNullable();
    table.timestamps(true, true);
  });
};

//Down means ROLLBACK ,undo migrations
exports.down = function (knex) {
  return knex.schema.dropTable("person");
};
