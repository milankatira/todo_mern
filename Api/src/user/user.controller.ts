import { createUserService, signInUserService } from "./user.services";
import { Request, Response } from "express";

export const createUserController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const data = await createUserService({ email, password });
    res.status(200).json({
      data,
      message: "Account created successfully",
      status: true,
    });
  } catch (err: any) {
    res.status(500).json({
      status: false,
      message: err.message,
    });
  }
};

export const SignInController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const data = await signInUserService({ email, password });
    res.status(200).json({
      data,
      message: "SignIn successfully",
      status: true,
    });
  } catch (err: any) {
    res.status(500).json({
      status: false,
      message: err.message,
    });
  }
};

