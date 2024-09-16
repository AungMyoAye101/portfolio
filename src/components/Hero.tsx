import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const Hero = () => {
  const words = "Transforming Concepts into Seamless User Experiences";
  return (
    <section className="min-h-screen relative flex items-center py-10 ">
      <Spotlight className="-top-40 -left-10" fill="gray" />

      <div className="h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.1] flex items-center justify-center absolute top-0 left-0 -z-10">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      <main className="flex justify-center gap-14 items-center p-8">
        <div className="flex flex-col gap-1 items-center md:w-[60vw]">
          <TextGenerateEffect
            words="Dynamic Web Magic with Next.js"
            className="uppercase tracking-widest text-center text-sky-200 "
          />

          <TextGenerateEffect
            words={words}
            className="text-center text-[50px] md:text-4xl lg:text-5xl"
          />
          <TextGenerateEffect
            words="Hi! I'm Aung Myo Aye, a FullStack Developer based in Myanmar."
            className=" text-center text-sky-200 text-xl font-semibold font-serif max-w-[60%]"
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
