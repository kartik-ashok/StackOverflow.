import React from "react";

const BottomLogo = () => {
  return (
    <div>
      <div className="ml-52 mb-16">
        <img
          src="https://cdn2.iconfinder.com/data/icons/social-icons-color/512/stackoverflow-1024.png"
          alt=""
          className="w-48 "
        />
        <h1 className="text-center mr-96 text-2xl mt-7 text-gray-500">
          Looking for more?
        </h1>
        <p className=" text-center w-[400px] -ml-[98px] font-semibold text-gray-500 mt-2">
          Browse the <span className="text-blue-700">completes</span>, or{" "}
          <span className="text-blue-700">popular tags</span>. Help us answer
          unAnswered questions
        </p>
      </div>
    </div>
  );
};

export default BottomLogo;
