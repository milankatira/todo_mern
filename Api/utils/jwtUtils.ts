import jwt from "jsonwebtoken";
import { Types } from "mongoose";

export const createJWTToken = (userData: {
  _id: Types.ObjectId;
  email: string;
}) => {
  try {
    const token = jwt.sign(
      {
        id: userData._id,
        email: userData.email,
      },
      process.env.JWT_PRIVATE_KEY as unknown as string,
      { expiresIn: "30d" }
    );
    return token;
  } catch (error) {
    throw {
      errorMsg: "ERROR IN CREATING TOKEN",
    };
  }
};
