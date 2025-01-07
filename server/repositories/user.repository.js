const knex = require("../database/connection.js");

class UserRepository {
  constructor() {
    this.table = "user";
  }

  async getByEmail(email) {
    const results = await knex(this.table).where({ email, deleted_date: null });
    return results[0];
  }

  async create(user) {
    const results = await knex(this.table).insert(user).returning("*");
    return results[0];
  }
}

module.exports = new UserRepository();
