import React from "react";
import ProfileImg from "../imgs/Profile1.jpg"
import { Linkedin,Github } from 'lucide-react';
import { Instagram } from 'lucide-react';
import myPdf from '../PDF/KrishnaAlaspure2024.pdf'
import { Link } from "react-router-dom";
import ContactMe from "./ContactMe";


function FrontPage() {
  return (
    <div className="flex flex-wrap m-10 mb-40 justify-around items-center" id="frontpage">
        <div >
            <img className="rounded-full p-2 border border-gray-900 mt-10" src={ProfileImg} alt="" />
        </div>
        <div className=" mt-10 -ml-40  ">
            <div className="flex flex-col justify-center items-center ">
            <div ><p className="text-lg">Hello I'm</p></div> 
            <div><h1 className="text-5xl ">Krishna Alaspure</h1></div>
            <div><h1 className="text-3xl text-neutral-700">MERN Stack Developer</h1></div>
            
            </div>
            <div className="flex gap-6 justify-center items-center mt-5">
                <button className="bg-gradient-to-r from-orange-400 to-orange-900 border border-white rounded-md text-lg text-black px-2 hover:cursor-pointer ">
                <a href={myPdf} download="myFile">Download file</a>
                    </button>
                <button className="bg-gradient-to-r from-orange-400 to-orange-900 border border-white rounded-md text-lg text-black px-2"><a href='#contactme'>Contact Me</a></button>
            </div>
            <div className="flex justify-center mt-5">
                <div className="flex mx-6 h-100 rounded-lg text-blue-600 hover:cursor-pointer" >
                <a href="https://www.linkedin.com/in/krishna-alaspure-522373159/" target="_blank"><Linkedin size={40} /></a>
                </div>
                <div className="flex mx-6 h-100 rounded-lg hover:cursor-pointer" >
                <a href="https://github.com/KrishnaAlaspure" target="_blank"><Github size={40} href=""/></a>
                </div>
                <div className="flex mx-6 h-100 rounded-lg text-pink-800 hover:cursor-pointer" >
                <a href="https://www.instagram.com/krishvarshalas/?next=%2F" target="_blank"><Instagram size={40}/></a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default FrontPage;
