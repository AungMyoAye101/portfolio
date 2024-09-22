import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerate";
import Image from "next/image";
import Button from "./ui/Button";
import { FaLocationArrow } from "react-icons/fa";
import { MovingBorderButton } from "./ui/MovindBorder";
const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center py-10 ">
      <div>
        <Spotlight className="-top-40 -left-10" fill="white" />
      </div>
      {/* Grid background  */}
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0 ">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      {/* Landing page  */}
      <main className="flex flex-col-reverse md:flex-row justify-between gap-10 items-center ">
        <div className="flex flex-col gap-4 items-center w-full  md:w-[45vw] p-5 ">
          <TextGenerateEffect
            words="Hi! I'm Aung Myo Aye "
            className=" tracking-widest text-left text-md md:text-xl "
          />

          <TextGenerateEffect
            words="A UI / UX Desinger and Full-Stack Developer from  Myanmar"
            className="text-center text-2xl md:text-3xl lg:text-4xl"
          />
          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="capatilize tracking-widest  text-base md:text-md "
            duration={2}
          />

          <Button
            title="Download my resume"
            postion="right"
            icon={<FaLocationArrow />}
          />
        </div>
        <div className="relative  w-full md:w-[30vw] flex justify-center ">
          <MovingBorderButton
            className="size-72 relative "
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",

              borderRadius: `calc(1.75rem* 0.96)`,
            }}
          >
            <Image
              src={""}
              fill
              className="object-cover"
              alt="Aung Myo Aye's profile picture"
            />
          </MovingBorderButton>
        </div>
      </main>
    </section>
  );
};

export default Hero;
