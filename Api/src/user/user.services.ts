import { createJWTToken } from "../../utils/jwtUtils";
import { userModel } from "./user.model";
import bcrypt from "bcrypt";
export const createUserService = async (payload: {
  email: string;
  password: string;
}) => {
  try {
    const user = await userModel.findOne({ email: payload.email });
    if (user) {
      throw new Error(`User ${user.email} already exists`);
    }
    const hashpassword = await bcrypt.hash(payload.password, 10);
    const data = {
      ...payload,
      password: hashpassword,
    };
    const userData = await userModel.create(data);
    const result = JSON.parse(JSON.stringify(userData));
    result.token = createJWTToken(userData);
    delete result.password;

    return result;
  } catch (err: any) {
    throw new Error(err.message);
  }
};


export const signInUserService = async (payload: {
  email: string;
  password: string;
}) => {
  try {
    const user = await userModel.findOne({ email: payload.email }).select('+password');
    if (!user) {
      throw new Error(`User not found with email: ${payload.email}`);
    }
    const comparePassword = await bcrypt.compare(payload.password, user.password);
    if(!comparePassword){
      throw new Error("email or password incorrect")
    }
    const result = JSON.parse(JSON.stringify(user));
    result.token = createJWTToken(user);
    delete result.password;
    return result;
  } catch (err: any) {
    throw new Error(err.message);
  }
}
