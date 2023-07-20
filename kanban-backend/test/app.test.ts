import supertest from 'supertest';
import app from '../src/app';

const api = supertest(app);

test('app starts', async () => {
  const response = await api.get('/ping');
  expect(response.status).toBe(200);
});
