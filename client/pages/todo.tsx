import React, { useEffect, useState } from "react";
import Todo from "../components/Todo";
import Router from "next/router";
import {
  addTodo,
  deleteTodo,
  getTodo,
  updateTodo,
} from "../service/Todo.service";
import { toast } from "react-hot-toast";

const todo = () => {
  const [text, settext] = useState("");
  const [todo, settodo] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      Router.push("/login");
    } else {
      getTodo().then((res) => settodo(res.data.data));
    }
  }, []);

  const handleSubmit = async () => {
    try {
      const data = await addTodo({ text });
      getTodo().then((res) => settodo(res.data.data));
      toast.success(data.data.message);
    } catch (err: any) {
      toast.error(err.response.data.message);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const data = await deleteTodo(id);
      await getTodo().then((res) => settodo(res.data.data));
      toast.success(data.data.message);
    } catch (err: any) {
      toast.error(err.response.data.message);
    }
  };

  const handleUpdate = async (id: string, textValue: string) => {
    try {
      const data = await updateTodo(id, { text: textValue });
      toast.success(data.data.message);
      await getTodo().then((res) => settodo(res.data.data));
    } catch (err: any) {
      toast.error(err.response.data.message);
    }
  };

  return (
    <div className="mx-auto flex justify-center flex-col items-center">
      {todo?.map((data, index) => (
        <Todo
          data={data}
          key={index}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
        />
      ))}
      <p>add todo</p>
      <input
        className="w-1/2 lg:w-1/3 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-4"
        type="text"
        value={text}
        onChange={(e) => settext(e.target.value)}
      />
      <button
        onClick={(e) => handleSubmit()}
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-4"
      >
        Submit
      </button>
    </div>
  );
};

export default todo;
