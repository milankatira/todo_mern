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
exports.SignInController = exports.createUserController = void 0;
const user_services_1 = require("./user.services");
const createUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const data = yield (0, user_services_1.createUserService)({ email, password });
        res.status(200).json({
            data,
            message: "Account created successfully",
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
exports.createUserController = createUserController;
const SignInController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const data = yield (0, user_services_1.signInUserService)({ email, password });
        res.status(200).json({
            data,
            message: "SignIn successfully",
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
exports.SignInController = SignInController;
