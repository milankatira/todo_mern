import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  password: {
    type: "string",
    required: true,
    select:false
  },
  email: {
    type: "string",
    required: true,
  },
});

export const userModel = mongoose.model("User", UserSchema);
