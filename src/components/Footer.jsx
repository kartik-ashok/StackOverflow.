// Menu.js
import React from "react";
import { FaTwitter } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-gray-50 z-10 text-sm text-gray-400 py-8 ml-20 mr-20">
      <div className="container mx-auto   flex flex-wrap justify-between">
        <div className="flex items-center gap-60">
          <ul className="flex gap-5 ml-24">
            <li>About us</li>
            <li>tour</li>
            <li>help</li>
            <li> blog </li>
            <li>chart </li>
            <li>data </li>
            <li>legal</li>
            <li> privacy policy </li>
            <li>work here </li>
            <li>Advertising info</li>
            <li>mobile</li>
            <li>contact us</li>
            <li>Feedback</li>
          </ul>
          <ul className="flex gap-10 items-center">
            <li>
              <FaTwitter />
            </li>
            <li>
              <BsGlobe />
            </li>
            <li>
              <FaFacebook />
            </li>
          </ul>
        </div>

        {/* Add more menus as needed */}
      </div>
      <hr className="my-8 border-t border-gray-300" />
      <div className="container mx-auto grid grid-cols-12 gap-2">
        <div className="col-span-6 md:col-span-2  p-4">
          <ul className="ml-3">
            <li className="mb-2">Technology</li>
            <li>stack overflow</li>
            <li>server fault</li>
            <li>super user</li>
            <li>web application</li>
            <li>Ask Ubuntu</li>
            <li>game development</li>
            <li>Tex letex</li>
          </ul>
        </div>
        <div className="col-span-6 md:col-span-2  p-4">
          <ul className="mb-2">
            <li className="mb-2">Programmers</li>
            <li>Unix and Linux</li>
            <li>ask different </li>
            <li>Apple </li>
            <li>Wordpress Developmen</li>
            <li> Geographical Information System</li>
            <li>Electrical Engineering</li>
            <li>Android enthusiast</li>
          </ul>
        </div>
        <div className="col-span-6 md:col-span-2  p-4">
          <ul>
            <li className="mb-2">Life and arts</li>
            <li>photography</li>
            <li> science fiction and fantasy </li>
            <li>graphic design</li>
            <li>movies and tv season advice cooking</li>
            <li>home improvement</li>
            <li>personal finance and money</li>
          </ul>
        </div>
        <div className="col-span-6 md:col-span-2  p-4">
          <ul>
            <li className="mb-2">Culture and reception</li>
            <li>English language and usage</li>
            <li>sceptics</li>
            <li>Judaism travel </li>
            <li>bicycles gaming</li>
            <li>Gaming</li>
          </ul>
        </div>
        <div className="col-span-6 md:col-span-2  p-4">
          <ul>
            <li className="mb-2">Culture and reception</li>
            <li>English language and usage</li>
            <li>sceptics</li>
            <li>Judaism travel </li>
            <li>bicycles gaming</li>
            <li>Gaming</li>
          </ul>
        </div>
        <div className="col-span-6 md:col-span-2  p-4">
          <ul>
            <li className="mb-2">Science</li>
            <li>mathematics</li>
            <li>cross validated</li>
            <li>theoretical computer science</li>
            <li> physics</li>
            <li> maths overflow </li>
            <li> chemistry biology</li>
          </ul>
        </div>
        {/* <hr className="my-8 border-t border-gray-300" /> */}
      </div>
    </footer>
  );
};

const Menu = ({ title, children }) => {
  return (
    <div className="flex flex-col">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <div className="space-y-2">{children}</div>
    </div>
  );
};

const MenuItem = ({ children }) => {
  return (
    <a
      href="#"
      className="text-gray-400 hover:text-white transition duration-300"
    >
      {children}
    </a>
  );
};

export default Footer;
