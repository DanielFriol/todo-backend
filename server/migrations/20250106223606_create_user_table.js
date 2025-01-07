exports.up = function (knex) {
  return knex.schema.createTable("user", function (table) {
    table.increments("id");
    table.string("name");
    table.string("email");
    table.string("password");
    table.datetime('created_date', { precision: 6 }).defaultTo(knex.fn.now(6));
    table.datetime('updated_date', { precision: 6 });
    table.datetime('deleted_date', { precision: 6 });
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("user");
};
