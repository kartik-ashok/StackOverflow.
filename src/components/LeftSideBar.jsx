import React from "react";
import { GrLocation } from "react-icons/gr";
import { FaGlobeAmericas } from "react-icons/fa";
import BottomLeftNav from "./BottomLeftNav";
const LeftSideBar = () => {
  return (
    <div className="w-3.5/12 shadow-lg  mt-20 bg-gray-50">
      <div className="m-10">
        <h1 className="text-gray-500 text-xl font-semibold ">
          Looking for job....
        </h1>
      </div>
      <div className="m-10 pl-6">
        <ul>
          <li>
            <h1 className="20 text-sky-600 font-semibold text-lg">
              Front End Developer with angualr
            </h1>
            <p className="text-gray-400">whitefield</p>
            <div className="flex items-center gap-10 text-gray-400">
              <div className="flex items-center gap-2">
                <GrLocation />
                <p className="py-2">Bengaluru,india</p>
              </div>
              <div className="flex items-center gap-2">
                <FaGlobeAmericas />
                <p>Remote</p>
              </div>
            </div>
            <div className="flex items-center gap-10 text-gray-400">
              <p className="border px-10 rounded-full">java</p>
              <p className="border px-10 rounded-full">Python</p>
            </div>

            <hr className="my-6 border-gray-300" />
          </li>

          <li>
            <h1 className="20 text-sky-600 font-semibold text-lg">
              Front End Developer with angualr
            </h1>
            <p className="text-gray-400">whitefield</p>
            <div className="flex items-center gap-10 text-gray-400">
              <div className="flex items-center gap-2">
                <GrLocation />
                <p className="py-2">Bengaluru,india</p>
              </div>
              <div className="flex items-center gap-2">
                <FaGlobeAmericas />
                <p>Remote</p>
              </div>
            </div>
            <div className="flex items-center gap-10 text-gray-400">
              <p className="border px-10 rounded-full">java</p>
              <p className="border px-10 rounded-full">Python</p>
            </div>

            <hr className="my-6  border-gray-300" />
          </li>
        </ul>
      </div>
      <BottomLeftNav />
    </div>
  );
};

export default LeftSideBar;
