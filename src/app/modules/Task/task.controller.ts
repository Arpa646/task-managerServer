import { Request, Response } from 'express';
import catchAsync from '../../middleware/asynch';
import { TaskServices } from './task.service';
import sendResponse from '../../utils/response';
import { JwtPayload } from 'jsonwebtoken';

const createTask = catchAsync(async (req: Request, res: Response) => {
  // const user = req.user as JwtPayload;
  // console.log('User from token:', user);
  // console.log('User ID:', user.userId);
   console.log('Full request user:', req.body);
  



  const result = await TaskServices.createTask({
    ...req.body,
     user: req.body.userId,
  });

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Task created successfully',
    data: result,
  });
});

const getAllTasks = catchAsync(async (req: Request, res: Response) => {
  const { userId } = req.params;
  console.log("userId",userId)
  const result = await TaskServices.getAllTasks(userId);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Tasks retrieved successfully',
    data: result,
  });
});

const deleteTask = catchAsync(async (req: Request, res: Response) => {
  const { taskId } = req.params;
  console.log("taskId",taskId)

  const result = await TaskServices.deleteTask(taskId);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Task deleted successfully',
    data: result,
  });
});

const updateTask = catchAsync(async (req: Request, res: Response) => {
  const { taskId } = req.params;
  const result = await TaskServices.updateTask(taskId, req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Task updated successfully',
    data: result,
  });
});

export const TaskController = {
  createTask,
  getAllTasks,
  deleteTask,
  updateTask,
};
