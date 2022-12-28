import { validateSignIn } from "./user.validation";
import { SignInController, createUserController } from "./user.controller";
import express from "express";

const router = express.Router();

router.post("/signup", validateSignIn, createUserController);
router.post("/signIn", validateSignIn, SignInController);

export default router;
