import knex, { Knex } from "knex";

//@ts-expect-error necessary js import
import configs from "../knexfile.js";
import { User } from "./user.js";
let _memoConnect: Knex;

function connect() {
  const toRead = configs[process.env.NODE_ENV || "development"];
  return _memoConnect || ((_memoConnect = knex(toRead)), _memoConnect);
}

export { User, connect };
