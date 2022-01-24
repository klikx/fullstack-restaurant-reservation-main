const knex = require("../db/connection");

function create(newTable) {
  return knex("tables")
    .insert(newTable)
    .returning("*")
    .then((tables) => tables[0]);
}

async function list() {
  return knex("tables")
    .select("*")
    .orderBy("table_name")
}

module.exports = {
  create,
  list,
};
