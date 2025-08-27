import { Types } from 'mongoose';
import { TTask } from './task.interface';
import { Task } from './task.model';

const createTask = async (payload: TTask) => {
  const result = await Task.create(payload);
  return result;
};

const getAllTasks = async (userId: string) => {
  const result = await Task.find({ user: new Types.ObjectId(userId) });
  return result;
};

const deleteTask = async (taskId: string) => {
  const result = await Task.findOneAndDelete({
    _id: taskId,
  
  });
  return result;
};

const updateTask = async (taskId: string, payload: Partial<TTask>) => {
  const result = await Task.findByIdAndUpdate(
    taskId,
    { $set: payload },
    { new: true, runValidators: true }
  );
  return result;
};

export const TaskServices = {
  createTask,
  getAllTasks,
  deleteTask,
  updateTask,
};
