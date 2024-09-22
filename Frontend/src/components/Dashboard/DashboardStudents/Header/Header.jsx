import React from "react";
import { CgProfile } from "react-icons/cg";
import { FaRegBell } from "react-icons/fa6";
import { GoMail } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
const Header = (props) => {
  console.log(props?.first_name);

  return (
    <div className="flex justify-between items-center gap-4">
      <div className="w-6/12 ">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search"
          className="border border-[#000] hover:border-transparent active:border-transparent rounded-xl p-1  w-[100%]"
        />
      </div>
      <div className="w-2/12 ">
        <div className="text-blue-400 flex justify-center gap-3">
          <FaRegBell />
          <GoMail />
        </div>
      </div>
      <div className="4/12 flex gap-2 items-center">
        <CgProfile />
        <h6 className="text-sm flex justify-center items-center gap-2">
          <span>{props?.first_name}</span>
          <span>{props?.last_name}</span>
        </h6>
        <IoIosArrowDown />
      </div>
    </div>
  );
};

export default Header;
