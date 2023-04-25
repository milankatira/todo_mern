"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createJWTToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const createJWTToken = (userData) => {
    try {
        const token = jsonwebtoken_1.default.sign({
            id: userData._id,
            email: userData.email,
        }, process.env.JWT_PRIVATE_KEY, { expiresIn: "30d" });
        return token;
    }
    catch (error) {
        throw {
            errorMsg: "ERROR IN CREATING TOKEN",
        };
    }
};
exports.createJWTToken = createJWTToken;
