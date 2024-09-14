import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const Hero = () => {
  const words = "Transforming Concepts into Seamless User Experiences";
  return (
    <section className="min-h-screen relative bg-green-100 flex items-center ">
      <Spotlight fill="purple" />

      <main className="flex justify-center gap-14 items-center p-8">
        <div className="">
          <TextGenerateEffect
            words={words}
            className="text-center text-[50px] md:text-4xl lg:text-5xl"
          />
        </div>
        <div className=" bg-gray-700">
          <div className="size-80"></div>
        </div>
      </main>
    </section>
  );
};

export default Hero;
