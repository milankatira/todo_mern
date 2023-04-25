"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Auth = (req, res, next) => {
    try {
        const authHeader = req.headers["authorization"];
        const token = authHeader && authHeader.split(" ")[1];
        if (!token)
            return res.status(401).json({
                message: "A token is required for authentication",
                errorType: "unauthorized",
            });
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_PRIVATE_KEY);
        req.user = decoded;
    }
    catch (err) {
        return res.status(401).json({
            message: "Invalid Token",
            errorType: "unauthorized",
        });
    }
    return next();
};
exports.Auth = Auth;
