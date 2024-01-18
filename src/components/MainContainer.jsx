import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { FaRegCommentAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { STACKOVERFLOW_API } from "../utils/Constantas";

const MainContainer = ({ data }) => {
  console.log(data);
  //   console.log(data.title);
  return (
    <div className=" -ml-12 mr-10 w-5/12">
      <div>
        <div className="flex  items-center gap-40 ">
          <div className="flex flex-col w-80 gap-3 ">
            <h1 className="text-blue-600 font-semibold text-lg w-96 pl-2">
              {data.title}
            </h1>
            <ul className="flex gap-3">
              {data.tags.map((tag) => (
                <li className="border text-gray-400 rounded-full px-3">
                  {tag}
                </li>
              ))}
            </ul>
            <div className="flex items-center w-[500px] text-sm gap-3">
              <span className="text-orange-600 bg-white border border-gray-400 p-1.5 rounded-full">
                <FaEdit />
              </span>
              <p className="text-gray-500">
                {"modified" +
                  Math.floor(data.last_edit_date / (60 * 60 * 1000 * 24)) +
                  " min ago"}
              </p>
              <p className="font-semibold">
                {data.owner.display_name + " " + data.score}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-8 ml-10 ">
            <div className="flex flex-col items-center gap-3">
              <p>0</p>
              <p>votes</p>
              <FaThumbsUp />
            </div>
            <div className="flex flex-col items-center gap-3">
              <p>{data.comment_count}</p>
              <p>Comments</p>
              <FaRegCommentAlt />
            </div>
            <div className="flex flex-col items-center gap-3">
              <p>{data.answer_count}</p>
              <p>Answers</p>
              <FaEye />
            </div>
          </div>
        </div>
      </div>
      <hr className="my-6 w-[800px] " />
    </div>
  );
};

export default MainContainer;
