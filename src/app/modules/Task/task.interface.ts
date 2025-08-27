import { Types } from 'mongoose';

export type TTask = {
  title: string;
  description: string;
  dueDate: Date;
  priority: 'low' | 'medium' | 'high';
  status: 'todo' | 'progress' | 'completed';
  user: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
};
