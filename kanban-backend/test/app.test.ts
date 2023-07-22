import supertest from 'supertest';
import app from '../src/app';
import { sequelize } from '../src/utils/db';

const api = supertest(app);

afterAll(() => {
  return sequelize.close();
});

test('app starts', async () => {
  const response = await api.get('/api/tasks');
  expect(response.status).toBe(200);
});
