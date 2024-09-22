import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Dashboard/DashboardStudents/Header/Header";
import SideMenu from "../components/Dashboard/DashboardStudents/Header/SideMenu";
import "../index.css";
const DashBoard = () => {
  const location = useLocation();

  const first_name = location?.state?.first_name;
  const last_name = location?.state?.last_name;

  const paths_name = location?.pathname;

  return (
    <div className="dashbord_bg bg-contain w-[100%] h-full ">
      <div className="h-full grid grid-rows-6 grid-cols-12 gap-0">
        <div className="row-span-6  col-span-2 ...">
          <SideMenu />
        </div>
        <div className=" col-span-10 px-10 pt-10 ... ">
          <Header first_name={first_name} last_name={last_name} />
        </div>
        <div className="row-span-5 col-span-10 px-10 ...">
          <h2 className="mb-4 text-blue-400 font-semibold text-lg">
            {paths_name}
          </h2>
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
