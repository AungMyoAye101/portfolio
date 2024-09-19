import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerate";
import Image from "next/image";
import Button from "./ui/Button";
import { FaLocationArrow } from "react-icons/fa";
import { MovingBorderButton } from "./ui/MovindBorder";
const Hero = () => {
  const words = "Transforming Concepts into Seamless User Experiences";
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
      <main className="flex flex-col-reverse md:flex-row justify-between gap-10 items-center p-4 md:p-8">
        <div className="flex flex-col gap-4 items-center w-full  md:w-[50vw] ">
          <TextGenerateEffect
            words="Dynamic Web Magic with Next.js"
            className="uppercase tracking-widest text-center text-xs md:text-base "
          />

          <TextGenerateEffect
            words="Hi! I'm Aung Myo Aye , a FullStack Developer based in Myanmar ."
            className="text-center text-[24px] md:text-3xl lg:text-4xl"
          />

          <Button
            title="Download my resume"
            postion="right"
            icon={<FaLocationArrow />}
          />
        </div>
        <div className="relative  w-full md:w-[30vw] flex justify-center ">
          <MovingBorderButton className="size-60 relative ">
            <Image
              src={"/zoro.jpeg"}
              fill
              className="object-cover saturate-100 "
              alt="Aung Myo Aye's profile picture"
            />
          </MovingBorderButton>
        </div>
      </main>
    </section>
  );
};

export default Hero;
