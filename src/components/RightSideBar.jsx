import React from "react";
import { MdOutlineQuestionMark } from "react-icons/md";
import { FaInbox, FaSave, FaShoppingBag, FaTags } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaBagShopping, FaTag } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { IoMdSave } from "react-icons/io";
import { MdMoveToInbox } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa";
const RightSideBar = () => {
  return (
    <div className="flex flex-col shadow-lg mr-28 w-2/12 p-12">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlfVZsgGKREb2ao7dGfy0p3rDRUa6qooXGe88C7tfMXQ&s"
        alt=""
        className="w-56"
      />
      <ul className=" flex flex-col gap-10 ">
        <li className=" flex gap-5 items-center">
          <MdOutlineQuestionMark /> <p>Questions</p>
        </li>
        <li className="flex gap-5 items-center">
          <FaBagShopping /> <p>Jobs</p>
        </li>
        <li className=" flex gap-5 items-center">
          <FaTags /> <p>Tags</p>
        </li>
        <li className=" flex gap-5 items-center">
          <FaUser /> <p>User</p>
        </li>
        <li className=" flex gap-5 items-center">
          <FaSave /> <p>Badges</p>
        </li>

        <li className=" flex gap-5 items-center">
          <FaMicrophone />
          <p>Ask Questions</p>
        </li>
        <li className=" flex gap-5">
          <FaTag /> <p>Stacl Exchange</p>
        </li>
        <li className=" flex gap-5 items-center">
          <FaInbox />
          <p>Inbox</p>
        </li>
      </ul>
    </div>
  );
};

export default RightSideBar;
