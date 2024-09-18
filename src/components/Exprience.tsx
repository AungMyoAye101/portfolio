import React from "react";
import { MovingBorderCard } from "./MovingBorderCard";
import { workExperience } from "@/data";

const Exprience = () => {
  return (
    <section
      className="flex flex-col gap-6 py-10 px-6 justify-center items-center"
      id="projects"
    >
      <h1 className="text-xl sm:text-2xl md:3xl lg:text-4xl font-serif">
        My <span className="text-purple">Work Exprience</span>
      </h1>

      <main className="grid md:grid-cols-2 gap-10 ">
        {workExperience.map((item) => (
          <div key={item.id}>
            <MovingBorderCard />
          </div>
        ))}
      </main>
    </section>
  );
};

export default Exprience;
