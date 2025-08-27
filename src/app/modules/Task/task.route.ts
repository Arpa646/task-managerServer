import express from 'express';
import validateRequest from '../../middleware/validateroute';
import { createTaskValidationSchema, updateTaskValidationSchema } from './task.validation';
import { TaskController } from './task.controller';
import auth from '../../middleware/auth';

const router = express.Router();

router.post(
  '/create-task',
  // auth(),
  validateRequest(createTaskValidationSchema),
  TaskController.createTask,
);

router.get('/user/:userId/tasks', TaskController.getAllTasks);

router.delete('/:taskId',  TaskController.deleteTask);

router.patch(
  '/:taskId',
  validateRequest(updateTaskValidationSchema),
  TaskController.updateTask,
);

export const TaskRoutes = router;
