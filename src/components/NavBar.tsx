"use client";
import React from "react";
import { BiMenuAltLeft } from "react-icons/bi";

const NavBar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-40 flex justify-between items-center px-10 md:px-14 py-2 w-full bg-black-200 border-b border-b-white-[0.1] ">
      <div>
        <h1 className="text-xl md:text-2xl font-serif font-bold text-purple">
          Aung Myo Aye
        </h1>
      </div>
      <div className="hidden md:flex gap-4 md:gap-6 items-center text-xl ">
        <a
          href="#projects"
          className="hover:text-purple hover:underline hover:underline-offset-8 transition-all duration-150 ease-in-out"
        >
          Projects
        </a>
        <a
          href="#education"
          className="hover:text-purple hover:underline hover:underline-offset-8 transition-all duration-150 ease-in-out"
        >
          Education
        </a>
        <a
          href="#about"
          className="hover:text-purple hover:underline hover:underline-offset-8 transition-all duration-150 ease-in-out"
        >
          About
        </a>
        <a
          href="#contact"
          className="hover:text-purple hover:underline hover:underline-offset-8 transition-all duration-150 ease-in-out"
        >
          Contact
        </a>
      </div>
      <div className="block md:hidden">
        <div className="size-10 rounded-full border border-white-[0.1] hover:border-purple cursor-pointer flex items-center justify-center text-white hover:text-purple">
          <BiMenuAltLeft className="text-xl " />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
