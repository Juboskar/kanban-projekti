import { User } from '../models';

const getAll = async () => {
  const users = await User.findAll();
  return users;
};

const create = async (userData: { username: string; password: string }) => {
  // TODO: password hashing, validation
  const user = await User.create(userData);
  return user;
};

const userService = { getAll, create };

export default userService;
