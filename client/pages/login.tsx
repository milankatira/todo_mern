import React, { useEffect, useState } from "react";
import { signuInService } from "../service/Auth.service";
import { toast } from "react-hot-toast";
import Router from "next/router";

const login = () => {
  useEffect(() => {
    if (localStorage.getItem("user")) {
      Router.push("/todo");
    }
  }, []);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const [userData, setuserData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async () => {
    try {
      if (!email || !password) {
        toast.error("Please fill all data");
      }
      const data = await signuInService({ email, password });
      toast.success(data.data.message);
      localStorage.setItem("user", data.data.data.token);
      Router.push("/todo");
    } catch (err: any) {
      toast.error(err.response.data.message);
    }
  };

  return (
    <div>
      <section className="text-gray-600 body-font flex">
        <div className="container px-5 py-24 w-1/3 mx-auto flex flex-col sm:flex-nowrap flex-wrap">
          <input
            autoComplete="true"
            type="email"
            name="email"
            value={userData.email}
            onChange={(e) =>
              setuserData({ ...userData, email: e.target.value })
            }
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
          <input
            value={userData.password}
            onChange={(e) =>
              setuserData({ ...userData, password: e.target.value })
            }
            autoComplete="true"
            type="password"
            className="mt-4 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
          <button
            onClick={(e) => handleSubmit()}
            className="mt-4 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Submit
          </button>
        </div>
      </section>
    </div>
  );
};

export default login;
