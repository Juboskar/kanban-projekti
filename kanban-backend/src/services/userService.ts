import bcrypt from 'bcrypt';
import { User } from '../models';

const getAll = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  return users;
};

const create = async (userData: {
  name: string;
  username: string;
  password: string;
}) => {
  const user = await User.create({
    name: userData.name,
    username: userData.username,
    password: bcrypt.hashSync(userData.password, 10),
  });
  delete user.dataValues.password;
  return user;
};

const userService = { getAll, create };

export default userService;
