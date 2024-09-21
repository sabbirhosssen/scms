import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import home_background from "../Images/background_home.png";
import homeimg from "../Images/home1.png";
import homecap from "../Images/homecap2.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  axios.defaults.withCredentials = true;
  const handleSubmitlogin = (event) => {
    event.preventDefault(" ");
    axios
      .post("http://localhost:8081/api/student/login", { email, password })
      .then((result) => {
        if (
          email === result?.data?.alldata[0]?.email &&
          password === result?.data?.alldata[0]?.password
        ) {
          navigate("/dashboard/user");
        } else {
          navigate("/");
          alert("wrong information");
        }
      })
      .catch((err) => console.log(err));

    //result.data.alldata[0].email
  };
  const background_homes = {
    backgroundImage: ` url(${home_background})`,

    backgroundSize: "100% 100vh",
    // backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <div className="flex justify-between items-center gap-0 ">
        <div className="w-[45%] p-4">
          <div className="flex justify-center items-center gap-2">
            <img className="" src={homecap} alt="" />
            <h6 className="text-5xl font-extrabold ...">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                SCMS
              </span>
            </h6>
          </div>
          <h2 className=" mb-8 text-center font-mono text-xl font-bold">
            {" "}
            Smart Campus Management System
          </h2>
          <div className="mx-[18%] mb-[20%]">
            <form onSubmit={handleSubmitlogin}>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                onChange={handleEmailChange}
                className="block border-2 border-[#000] hover:border-[#6d88b3] rounded-lg p-2 w-full mb-2"
              />

              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                autoComplete="on"
                onChange={handlePasswordChange}
                className="block border-2 border-[#000] hover:border-[#6d88b3] rounded-lg p-2 w-full mb-4"
              />
              <button className="text-white font-semibold border border-[#000] bg-[#6d88b3] hover:border-[#6d88b3] rounded-lg p-1 w-full">
                Login
              </button>
            </form>
            <div className="text-center font-mono my-2">
              New to SCMS?{"  "}
              <Link to={"/register"} className="text-[#6d88b3]">
                Register!
              </Link>
            </div>
          </div>
        </div>
        <div className="w-[55%]  my-0  mr-0 ">
          <div className="  bg-no-repeat mt-0 mb-0" style={background_homes}>
            <img
              className="w-auto min-h-screen ps-32"
              src={homeimg}
              alt="image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
