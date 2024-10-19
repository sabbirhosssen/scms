import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";
const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        className=" active:bg-blue-500 active:text-white ps-2 pe-4 py-0 rounded-md focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </button>
      {isOpen ? (
        <div className="  px-3 py-0 rounded-2xl gap-1">
          <Link to={"/adminLogin"} className=" text-md font-bold text-[#000]">
            Admin
          </Link>
        </div>
      ) : (
        <div className="  pe-2 py-0 rounded-2xl gap-1">
          <Link to={"/teacherLogin"} className=" text-md font-bold text-[#000]">
            Login as a Teacher
          </Link>
        </div>
      )}
    </>
  );
};

export default Accordion;
