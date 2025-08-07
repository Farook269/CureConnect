import React, { useContext, useState } from "react";
import { AdminContext } from "../context/AdminContext";
import axios from "axios";
import { toast } from "react-toastify";
import { DoctorContext } from "../context/DoctorContext";

const Login = () => {
  const [state, setState] = useState("Admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setAToken, backendUrl } = useContext(AdminContext);
  const { setDToken } = useContext(DoctorContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if (state === "Admin") {
        const { data } = await axios.post(backendUrl + "/api/admin/login", {
          email,
          password,
        });
        if (data.success) {
          localStorage.setItem("aToken", data.token);
          setAToken(data.token);
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(backendUrl + "/api/doctor/login", {
          email,
          password,
        });
        if (data.success) {
          localStorage.setItem("dToken", data.token);
          setDToken(data.token);
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error("Login failed. Please try again.");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden font-poppins">
      {/* Soft Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-teal-400 animate-soft-bg"></div>

      {/* Glassmorphic Form */}
      <form
        onSubmit={onSubmitHandler}
        className="relative bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-full max-w-sm sm:max-w-md flex flex-col gap-5 border border-white/20"
      >
        <p className="text-2xl font-semibold text-center text-white tracking-wide">
          <span className="text-teal-300">{state}</span> Login
        </p>

        {/* Input Fields */}
        <div className="w-full">
          <label className="text-gray-200 text-lg">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="border border-gray-300 rounded w-full p-2 mt-1 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-teal-300 transition-all placeholder-gray-300"
            type="email"
            required
            placeholder="Enter your email"
          />
        </div>
        <div className="w-full">
          <label className="text-gray-200 text-lg">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="border border-gray-300 rounded w-full p-2 mt-1 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-teal-300 transition-all placeholder-gray-300"
            type="password"
            required
            placeholder="Enter your password"
          />
        </div>

        {/* Login Button */}
        <button className="bg-teal-400 text-gray-900 w-full py-2 rounded-md text-base font-semibold hover:bg-teal-500 transition-all duration-300 shadow-md">
          Login
        </button>

        {/* Toggle Login Type */}
        {state === "Admin" ? (
          <p className="text-center text-gray-200 text-sm">
            Doctor Login?{" "}
            <span
              className="text-teal-300 underline cursor-pointer hover:text-teal-400 transition-all"
              onClick={() => setState("Doctor")}
            >
              Click here
            </span>
          </p>
        ) : (
          <p className="text-center text-gray-200 text-sm">
            Admin Login?{" "}
            <span
              className="text-teal-300 underline cursor-pointer hover:text-teal-400 transition-all"
              onClick={() => setState("Admin")}
            >
              Click here
            </span>
          </p>
        )}
      </form>

      {/* Custom Styles */}
      <style>
        {`
          @keyframes soft-bg {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-soft-bg {
            background-size: 200% 200%;
            animation: soft-bg 10s infinite ease-in-out;
          }
          .font-poppins {
            font-family: 'Poppins', sans-serif;
          }
        `}
      </style>
    </div>
  );
};

export default Login;