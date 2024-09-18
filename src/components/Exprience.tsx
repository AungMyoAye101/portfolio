import React from "react";
import { MovingBorderCard } from "./MovingBorderCard";
import { workExperience } from "@/data";
import { Button } from "./ui/MovindBorder";
import Image from "next/image";

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
          <Button
            key={item.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              //   add these two
              //   you can generate the color from here https://cssgradient.io/
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              // add this border radius to make it more rounded so that the moving border is more realistic
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2 relative lg:w-32 md:w-20 w-16">
              <Image src={item.thumbnail} fill alt={item.title} />
            </div>
          </Button>
        ))}
      </main>
    </section>
  );
};

export default Exprience;
