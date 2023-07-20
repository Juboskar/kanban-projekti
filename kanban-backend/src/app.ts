import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { DataTypes, Model, Sequelize } from 'sequelize';

dotenv.config();

const app = express();

const sequelize = new Sequelize(process.env.DATABASE_URL as string);

class Note extends Model {}

Note.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: 'note',
  }
);

app.get('/api/notes', async (_req, res) => {
  const notes = await Note.findAll();
  res.json(notes);
});

app.get('/ping', async (_req, res) => {
  res.json('pong');
});

app.use(express.static(path.join(__dirname, '../frontend')));

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

export default app;
