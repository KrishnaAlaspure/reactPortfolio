import React from "react";
import { Link } from "react-router-dom";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import ContactMe from "./ContactMe";

function NavBar() {
  return (
    <nav className=" sticky top-0 z-50 py-3 background-blur-lg  border-nertral-700/80 ">
      <div className="flex mt-10 justify-around items-center text-2xl">
        <div className=" ml-5 hover:text-neutral-400 cursor-pointer "> <a href='#frontpage'>Krishna Alaspure</a></div>
        <div className="ml-10">
          <ul className="flex flex-row gap-8 ml-14 ">
            <li className="hover:text-neutral-400 cursor-pointer "><a href="#about">About</a></li>
            <li className="hover:text-neutral-400 cursor-pointer"><a href='#experience'>Experience</a></li>
            <li className="hover:text-neutral-400 cursor-pointer"><a href='#projects'>Projects</a></li>
            <li className="hover:text-neutral-400 cursor-pointer"><a href='#skills'>Skills</a></li>
            <li className="hover:text-neutral-400 cursor-pointer"><a href='#contactme'>Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
