import { server_url } from "./../config/appConfig";
export const signInUrl = `${server_url}/signin`;
export const signUpUrl = `${server_url}/signup`;

export const todoUrl = `${server_url}/todo`;

export const singleTodoUrl = (id: string) => `${server_url}/todo/${id}`;
