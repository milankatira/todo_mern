import { signInUrl, signUpUrl } from "../constant/urlConstant";
import axios from 'axios';
export const signuInService = async(payload: {
  email: string;
  password: string;
}) => {
  return await axios.post(signInUrl, payload);
};


export const signUpService = async (payload: {
  email: string;
  password: string;
}) => {
 return await axios.post(signUpUrl, payload);
};
