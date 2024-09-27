import React from "react";
import { workExperience } from "@/data";
import { MovingBorderButton } from "./ui/MovindBorder";
import Image from "next/image";

const Exprience = () => {
  return (
    <section
      className="flex flex-col gap-6 py-10 px-6 justify-center items-center"
      id="projects"
    >
      <h1 className="text-xl sm:text-2xl md:3xl lg:text-4xl font-serif">
        My <span className="text-purple">Progamming Exprience</span>
      </h1>

      <main className="w-full mt-12 grid md:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((item) => (
          <MovingBorderButton
            key={item.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",

              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2 ">
              <div className="relative lg:w-32 md:w-20 size-16">
                <Image src={item.thumbnail} fill alt={item.title} />
              </div>
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {item.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {item.desc}
                </p>
              </div>
            </div>
          </MovingBorderButton>
        ))}
      </main>
    </section>
  );
};

export default Exprience;
