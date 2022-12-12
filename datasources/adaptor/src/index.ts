import { connect, User } from "@tillwhen/postgres";

const transactionalDB = connect();

const UserTransactional = new User(transactionalDB);

export const App = {
  // Transactional Models
  models: {
    User: UserTransactional,
  },
};
