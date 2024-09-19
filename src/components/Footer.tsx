import React from "react";
import Button from "./ui/Button";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";
import { img } from "framer-motion/client";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center justify-center py-10 gap-10 ">
      <div className="flex flex-col gap-2 items-center justify-center ">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200  text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
      </div>
      <a href="mailto:aungmyoaye101@gmail.com">
        <Button
          title="Let's get in touch"
          postion="right"
          icon={<FaLocationArrow />}
        />
      </a>
      <div className="flex justify-between items-center gap-4 w-full">
        <h4 className="text-xs md:text-sm font-serif">
          Copyright © 2024 Aung Myo Aye
        </h4>
        <div className="flex gap-2 md:gap-4">
          {socialMedia.map((icon) => (
            <div
              className="size-10 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-100 border border-black-300 hover:bg-purple-400 cursor-pointer rounded-full"
              key={icon.id}
            >
              <Image src={icon.img} width={20} height={20} alt={icon.img} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
