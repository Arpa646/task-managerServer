"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskController = void 0;
const asynch_1 = __importDefault(require("../../middleware/asynch"));
const task_service_1 = require("./task.service");
const response_1 = __importDefault(require("../../utils/response"));
const createTask = (0, asynch_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const user = req.user as JwtPayload;
    // console.log('User from token:', user);
    // console.log('User ID:', user.userId);
    console.log('Full request user:', req.body);
    const result = yield task_service_1.TaskServices.createTask(Object.assign(Object.assign({}, req.body), { user: req.body.userId }));
    (0, response_1.default)(res, {
        statusCode: 201,
        success: true,
        message: 'Task created successfully',
        data: result,
    });
}));
const getAllTasks = (0, asynch_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    console.log("userId", userId);
    const result = yield task_service_1.TaskServices.getAllTasks(userId);
    (0, response_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'Tasks retrieved successfully',
        data: result,
    });
}));
const deleteTask = (0, asynch_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { taskId } = req.params;
    console.log("taskId", taskId);
    const result = yield task_service_1.TaskServices.deleteTask(taskId);
    (0, response_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'Task deleted successfully',
        data: result,
    });
}));
const updateTask = (0, asynch_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { taskId } = req.params;
    const result = yield task_service_1.TaskServices.updateTask(taskId, req.body);
    (0, response_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'Task updated successfully',
        data: result,
    });
}));
exports.TaskController = {
    createTask,
    getAllTasks,
    deleteTask,
    updateTask,
};
