import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  text: {
    type: "string",
    required: true,
  },
  user: {
    ref: "user",
    type: mongoose.Schema.Types.ObjectId,
  },
});

export const todoModel = mongoose.model("todo", TodoSchema);
