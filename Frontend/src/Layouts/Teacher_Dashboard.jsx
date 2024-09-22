import React from "react";
import { Outlet } from "react-router-dom";
import Teacher_Header from "../components/Dashboard/TeacherDashboard/TeacherHeader/Teacher_Header";
import Teacher_SideMenu from "../components/Dashboard/TeacherDashboard/TeacherHeader/Teacher_SideMenu";
import "../index.css";

const Teacher_Dashboard = () => {
  return (
    <>
      <div className="dashbord_bg bg-contain w-[100%] h-full ">
        <div className="h-full grid grid-rows-6 grid-cols-12 gap-0">
          <div className="row-span-6  col-span-2 ...">
            <Teacher_SideMenu />
          </div>
          <div className=" col-span-10 px-10 pt-10 ... ">
            <Teacher_Header />
          </div>
          <div className="row-span-5 col-span-10 px-10 ...">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Teacher_Dashboard;
