import React from "react";
import ProfileImg from "../imgs/Profile1.jpg";
import { BriefcaseBusiness } from "lucide-react";
import { GraduationCap } from "lucide-react";

function AboutMe() {
  return (
    < >
      <div className="my-20" id="about">
      <div className="flex flex-col justify-center items-center m-20">
        <p className="text-lg text-neutral-400">Get to know more!</p>
        <h1 className="text-5xl font-semibold ">About Me</h1>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap justify-center">
        <div className="flex w-1/3">
          <img className="w-full rounded-lg" src={ProfileImg} alt="" />
        </div>
        <div className="flex flex-col w-1/2 justify-center gap-10 items-center  ">
          <div className="flex flex-col md:flex-row gap-10 justify-between items-center">
            <div className="flex flex-col justify-center items-center p-2 border border-neutral-400 rounded-xl">
              <BriefcaseBusiness size={30} />
              <h1 className="text-xl font-semibold">Experience</h1>
              <p className="text-lg text-neutral-400 font-medium">2+ Years</p>
              <p className="text-lg text-neutral-400 font-medium">Front End Developer</p>
            </div>
            <div className="flex flex-col justify-center items-center p-2 border border-neutral-400 rounded-xl">
              <GraduationCap size={30} />
              <h1 className="text-xl font-semibold">Education</h1>
              <p className="text-lg text-neutral-400 font-medium">EnTC</p>
              <p className="text-lg text-neutral-400 font-medium">SGBAU University AMT</p>
            </div>
          </div>
          <div className="flex  items-center justify-center  w-2/3">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quam ducimus architecto id beatae animi corrupti dolorem quos. Maxime libero quas illo magnam quibusdam nemo laborum ea excepturi harum ratione. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam numquam repellat eius sequi autem tempora, labore omnis animi suscipit laboriosam accusamus voluptates, minus quis at illo alias expedita rerum deleniti.</p>
          </div>
        </div>
      </div>
</div>    </>
  );
}

export default AboutMe;
