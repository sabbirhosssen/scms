import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";
const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        className=" active:bg-blue-500 active:text-white px-4 py-2 rounded-md focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </button>
      {isOpen && (
        <div className=" border-[#000] border-2 px-3 py-2 rounded-2xl gap-2">
          <Link to={"/adminLogin"} className=" text-md font-bold text-[#000]">
            Admin
          </Link>
        </div>
      )}
    </>
  );
};

export default Accordion;
