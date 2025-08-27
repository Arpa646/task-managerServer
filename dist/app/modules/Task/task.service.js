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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskServices = void 0;
const mongoose_1 = require("mongoose");
const task_model_1 = require("./task.model");
const createTask = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield task_model_1.Task.create(payload);
    return result;
});
const getAllTasks = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield task_model_1.Task.find({ user: new mongoose_1.Types.ObjectId(userId) });
    return result;
});
const deleteTask = (taskId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield task_model_1.Task.findOneAndDelete({
        _id: taskId,
    });
    return result;
});
const updateTask = (taskId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield task_model_1.Task.findByIdAndUpdate(taskId, { $set: payload }, { new: true, runValidators: true });
    return result;
});
exports.TaskServices = {
    createTask,
    getAllTasks,
    deleteTask,
    updateTask,
};
