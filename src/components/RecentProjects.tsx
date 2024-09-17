import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3dPin";

const RecentProjects = () => {
  return (
    <section className="flex flex-col gap-6 py-10 px-6 justify-center items-center">
      <h1 className="text-xl sm:text-2xl md:3xl lg:text-4xl font-serif">
        A Small Section Of <span className="text-purple">Recent Projects</span>
      </h1>

      <main className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((project, i) => (
          <div
            key={i}
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
          >
            <PinContainer title={project.link} href={project.link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] ">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img
                    src={project.img}
                    alt={project.title}
                    className="z-10 absolute bottom-0"
                  />
                </div>
              </div>
              <h1>{project.title}</h1>
            </PinContainer>
          </div>
        ))}
      </main>
    </section>
  );
};

export default RecentProjects;
