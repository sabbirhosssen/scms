import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Dashboard/DashboardStudents/Header/Header";
import SideMenu from "../components/Dashboard/DashboardStudents/Header/SideMenu";
// import UserProvider from "../context/UserContext";
import "../index.css";

const DashboardProvider = () => {
  const location = useLocation();

  const first_name = location?.state?.first_name;
  const last_name = location?.state?.last_name;

  const paths_name = location?.pathname;
  return (
    <div>
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
            {/* <UserProvider> */}
            <Outlet />
            {/* </UserProvider> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardProvider;
