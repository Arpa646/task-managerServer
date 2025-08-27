"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateroute_1 = __importDefault(require("../../middleware/validateroute"));
const task_validation_1 = require("./task.validation");
const task_controller_1 = require("./task.controller");
const router = express_1.default.Router();
router.post('/create-task', 
// auth(),
(0, validateroute_1.default)(task_validation_1.createTaskValidationSchema), task_controller_1.TaskController.createTask);
router.get('/user/:userId/tasks', task_controller_1.TaskController.getAllTasks);
router.delete('/:taskId', task_controller_1.TaskController.deleteTask);
router.patch('/:taskId', (0, validateroute_1.default)(task_validation_1.updateTaskValidationSchema), task_controller_1.TaskController.updateTask);
exports.TaskRoutes = router;
