import { Router } from 'express';
import userService from '../services/userService';
import { validate } from '../utils/middleware';
import { userData } from '../schemas/userData';

const usersRouter = Router();

usersRouter.get('/', async (_req, res, next) => {
  try {
    const result = await userService.getAll();
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
});

usersRouter.get('/usernames/:username', async (req, res, next) => {
  try {
    const result = await userService.getOne(req.params.username);
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
});

usersRouter.post('/', validate(userData), async (req, res, next) => {
  try {
    const result = await userService.create(req.body);
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
});

export default usersRouter;
