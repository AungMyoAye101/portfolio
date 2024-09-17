"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { BackgroundGradientAnimation } from "./BgGradient";
import { Globe } from "./Globe";
import GridGlobe from "./GridGlobe";
import { useState } from "react";
import animationData from "@/data/confettie.json";
import Button from "./Button";
import { FaCopy } from "react-icons/fa";
import Lottie from "lottie-react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,

  id,
  image,
  imgClassName,
  spareImage,
  titleClassName,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;

  icon?: React.ReactNode;
  id: number;
  image?: string;
  imgClassName?: string;
  spareImage?: string;
  titleClassName?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const handelClick = () => {
    navigator.clipboard.writeText("aungmyoaye101@gmail.com");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  const leftLists = ["React js", "Next Js", "Vue Js", "Jquery"];
  const rightLists = ["JavaScript", "Node Js", "Express Js", "Python"];

  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none border border-white-[0.1] justify-between flex flex-col space-y-4 relative overflow-hidden",
        className
      )}
      style={{
        background: "rgb(4,7,29",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center "} h-full`}>
        <div className="h-full w-full  absolute">
          {image && (
            <img
              src={image}
              alt="image "
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>

        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex flex-col items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
          >
            {title}
          </div>

          {/* Add globle */}

          {id === 2 && <GridGlobe />}

          {/* My Tech Stack */}

          {id === 3 && (
            <div className="flex gap-2 lg:gap-4 w-fit absolute -right-2 lg:-right-3">
              <div className="flex flex-col gap-3 ">
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-2 lg:px-3 py-1 px-2 text-xs lg:text-base opacity-50 
                        lg:opacity-100 rounded-lg text-center bg-[#10132E] "
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
              </div>
              <div className="flex flex-col gap-3 ">
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-2 lg:px-3 py-1 px-2 text-xs lg:text-base opacity-50 
                  lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* My email contact */}
          {id === 6 && (
            <div className="relative">
              <div className={`absolute right-0 -bottom-5 `}>
                <Lottie
                  animationData={animationData}
                  loop={copied}
                  height={200}
                  width={400}
                />
              </div>
              <Button
                title={copied ? "Email is Copied!" : "Copy my email address"}
                postion="left"
                icon={<FaCopy />}
                handelClick={handelClick}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
