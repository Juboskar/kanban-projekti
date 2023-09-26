import api from './config/api';
import { User, Task } from '../src/models';

beforeAll(async () => {
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
