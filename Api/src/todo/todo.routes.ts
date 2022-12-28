import {
  createTodoController,
  deleteTodoController,
  getAllTodoController,
  updateTodoController,
} from "./todo.controller";
import express from "express";
import { validateTODO } from "./todo.validation";
import { Auth } from "../../middleware/Auth";

const router = express.Router();

router.post("/todo", Auth, validateTODO, createTodoController);
router.get("/todo", Auth, getAllTodoController);
router.delete("/todo/:id", Auth, deleteTodoController);
router.put("/todo/:id", Auth, validateTODO, updateTodoController);
export default router;
