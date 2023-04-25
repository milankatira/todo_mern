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
exports.updateTodoController = exports.deleteTodoController = exports.getAllTodoController = exports.createTodoController = void 0;
const todo_service_1 = require("./todo.service");
const createTodoController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { text } = req.body;
        const data = yield (0, todo_service_1.createTodoService)({ text }, req.user.id);
        res.status(200).json({
            data,
            message: "todo created successfully",
            status: true,
        });
    }
    catch (err) {
        res.status(500).json({
            status: false,
            message: err.message,
        });
    }
});
exports.createTodoController = createTodoController;
const getAllTodoController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, todo_service_1.getAllTodoService)(req.user.id);
        res.status(200).json({
            data,
            message: "todo fetch successfully",
            status: true,
        });
    }
    catch (err) {
        res.status(500).json({
            status: false,
            message: err.message,
        });
    }
});
exports.getAllTodoController = getAllTodoController;
const deleteTodoController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, todo_service_1.deleteTodoService)(req.user.id, req.params.id);
        res.status(200).json({
            data,
            message: "todo deleted successfully",
            status: true,
        });
    }
    catch (err) {
        res.status(500).json({
            status: false,
            message: err.message,
        });
    }
});
exports.deleteTodoController = deleteTodoController;
const updateTodoController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { text } = req.body;
        const data = yield (0, todo_service_1.updateTodoService)(req.user.id, req.params.id, { text });
        res.status(200).json({
            data,
            message: "todo updated successfully",
            status: true,
        });
    }
    catch (err) {
        res.status(500).json({
            status: false,
            message: err.message,
        });
    }
});
exports.updateTodoController = updateTodoController;
