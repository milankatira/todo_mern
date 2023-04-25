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
exports.signInUserService = exports.createUserService = void 0;
const jwtUtils_1 = require("../../utils/jwtUtils");
const user_model_1 = require("./user.model");
const bcrypt_1 = __importDefault(require("bcrypt"));
const createUserService = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_model_1.userModel.findOne({ email: payload.email });
        if (user) {
            throw new Error(`User ${user.email} already exists`);
        }
        const hashpassword = yield bcrypt_1.default.hash(payload.password, 10);
        const data = Object.assign(Object.assign({}, payload), { password: hashpassword });
        const userData = yield user_model_1.userModel.create(data);
        const result = JSON.parse(JSON.stringify(userData));
        result.token = (0, jwtUtils_1.createJWTToken)(userData);
        delete result.password;
        return result;
    }
    catch (err) {
        throw new Error(err.message);
    }
});
exports.createUserService = createUserService;
const signInUserService = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_model_1.userModel.findOne({ email: payload.email }).select('+password');
        if (!user) {
            throw new Error(`User not found with email: ${payload.email}`);
        }
        const comparePassword = yield bcrypt_1.default.compare(payload.password, user.password);
        if (!comparePassword) {
            throw new Error("email or password incorrect");
        }
        const result = JSON.parse(JSON.stringify(user));
        result.token = (0, jwtUtils_1.createJWTToken)(user);
        delete result.password;
        return result;
    }
    catch (err) {
        throw new Error(err.message);
    }
});
exports.signInUserService = signInUserService;
