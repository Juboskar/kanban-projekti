import api from './config/api';
import { connectToDatabase } from '../src/utils/db';
import { User, Task } from '../src/models';

beforeAll(async () => {
  await connectToDatabase();
  User.destroy({
    where: {},
  });
  Task.destroy({
    where: {},
  });
});

test('app starts', async () => {
  const response = await api.get('/api/tasks');
  expect(response.status).toBe(200);
});
