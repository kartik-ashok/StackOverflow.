import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import MainContainer from "./MainContainer";
import { STACKOVERFLOW_API } from "../utils/Constantas";
import MainContentNavbar from "./MainContentNavbar";
import BottomLogo from "./BottomLogo";

const Body = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    datafetch();
  }, []);

  const datafetch = async () => {
    try {
      const data = await fetch(STACKOVERFLOW_API);
      const json = await data.json();
      console.log(json);
      setData(json);
    } catch (err) {
      console.error(err, "Wrong Wrong");
    }
  };

  // const questionData =
  //   data && data.items && data.items.length > 2 ? data.items : null;

  const questionData =
    data && data.items && data.items.length > 2 ? data.items : [];

  console.log(questionData.title);
  return (
    <div>
      <Navbar />
      <h1 className=" mt-28 mb-10 -ml-10 text-xl text-gray-400 ">Questions</h1>
      <MainContentNavbar />
      {questionData.map((item) => (
        <MainContainer key={item.question_id} data={item} />
      ))}
      <BottomLogo />
      {/* <MainContainer /> */}
    </div>
  );
};

export default Body;
