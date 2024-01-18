import React from "react";
import { FaCommentAlt } from "react-icons/fa";
import { BsStackOverflow } from "react-icons/bs";
import { IoBookmarkSharp } from "react-icons/io5";
import { PiFlyingSaucerLight } from "react-icons/pi";
import { CiLocationArrow1 } from "react-icons/ci";
import { FaAngleRight } from "react-icons/fa6";

const BottomLeftNav = () => {
  return (
    <div className="pr-20 text-sky-600 font-semibold items-center">
      <h1 className="text-gray-400 text-lg mb-5 ml-5 ">Network questions</h1>
      <div className="flex items-center gap-5 ml-10">
        <FaCommentAlt className="w-10" />
        <p>Were there women who were against giving women the right to vote?</p>
      </div>
      <div className="flex items-center gap-5 ml-10 mt-5">
        <BsStackOverflow className="w-10" />
        <p>Why does everybody typedef over standard C types?</p>
      </div>
      <hr className="mt-5 ml-20 " />
      <div className="flex items-center gap-5 ml-10 mt-5">
        <IoBookmarkSharp className="w-10 to-orange-500" />
        <p>An English word describing a pseudo-job</p>
      </div>
      <div className="flex items-center gap-5 ml-10 mt-5">
        <PiFlyingSaucerLight className="w-20" />
        <p>
          When flying on a very tight schedule, are you obligated to run to make
          it to the next gate on a connection?
        </p>
      </div>
      <div className="flex items-center gap-5 ml-10 mt-5">
        <CiLocationArrow1 className="w-10" />
        <p>Does 1 pixel have a standard size?</p>
      </div>

      <div className="flex items-center gap-5 ml-3 mb-5 mt-5">
        <p>VIEW ALL JOBS</p>
        <FaAngleRight />
      </div>
    </div>
  );
};

export default BottomLeftNav;
