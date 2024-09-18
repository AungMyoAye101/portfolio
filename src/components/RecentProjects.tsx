import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3dPin";
import { FaLocationArrow } from "react-icons/fa";
import Image from "next/image";
const RecentProjects = () => {
  return (
    <section className="flex flex-col gap-6 py-10 px-6 justify-center items-center">
      <h1 className="text-xl sm:text-2xl md:3xl lg:text-4xl font-serif">
        A Small Section Of <span className="text-purple">Recent Projects</span>
      </h1>

      <main className="flex flex-wrap items-center justify-center p-4 gap-x-16 gap-y-4">
        {projects.map((project, i) => (
          <div
            key={i}
            className=" lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
          >
            <PinContainer title={project.link} href={project.link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ background: "url(/bg.png)" }}
                >
                  <Image
                    src={project.img}
                    fill
                    alt={project.title}
                    className="object-cover object-center"
                  />
                </div>
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {project.title}
              </h1>
              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {project.des}
              </p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {project.iconLists.map((icon, i) => (
                    <div
                      key={i}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * i + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </main>
    </section>
  );
};

export default RecentProjects;
