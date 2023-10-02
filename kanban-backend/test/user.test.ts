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

  test('Create user and return name and username, not returning hashed password', async () => {
    const response = await api
      .post('/api/users')
      .send({ username: 'John', name: 'John Doe', password: 'password' });

    expect(response.status).toBe(200);
    expect(response.body.name).toBe('John Doe');
    expect(response.body.username).toBe('John');
    expect(response.body.password).toBeUndefined();
  });

  test('Create user with existing username', async () => {
    const response = await api
      .post('/api/users')
      .send({ username: 'John', name: 'John Doe', password: 'password' });

    expect(response.status).toBe(403);
    expect(response.body.error).toBe('Username already exists');
  });

  test('Create user with too short username', async () => {
    const response = await api
      .post('/api/users')
      .send({ username: 'Jo', name: 'John Doe', password: 'password' });

    expect(response.status).toBe(403);
    expect(response.body.error).toBe(
      'username must be between 3 and 20 characters long'
    );
  });

  test('Create user with too long username', async () => {
    const response = await api.post('/api/users').send({
      username: 'John12345678901234567',
      name: 'John Doe',
      password: 'password',
    });
    expect(response.status).toBe(403);
    expect(response.body.error).toBe(
      'username must be between 3 and 20 characters long'
    );
  });

  test('Create user with invalid username', async () => {
    const response = await api
      .post('/api/users')
      .send({ username: 'John Doe', name: 'John Doe', password: 'password' });

    expect(response.status).toBe(403);
    expect(response.body.error).toBe(
      'username must contain only letters and numbers'
    );
  });

  test('Create user with too short name', async () => {
    const response = await api
      .post('/api/users')
      .send({ username: 'John', name: 'Jo', password: 'password' });

    expect(response.status).toBe(403);
    expect(response.body.error).toBe(
      'name must be between 3 and 50 characters long'
    );
  });

  test('Create user with too long name', async () => {
    const response = await api.post('/api/users').send({
      username: 'John',
      name: 'John Doe John Doe John Doe John Doe John Doe John Doe',
      password: 'password',
    });
    expect(response.status).toBe(403);
    expect(response.body.error).toBe(
      'name must be between 3 and 50 characters long'
    );
  });

  test('Create user with too short password', async () => {
    const response = await api
      .post('/api/users')
      .send({ username: 'John', name: 'John Doe', password: 'pass' });

    expect(response.status).toBe(403);
    expect(response.body.error).toBe(
      'password must be between 8 and 200 characters long'
    );
  });

  test('Create user with too long password', async () => {
    const response = await api.post('/api/users').send({
      username: 'John',
      name: 'John Doe',
      password:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec ante iaculis libero bibendum\
       vehicula. Phasellus nec interdum lorem, eget congue tellus. Phasellus laoreet, dolor vitae condimentum id.',
    });
    expect(response.status).toBe(403);
    expect(response.body.error).toBe(
      'password must be between 8 and 200 characters long'
    );
  });

  test('Create user with missing username', async () => {
    const response = await api
      .post('/api/users')
      .send({ name: 'John Doe', password: 'password' });

    expect(response.status).toBe(403);
    expect(response.body.error).toBe('username is required');
  });

  test('Create user with missing name', async () => {
    const response = await api
      .post('/api/users')
      .send({ username: 'John', password: 'password' });

    expect(response.status).toBe(403);
    expect(response.body.error).toBe('name is required');
  });

  test('Create user with missing password', async () => {
    const response = await api
      .post('/api/users')
      .send({ username: 'John', name: 'John Doe' });

    expect(response.status).toBe(403);
    expect(response.body.error).toBe('password is required');
  });

  test('create user with min length values', async () => {
    const response = await api
      .post('/api/users')
      .send({ username: 'Joe', name: 'Joe', password: 'password' });

    expect(response.status).toBe(200);
    expect(response.body.name).toBe('Joe');
    expect(response.body.username).toBe('Joe');
    expect(response.body.password).toBeUndefined();
  });

  test('create user with max length values', async () => {
    const response = await api.post('/api/users').send({
      username: 'John1234567890123456',
      name: 'John Doe John Doe John Doe John Doe John Doe John1',
      password:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec ante iaculis libero bibendum vehicula. ' +
        'Phasellus nec interdum lorem, eget congue tellus. Phasellus laoreet, dolor vitae condimentum id.',
    });
    expect(response.status).toBe(200);
    expect(response.body.name).toBe(
      'John Doe John Doe John Doe John Doe John Doe John1'
    );
    expect(response.body.username).toBe('John1234567890123456');
    expect(response.body.password).toBeUndefined();
  });
});
