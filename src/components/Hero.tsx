import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const Hero = () => {
  const words =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis fugiat quia laudantium, non est voluptas maxime, ducimus similique deserunt vitae recusandae exercitationem, sunt minus expedita! Aut laudantium adipisci vero beatae!";
  return (
    <section className="min-h-screen relative bg-pink-700 flex items-center ">
      <Spotlight fill="purple" />

      <main className="flex justify-center gap-10 items-center p-6">
        <div className="w-[40%]">
          <TextGenerateEffect
            words={words}
            className="text-center dark:text-red-100 text-black-300 text-4xl"
          />
        </div>
        <div className="w-[40%] bg-gray-700">
          <div className="size-20"></div>
        </div>
      </main>
    </section>
  );
};

export default Hero;
