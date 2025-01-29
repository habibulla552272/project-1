import React, { useState } from "react";
import logo from "../assets/large-removebg-preview.png";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  let [basesArrow, stateBasesArrow] = useState(true);

  let BasesArrow = () => {
    stateBasesArrow(!basesArrow);
  };

  return (
    <section>
      <div className="container mx-auto">
        <div className=" flex justify-between h-[50px]">
          <div className=" w-[20%]">
            <img className="h-[70px] object-cover" src={logo} alt="Logo" />
          </div>
          <div className="flex list-none justify-between w-[60%] items-center">
            <li>
              <Link to="">Home</Link>
            </li>
            <li
              onClick={BasesArrow}
              className="flex items-center gap-1 justify-center cursor-pointer "
            >
              Buses
              {basesArrow ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </li>

            <li></li>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
