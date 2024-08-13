import React from "react";
import { CircleCheckBig } from "lucide-react";
function Skills() {
  return (
    <div className="" id="skills">
      <div className="flex flex-col justify-center items-center m-20">
        <p className="text-lg text-neutral-400">Get to know more!</p>
        <h1 className="text-5xl font-semibold ">About Skills</h1>
      </div>
      <div className="flex flex-col md:flex-row justify-around items-center m-10 gap-10">
        <div className="w-1/2 border border-neutral-400 rounded-xl ">
          <h1 className="text-center text-3xl m-5 text-neutral-300">
            FrontEnd Developement
          </h1>
          <div className="flex flex-col md:flex-row w-full justify-around items-center">
            <div className="flex flex-col gap-6 justify-around">
              <div className="flex ">
                <CircleCheckBig size={45} />
                <h1 className="text-2xl ml-4">
                  HTML <br />
                  <span className="text-xl text-neutral-400">Experienced</span>
                </h1>
              </div>
              <div className="flex ">
                <CircleCheckBig size={45} />
                <h1 className="text-2xl ml-4">
                  CSS <br />
                  <span className="text-xl text-neutral-400">Experienced</span>
                </h1>
              </div>
              <div className="flex ">
                <CircleCheckBig size={45} />
                <h1 className="text-2xl ml-4">
                  JavaScript <br />
                  <span className="text-xl text-neutral-400">Experienced</span>
                </h1>
              </div>
            </div>
            <div className="flex flex-col gap-6 justify-around">
              <div className="flex ">
                <CircleCheckBig size={45} />
                <h1 className="text-2xl ml-4">
                  Tailwind CSS <br />
                  <span className="text-xl text-neutral-400">Experienced</span>
                </h1>
              </div>
              <div className="flex ">
                <CircleCheckBig size={45} />
                <h1 className="text-2xl ml-4">
                  ReactJS <br />
                  <span className="text-xl text-neutral-400">Experienced</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 border border-neutral-400 rounded-xl ">
          <h1 className="text-center text-3xl m-5 text-neutral-300">
            BackEnd Developement
          </h1>
          <div className="flex flex-col md:flex-row w-full justify-around items-center">
            <div className="flex flex-col gap-6 justify-around">
              <div className="flex ">
                <CircleCheckBig size={45} />
                <h1 className="text-2xl ml-4">
                  NodeJS <br />
                  <span className="text-xl text-neutral-400">Experienced</span>
                </h1>
              </div>
              <div className="flex ">
                <CircleCheckBig size={45} />
                <h1 className="text-2xl ml-4">
                  ExpressJS <br />
                  <span className="text-xl text-neutral-400">Experienced</span>
                </h1>
              </div>
              <div className="flex ">
                <CircleCheckBig size={45} />
                <h1 className="text-2xl ml-4">
                  SQL <br />
                  <span className="text-xl text-neutral-400">Experienced</span>
                </h1>
              </div>
            </div>
            <div className="flex flex-col gap-6 justify-around">
              <div className="flex ">
                <CircleCheckBig size={45} />
                <h1 className="text-2xl ml-4">
                  MongoDB <br />
                  <span className="text-xl text-neutral-400">Experienced</span>
                </h1>
              </div>
              <div className="flex ">
                <CircleCheckBig size={45} />
                <h1 className="text-2xl ml-4">
                  GIT <br />
                  <span className="text-xl text-neutral-400">Experienced</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
