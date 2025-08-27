"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTaskValidationSchema = exports.createTaskValidationSchema = void 0;
const zod_1 = require("zod");
exports.createTaskValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            required_error: 'Title is required',
            invalid_type_error: 'Title must be a string',
        }),
        description: zod_1.z.string({
            required_error: 'Description is required',
            invalid_type_error: 'Description must be a string',
        }),
        dueDate: zod_1.z.string({
            required_error: 'Due date is required',
        }).transform(str => new Date(str)),
        priority: zod_1.z.enum(['low', 'medium', 'high']).default('medium'),
        status: zod_1.z.enum(['todo', 'in-progress', 'completed']).default('todo'),
    }),
});
exports.updateTaskValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            invalid_type_error: 'Title must be a string',
        }).optional(),
        description: zod_1.z.string({
            invalid_type_error: 'Description must be a string',
        }).optional(),
        dueDate: zod_1.z.string().transform(str => new Date(str)).optional(),
        priority: zod_1.z.enum(['low', 'medium', 'high']).optional(),
        status: zod_1.z.enum(['todo', 'in-progress', 'completed']).optional(),
    }),
});
