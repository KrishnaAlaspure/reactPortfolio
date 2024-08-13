import React from "react";
import INFY from "../imgs/INFY.png";
import { GitCommitHorizontal } from "lucide-react";

function Experience() {
  return (
    <div className="flex flex-col m-20" id="experience">
      <div className="flex flex-col justify-center items-center mt-20 mb-10">
        <p className="text-lg text-neutral-400">Get to know more!</p>
        <h1 className="text-5xl font-semibold ">Experience</h1>
      </div>
      <div className="flex flex-col md:flex-row justify-around items-center ">
        <div className="">
          <img src={INFY} alt="Infosys" className="h-40 w-90 rounded-lg p-2" />
        </div>
        <GitCommitHorizontal size={70}/>
        <div className="flex flex-col w-3/4 items-center justify-center  p-10 my-10">
          <h1 className="text-3xl font-bold">Infosys Pvt. Ltd.(Pune)</h1>
          <p className="text-2xl text-neutral-400 font-semibold"> Senior System Engineer</p>
          <p className="text-xl text-neutral-400"> Joined on 21st June 2021</p>
          <p className="text-lg ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum iusto
            perspiciatis, quasi beatae voluptatibus repellat reiciendis, facere
            laudantium deleniti fugiat quis, magnam quas! Veniam harum suscipit
            ipsum explicabo illum voluptates!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam vero ut aliquam, placeat magni minus in maxime distinctio ipsam quasi. Itaque ut beatae ipsam molestiae officiis nisi nesciunt harum temporibus?</p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
