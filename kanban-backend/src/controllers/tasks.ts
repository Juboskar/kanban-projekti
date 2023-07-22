import router from 'express';
import models from '../models';

const Task = models.Task;

const tasksRouter = router.Router();

tasksRouter.get('/', async (_req, res) => {
  const notes = await Task.findAll();
  res.json(notes);
});

tasksRouter.post('/', async (req, res) => {
  try {
    const note = await Task.create(req.body);
    return res.json(note);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

export default tasksRouter;
