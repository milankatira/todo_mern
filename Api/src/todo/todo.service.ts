import { Types } from "mongoose";
import { todoModel } from "./todo.model";
import { it } from "node:test";

export const createTodoService = async (
  payload: { text: string },
  user: Types.ObjectId
) => {
  return await todoModel.create({ ...payload, user });
};

export const getAllTodoService = async (user: Types.ObjectId) => {
  return await todoModel.find({ user });
};

export const deleteTodoService = async (user: Types.ObjectId, _id: string) => {
  try {
    const data = await todoModel.findOneAndDelete({ user, _id });
    if (!data) {
      throw new Error(`data not found`);
    }
    return data;
  } catch (err: any) {
    throw new Error(err.message);
  }
};

export const updateTodoService = async (
  user: Types.ObjectId,
  _id: string,
  payload: {
    text: string;
  }
) => {
  try {
    const data = await todoModel.findOneAndUpdate({ user, _id }, payload, {
      new: true,
    });
    if (!data) {
      throw new Error(`data not found`);
    }
    return data;
  } catch (err: any) {
    throw new Error(err.message);
  }
};
