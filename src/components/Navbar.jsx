import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleFunction = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full h-[90px] bg-black">
      <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
        <div>
          <h1 className="text-[#5297f0]">Bekh inc.</h1>
        </div>
        <div className="hidden md:flex">
          <ul className="flex text-white items-center ">
            <li>
              <a href="#">Platform</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <button className="ml-4 bg-sky-800">Create</button>
          </ul>
        </div>
        <div onClick={handleFunction} className="block md:hidden">
          {nav ? (
            <AiOutlineMenu size={40} className="text-white" />
          ) : (
            <AiOutlineClose size={40} className="text-white" />
          )}
        </div>
        <div
          className={
            nav
              ? "w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center"
              : "absolute left-[-100%]"
          }
        >
          <ul>
            <li className="text-2xl">Platform</li>
            <li className="text-2xl">Developers</li>
            <li className="text-2xl">Comunity</li>
            <li className="text-2xl">About</li>
            <button className="m-8">Create</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
