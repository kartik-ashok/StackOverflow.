import React from "react";

const MainContentNavbar = () => {
  return (
    <div className="-ml-10">
      <div className="">
        <ul className="flex gap-10">
          <li className="border rounded-full px-5 ">Intresting</li>
          <li className="flex gap-2">
            <p>Featured</p> <p className="border rounded-full px-5 ">455</p>
          </li>
          <li className="border rounded-full px-5 ">Hot</li>
          <li className="border rounded-full px-5 ">Week</li>
          <li className="border rounded-full px-5 ">Month</li>
        </ul>
      </div>
      <hr className="my-5 w-[800px]" />
    </div>
  );
};

export default MainContentNavbar;
