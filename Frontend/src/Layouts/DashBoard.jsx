import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Dashboard/DashboardStudents/Header/Header";
import SideMenu from "../components/Dashboard/DashboardStudents/Header/SideMenu";
import "../index.css";
const DashBoard = () => {
  return (
    <div className="dashbord_bg bg-contain w-[100%] h-full ">
      <div className="h-full grid grid-rows-6 grid-cols-12 gap-0">
        <div className="row-span-6  col-span-2 ...">
          <SideMenu />
        </div>
        <div className=" col-span-10 px-10 pt-10 ... ">
          <Header />
        </div>
        <div className="row-span-5 col-span-10 px-10 ...">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
{
  /* <div className="w-3/12 ">
          <SideMenu />
        </div>
        <div className="w-9/12 px-[6%] pt-6">
          <Header />
        </div> */
}
export default DashBoard;
