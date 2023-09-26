import express from 'express';
import path from 'path';
import tasksRouter from './controllers/tasks';
import usersRouter from './controllers/users';
import { errorHandler } from './utils/middleware';

const app = express();

app.use(express.json());

app.use('/api/tasks', tasksRouter);
app.use('/api/users', usersRouter);

app.get('/ping', (_req, res) => {
  res.json('pong');
});

app.use(express.static(path.join(__dirname, '../frontend')));

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.use(errorHandler);

export default app;
