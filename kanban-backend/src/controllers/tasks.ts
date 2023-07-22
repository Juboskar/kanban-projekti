import router from 'express';
import TaskService from '../services/taskService';

const tasksRouter = router.Router();

tasksRouter.get('/', async (_req, res) => {
  TaskService.getAll().then((result) => res.status(200).send(result));
});

tasksRouter.post('/', async (req, res) => {
  TaskService.create(req.body).then((result) => res.status(200).send(result));
});

export default tasksRouter;
