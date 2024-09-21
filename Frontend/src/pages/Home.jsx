import React from "react";
import { Link } from "react-router-dom";
import home_background from "../Images/background_home.png";
import homeimg from "../Images/home1.png";
import homecap from "../Images/homecap2.png";
const Home = () => {
  const background_homes = {
    backgroundImage: ` url(${home_background})`,

    backgroundSize: "100% 100vh",
    // backgroundRepeat: "no-repeat",
  };
  return (
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
        <h2 className=" mb-8 text-center text-xl font-bold font-mono">
          {" "}
          Smart Campus Management System
        </h2>
        <div className="flex justify-center items-center gap-4">
          <button className="border-[#000] border-2 px-3 py-2 rounded-2xl text-md text-white bg-[#2525AD]">
            <Link to={"/login"}>Login as a Student</Link>
          </button>
          <button className="border-[#000] border-2 px-3 py-2 rounded-2xl text-md font-bold text-[#000]">
            Login as a Teacher
          </button>
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
  );
};

export default Home;
