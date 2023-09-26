import api from './config/api';
import { User } from '../src/models';

describe('User tests', () => {
  beforeAll(async () => {
    User.destroy({
      where: {},
    });
  });

  test('Get users', async () => {
    const response = await api.get('/api/users');
    expect(response.status).toBe(200);
  });

  test('Create user and return name and username, not return hashed password', async () => {
    const response = await api
      .post('/api/users')
      .send({ username: 'John', name: 'John Doe', password: 'password' });

    expect(response.status).toBe(200);
    expect(response.body.name).toBe('John Doe');
    expect(response.body.username).toBe('John');
    expect(response.body.password).toBeUndefined();
  });
});
