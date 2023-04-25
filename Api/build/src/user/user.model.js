"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    password: {
        type: "string",
        required: true,
        select: false
    },
    email: {
        type: "string",
        required: true,
    },
});
exports.userModel = mongoose_1.default.model("User", UserSchema);
