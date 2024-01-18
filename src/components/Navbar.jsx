import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { TbTournament } from "react-icons/tb";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="flex items-center  mt-5 fixed">
      {/* <TimeConversion /> */}
      <nav className="flex items-center justify-evenly gap-36 ">
        <ul className="flex items-center  gap-5">
          <li>
            <GiHamburgerMenu />
          </li>
          <li className="flex items-center gap-3">
            <IoSearchSharp />{" "}
            <input
              type="text"
              placeholder="Search"
              className="w-96 bg-gray-100 rounded-full p-2 bg-none outline-none "
            />
          </li>
        </ul>

        <ul className="flex items-center pl-60 gap-16">
          <li className="">
            <IoIosHelpCircleOutline />
          </li>
          <li>
            <TbTournament />
          </li>
          <li className="flex items-center">
            <span>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu-JoI3n94cRa4mbw1hD6g_6hvqEZaIWs7pfms0triMGJvpaBgy-epjUIxxELQBvj1YzE&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu-JoI3n94cRa4mbw1hD6g_6hvqEZaIWs7pfms0triMGJvpaBgy-epjUIxxELQBvj1YzE&usqp=CAU"
                alt=""
                className="w-8 rounded-full "
              />
            </span>
            <RiArrowDropDownLine className="w-8 h-8" />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
