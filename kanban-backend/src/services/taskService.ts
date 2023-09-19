import { Task } from '../models';

const getAll = async () => {
  const tasks = await Task.findAll();
  return tasks;
};

const create = async (taskData: { content: string }) => {
  const task = await Task.create(taskData);
  return task;
};

const taskService = { getAll, create };

export default taskService;
