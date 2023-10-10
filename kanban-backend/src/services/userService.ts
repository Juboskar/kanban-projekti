import bcrypt from 'bcrypt';
import { User } from '../models';

const getAll = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  return users;
};

const getOne = async (username: string) => {
  const user = await User.findOne({
    where: { username },
    attributes: { exclude: ['password'] },
  });
  return user;
};

const create = async (userData: {
  name: string;
  username: string;
  password: string;
}) => {
  if (await User.findOne({ where: { username: userData.username } })) {
    throw { name: 'ValidationError', message: 'Username already exists' };
  }
  const user = await User.create({
    name: userData.name,
    username: userData.username,
    password: bcrypt.hashSync(userData.password, 10),
  });
  delete user.dataValues.password;
  return user;
};

const userService = { getAll, getOne, create };

export default userService;
