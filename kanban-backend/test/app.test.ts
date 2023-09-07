import supertest from 'supertest';
import app from '../src/app';
import { connectToDatabase } from '../src/utils/db';

const api = supertest(app);

beforeAll(async () => {
  await connectToDatabase();
});

test('health check', async () => {
  const response = await api.get('/ping');
  expect(response.status).toBe(200);
});

test('app starts', async () => {
  const response = await api.get('/api/tasks');
  expect(response.status).toBe(200);
});
