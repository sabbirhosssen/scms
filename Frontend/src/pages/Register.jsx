import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import homecaps from "../Images/homecap2.png";
import "../index.css";

const Register = () => {
  const [first_name, setName] = useState("");
  const [last_name, setLastname] = useState("");
  const [user_id, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleLastNameChange = (event) => {
    setLastname(event.target.value);
  };
  const handleStudentIdChange = (event) => {
    setUserId(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  axios.defaults.withCredentials = true;
  const handleSubmitRegister = (event) => {
    event.preventDefault(" ");
    axios
      .post("http://localhost:8081/api/student/register", {
        user_id,
        first_name,
        last_name,
        email,
        password,
      })
      .then((result) => {
        if (true === result?.data?.success) {
          navigate("/login");
        } else {
          navigate("/register");
          alert("wrong ! Do not submit information from Database");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="dashbord_bg bg-contain w-screen h-screen flex justify-center items-center">
      <div className=" border rounded-xl p-2">
        <div className="flex justify-center items-center gap-2">
          <img className="w-[40%]" src={homecaps} alt="" />
          <h6 className="text-4xl font-extrabold ...">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              SCMS
            </span>
          </h6>
        </div>
        <h6 className="flex justify-center items-center my-5 text-2xl font-extrabold ...">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Sign Up
          </span>
        </h6>

        <form onSubmit={handleSubmitRegister}>
          <div className="mb-4">
            <input
              type="text"
              name="text"
              id="text"
              placeholder="First Name "
              onChange={handleNameChange}
              className="border-2 border-[#000] rounded-xl px-2 py-1 w-72 "
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="text"
              id="text"
              placeholder="First Name "
              onChange={handleLastNameChange}
              className="border-2 border-[#000] rounded-xl px-2 py-1 w-72 "
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Student ID"
              onChange={handleStudentIdChange}
              className="border-2 border-[#000] rounded-xl px-2 py-1 w-72 "
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              onChange={handleEmailChange}
              className="border-2 border-[#000] rounded-xl px-2 py-1 w-72"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              autoComplete="on"
              onChange={handlePasswordChange}
              className="border-2 border-[#000] rounded-xl px-2 py-1 w-72"
            />
          </div>
          <button className="text-white font-semibold border hover:border-[#000] bg-[#6d88b3]  rounded-lg p-1 w-full">
            Sign Up
          </button>
        </form>
        <div className="text-center font-mono my-4">
          Already have account?{"  "}
          <Link to={"/login"} className="text-[#6d88b3]">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
