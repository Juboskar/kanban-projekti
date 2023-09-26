import { Router } from 'express';
import userService from '../services/userService';

const usersRouter = Router();

usersRouter.get('/', async (_req, res, next) => {
  userService
    .getAll()
    .then((result) => res.status(200).send(result))
    .catch((error) => next(error));
});

usersRouter.post('/', async (req, res, next) => {
  userService
    .create(req.body)
    .then((result) => res.status(200).send(result))
    .catch((error) => next(error));
});

export default usersRouter;
