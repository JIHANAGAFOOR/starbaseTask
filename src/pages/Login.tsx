import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authActions } from "../store/slice/auth";
import TextInput from "../components/ui/TextInput";
import type { LoginDetails } from "../types/user";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginDetails, setLoginDetails] = useState<LoginDetails>({
    username: "",
    password: "",
  });

  const loginClickhandler = (e: React.FormEvent) => {
    e.preventDefault();

    const token = Math.random().toString(36).substring(2);
    dispatch(
      authActions.loginSuccess({
        token: token,
        username: loginDetails.username,
      })
    );
    navigate("/dashboard");
    setLoginDetails({ username: "", password: "" });
  };

  return (
    <div className=" dark:bg-gray-900 min-h-screen flex items-center justify-center transition-colors ">
      <div className="w-full max-w-md p-8 space-y-8 bg-white dark:bg-gray-800 rounded-lg shadow-2xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Login
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Login into your account
          </p>
        </div>
        <form onSubmit={loginClickhandler}>
          <TextInput
            name="username"
            type="text"
            value={loginDetails.username}
            onChange={(e) =>
              setLoginDetails({ ...loginDetails, username: e.target.value })
            }
            placeholder="Enter your username"
            label="Username"
          />
          <TextInput
            name="password"
            type="password"
            value={loginDetails.password}
            onChange={(e) =>
              setLoginDetails({ ...loginDetails, password: e.target.value })
            }
            placeholder="Enter your password"
            label="Password"
          />
          <div className="m-8">
            <button
              type="submit"
              className="w-full border-1 bg-blue-900 rounded-2xl h-12   text-white text-center"
            >
              {" "}
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
