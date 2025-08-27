import { z } from 'zod';

export const createTaskValidationSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
      invalid_type_error: 'Title must be a string',
    }),
    description: z.string({
      required_error: 'Description is required',
      invalid_type_error: 'Description must be a string',
    }),
    dueDate: z.string({
      required_error: 'Due date is required',
    }).transform(str => new Date(str)),
    priority: z.enum(['low', 'medium', 'high']).default('medium'),
    status: z.enum(['todo', 'progress', 'completed']).default('todo'),
  }),
});

export const updateTaskValidationSchema = z.object({
  body: z.object({
    title: z.string({
      invalid_type_error: 'Title must be a string',
    }).optional(),
    description: z.string({
      invalid_type_error: 'Description must be a string',
    }).optional(),
    dueDate: z.string().transform(str => new Date(str)).optional(),
    priority: z.enum(['low', 'medium', 'high']).optional(),
    status: z.enum(['todo', 'progress', 'completed']).optional(),
  }),
});