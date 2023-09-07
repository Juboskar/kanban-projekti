import router from 'express';
import taskService from '../services/taskService';

const tasksRouter = router.Router();

tasksRouter.get('/', async (_req, res) => {
  taskService.getAll().then((result) => res.status(200).send(result));
});

tasksRouter.post('/', async (req, res) => {
  taskService.create(req.body).then((result) => res.status(200).send(result));
});

export default tasksRouter;
