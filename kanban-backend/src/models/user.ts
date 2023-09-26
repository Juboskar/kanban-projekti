import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../utils/db';

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { isAlphanumeric: true, len: [3, 20] },
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      validate: { len: [3, 50] },
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: true,
    modelName: 'user',
  }
);

export default User;
