import axios from "axios";
import { singleTodoUrl, todoUrl } from "../constant/urlConstant";

const token =
  typeof window !== "undefined" ? localStorage.getItem("user") : null;
const config = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

export const addTodo = async (payload: { text: string }) => {
  //@ts-ignore
  return await axios.post(todoUrl, payload, config);
};

export const getTodo = async () => {
  //@ts-ignore
  return await axios.get(todoUrl, config);
};

export const deleteTodo = async (id: string) => {
  //@ts-ignore
  return await axios.delete(singleTodoUrl(id), config);
};

export const updateTodo = async (id: string, payload: { text: string }) => {
  //@ts-ignore
  return await axios.put(singleTodoUrl(id), payload, config);
};
