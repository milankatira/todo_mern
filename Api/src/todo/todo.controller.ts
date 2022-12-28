import {
  createTodoService,
  deleteTodoService,
  getAllTodoService,
  updateTodoService,
} from "./todo.service";
import { Request, Response } from "express";
export const createTodoController = async (req: any, res: Response) => {
  try {
    const { text } = req.body;
    const data = await createTodoService({ text }, req.user.id);

    res.status(200).json({
      data,
      message: "todo created successfully",
      status: true,
    });
  } catch (err: any) {
    res.status(500).json({
      status: false,
      message: err.message,
    });
  }
};

export const getAllTodoController = async (req: any, res: Response) => {
  try {
    const data = await getAllTodoService(req.user.id);

    res.status(200).json({
      data,
      message: "todo fetch successfully",
      status: true,
    });
  } catch (err: any) {
    res.status(500).json({
      status: false,
      message: err.message,
    });
  }
};

export const deleteTodoController = async (req: any, res: Response) => {
  try {
    const data = await deleteTodoService(req.user.id, req.params.id);

    res.status(200).json({
      data,
      message: "todo deleted successfully",
      status: true,
    });
  } catch (err: any) {
    res.status(500).json({
      status: false,
      message: err.message,
    });
  }
};

export const updateTodoController = async (req: any, res: Response) => {
  try {
    const { text } = req.body;
    const data = await updateTodoService(req.user.id, req.params.id, { text });

    res.status(200).json({
      data,
      message: "todo updated successfully",
      status: true,
    });
  } catch (err: any) {
    res.status(500).json({
      status: false,
      message: err.message,
    });
  }
};
