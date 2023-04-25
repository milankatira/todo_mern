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
exports.updateTodoService = exports.deleteTodoService = exports.getAllTodoService = exports.createTodoService = void 0;
const todo_model_1 = require("./todo.model");
const createTodoService = (payload, user) => __awaiter(void 0, void 0, void 0, function* () {
    return yield todo_model_1.todoModel.create(Object.assign(Object.assign({}, payload), { user }));
});
exports.createTodoService = createTodoService;
const getAllTodoService = (user) => __awaiter(void 0, void 0, void 0, function* () {
    return yield todo_model_1.todoModel.find({ user });
});
exports.getAllTodoService = getAllTodoService;
const deleteTodoService = (user, _id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield todo_model_1.todoModel.findOneAndDelete({ user, _id });
        if (!data) {
            throw new Error(`data not found`);
        }
        return data;
    }
    catch (err) {
        throw new Error(err.message);
    }
});
exports.deleteTodoService = deleteTodoService;
const updateTodoService = (user, _id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield todo_model_1.todoModel.findOneAndUpdate({ user, _id }, payload, {
            new: true,
        });
        if (!data) {
            throw new Error(`data not found`);
        }
        return data;
    }
    catch (err) {
        throw new Error(err.message);
    }
});
exports.updateTodoService = updateTodoService;
