import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { backendUrl, token, setToken } = useContext(AppContext);
  const navigate = useNavigate();

  const [state, setState] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (state === "Sign Up") {
        const { data } = await axios.post(backendUrl + "/api/user/register", { name, password, email });
        if (data.success) {
          localStorage.setItem("token", data.token);
          setToken(data.token);
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(backendUrl + "/api/user/login", { password, email });
        if (data.success) {
          localStorage.setItem("token", data.token);
          setToken(data.token);
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100 relative">
      <h1 className="absolute top-10 text-5xl font-bold text-black-600 opacity-10">CureConnect</h1>
      <form onSubmit={onSubmitHandler} className="bg-gray-200 p-8 rounded-2xl shadow-md w-96 transition-all hover:shadow-lg hover:scale-105 relative z-10">
        <p className="text-3xl font-bold text-gray-800 mb-2">{state === "Sign Up" ? "Create Account" : "Login"}</p>
        <p className="text-gray-600 mb-4">Please {state === "Sign Up" ? "sign up" : "log in"} to book an appointment</p>
        {state === "Sign Up" && (
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Full Name</label>
            <input
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Password</label>
          <input
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>

        <button type="submit" className="w-full py-3 rounded-lg bg-gray-700 text-white text-lg font-semibold hover:bg-gray-800 transition-all">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </button>

        <p className="text-center mt-4 text-gray-600">
          {state === "Sign Up" ? (
            <>Already have an account? <span onClick={() => setState("Login")} className="text-gray-800 font-semibold cursor-pointer hover:underline">Login here</span></>
          ) : (
            <>Create a new account? <span onClick={() => setState("Sign Up")} className="text-gray-800 font-semibold cursor-pointer hover:underline">Click here</span></>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
