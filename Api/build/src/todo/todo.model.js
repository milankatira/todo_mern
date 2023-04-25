"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const TodoSchema = new mongoose_1.default.Schema({
    text: {
        type: "string",
        required: true,
    },
    user: {
        ref: "user",
        type: mongoose_1.default.Schema.Types.ObjectId,
    },
});
exports.todoModel = mongoose_1.default.model("todo", TodoSchema);
