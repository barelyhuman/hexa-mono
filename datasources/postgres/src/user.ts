import type { Knex } from "knex";

export class User {
  connection: Knex;

  constructor(connection: Knex) {
    this.connection = connection;
  }

  async getUserById(userId: number) {
    return await this.connection("users")
      .where({
        id: userId,
      })
      .select(["*"]);
  }
}
