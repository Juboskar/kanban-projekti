import models from '../models';

const Task = models.Task;

const getAll = async () => {
  try {
    const tasks = await Task.findAll();
    return tasks;
  } catch (error) {
    console.log(error);
  }
  return;
};

const create = async (taskData: { content: string }) => {
  const task = await Task.create(taskData);
  return task;
};

const TaskService = { getAll, create };

export default TaskService;
