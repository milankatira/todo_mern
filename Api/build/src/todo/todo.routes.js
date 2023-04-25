"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const todo_controller_1 = require("./todo.controller");
const express_1 = __importDefault(require("express"));
const todo_validation_1 = require("./todo.validation");
const Auth_1 = require("../../middleware/Auth");
const router = express_1.default.Router();
router.post("/todo", Auth_1.Auth, todo_validation_1.validateTODO, todo_controller_1.createTodoController);
router.get("/todo", Auth_1.Auth, todo_controller_1.getAllTodoController);
router.delete("/todo/:id", Auth_1.Auth, todo_controller_1.deleteTodoController);
router.put("/todo/:id", Auth_1.Auth, todo_validation_1.validateTODO, todo_controller_1.updateTodoController);
exports.default = router;
