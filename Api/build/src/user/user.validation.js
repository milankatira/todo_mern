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
exports.validateSignIn = void 0;
const joi_1 = __importDefault(require("@hapi/joi"));
const validateSignIn = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const packet = Object.assign({}, req.body);
    const schema = joi_1.default.object({
        email: joi_1.default.string().email().required(),
        password: joi_1.default
            .string()
            .min(8)
            .max(16)
            .required()
            .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,20})/)
            .messages({
            "string.pattern.base": `Password should be a One Uppercase, One Lowercase, One Number and One Special Case Character`,
            "string.empty": `Password should be a minimum of 8 characters. Max 16 characters`,
            "string.min": `Password should be a minimum of 8 characters. Max 16 characters`,
            "string.max": `Password should be a minimum of 8 characters. Max 16 characters`,
        }),
    });
    try {
        const result = yield schema.validateAsync(packet);
        if (result) {
            next();
        }
    }
    catch (error) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return res.status(400).json({
            errorType: "VALIDATION_ERROR",
            message: error.details[0].message,
        });
    }
});
exports.validateSignIn = validateSignIn;
