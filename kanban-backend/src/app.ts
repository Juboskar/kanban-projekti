import express from 'express';
import path from 'path';
import { connectToDatabase } from './utils/db';
import tasksRouter from './controllers/tasks';

const app = express();

app.use(express.json());

app.use('/api/tasks', tasksRouter);

app.get('/ping', (_req, res) => {
  res.json('pong');
});

app.use(express.static(path.join(__dirname, '../frontend')));

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

(async () => {
  await connectToDatabase();
})();

export default app;
