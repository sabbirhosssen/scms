import React from "react";
import { BsCalendarMonth, BsQuestionCircleFill } from "react-icons/bs";
import { ImLibrary } from "react-icons/im";
import { MdOutlineMessage } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { SiBasicattentiontoken, SiGoogleclassroom } from "react-icons/si";
import { Link } from "react-router-dom";
import dashboard_img from "../../../../Images/dashboard.png";
import homecap from "../../../../Images/homecap2.png";
import setting_img from "../../../../Images/setting.png";
import "../../../../index.css";

const Teacher_SideMenu = () => {
  return (
    <>
      <div className=" bg-white   rounded-e-2xl pb-5">
        <div className="flex justify-center items-center gap-2 mb-3 pt-4 px-4 pb-1">
          <img className="w-4/12" src={homecap} alt="" />
          <h6 className="text-3xl font-extrabold ...">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              SCMS
            </span>
          </h6>
        </div>
        <h6 className="text-2xl text-center font-extrabold pb-2 ...">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Teacher
          </span>
        </h6>
        <nav className="flex flex-col ">
          <div className=" hover:bg-blue-300 flex justify-items-start items-center gap-3 px-4 py-4 ps-[12%]">
            <img className="w-[11%]" src={dashboard_img} alt="" />
            <Link
              to={"/dashboard/teacher"}
              className="text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r  from-[#2B59CE] to-[#95aec5]"
            >
              DashBoard
            </Link>
          </div>
          <div className=" hover:bg-blue-300 flex justify-start items-center gap-3 px-4 py-4 ps-[12%]">
            <BsCalendarMonth className="text-2xl text-[#2B59CE]" />
            <Link
              to={"/dashboard/teacher/calender"}
              className="text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#2B59CE] to-[#95aec5]"
            >
              Calender
            </Link>
          </div>
          <div className=" hover:bg-blue-300 flex justify-start items-center gap-3 px-4 py-4 ps-[12%]">
            <ImLibrary className="text-2xl text-[#2B59CE]" />
            <Link
              to={"/dashboard/teacher/library"}
              className="text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#2B59CE] to-[#95aec5]"
            >
              Library
            </Link>
          </div>
          <div className=" hover:bg-blue-300 flex justify-start items-center gap-3 px-4 py-4 ps-[12%]">
            <SiGoogleclassroom className="text-2xl text-[#2B59CE]" />
            <Link
              to={"/dashboard/teacher/classroom"}
              className="text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#2B59CE] to-[#95aec5]"
            >
              Classroom
            </Link>
          </div>
          <div className=" hover:bg-blue-300 flex justify-start items-center gap-3 px-4 py-4 ps-[12%]">
            <SiBasicattentiontoken className="text-2xl text-[#2B59CE]" />
            <Link
              to={"/dashboard/teacher/courses"}
              className="text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#2B59CE] to-[#95aec5]"
            >
              Courses
            </Link>
          </div>
          <div className=" hover:bg-blue-300 flex justify-start items-center gap-3 px-4 py-4 ps-[12%]">
            <MdOutlineMessage className="text-2xl text-[#2B59CE]" />
            <Link
              to={"/dashboard/teacher/messages"}
              className="text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#2B59CE] to-[#95aec5]"
            >
              Messages
            </Link>
          </div>
          <div className=" hover:bg-blue-300 flex justify-start items-center gap-3 px-4 py-4 ps-[12%]">
            <BsQuestionCircleFill className="text-2xl text-gray-500" />
            <Link
              to={"/dashboard/teacher/help"}
              className="text-lg font-medium bg-clip-text text-gray-500"
            >
              Help
            </Link>
          </div>
          <div className=" hover:bg-blue-300 flex justify-start items-center gap-3 px-4 py-4 ps-[12%]">
            <img className="w-[11%]" src={setting_img} alt="" />
            <Link
              to={"/dashboard/teacher/satting"}
              className="text-lg font-medium bg-clip-text text-gray-500"
            >
              Satting
            </Link>
          </div>
          <div className=" hover:bg-blue-300 flex justify-start items-center gap-3 px-4 py-4 ps-[12%]">
            <RiLogoutCircleRLine className="text-2xl text-gray-500" />
            <Link
              to={"/"}
              className="text-lg font-medium bg-clip-text text-gray-500"
            >
              Log out
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Teacher_SideMenu;
