"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasReveal";
import { div } from "framer-motion/client";

function Approach() {
  return (
    <section className="py-20 w-full">
      <h1 className="heading">
        My <span className="text-purple">Approach</span>
      </h1>
      <div className=" my-10 flex flex-col md:flex-row items-center justify-center w-full gap-4 mx-auto p-4">
        <Card
          title="Planning & Strategy"
          icon={<AceternityIcon title="Phase 1" />}
          des="We'll collaborate to map out your website's goals, target audience, 
          and key functionalities. We'll discuss things like site structure, 
          navigation, and content requirements."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card
          title="Development & Progress Update"
          icon={<AceternityIcon title="Phase 2" />}
          des="Once we agree on the plan, I cue my lofi playlist and dive into
          coding. From initial sketches to polished code, I keep you updated
          every step of the way."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-blue-800"
            colors={[
              [59, 130, 246],
              [139, 92, 246],
            ]}
            // opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card
          title="Development & Launch"
          icon={<AceternityIcon title="Phase 3" />}
          des="This is where the magic happens! Based on the approved design, 
          I'll translate everything into functional code, building your website
          from the ground up."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
}

const Card = ({
  title,
  icon,
  children,
  des,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[20rem] md:h-[30rem] "
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <Icon className="absolute size-10 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute size-10 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute size-10 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute size-10 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0 rounded-xl"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <div className="dark:text-white space-y-2 opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4   group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          <h1 className="text-xl font-bold text-center">{title} </h1>
          <p className="text-sm text-center">{des}</p>
        </div>
      </div>
    </div>
  );
};

const AceternityIcon = ({ title }: { title: string }) => {
  return (
    <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors ">
      {title}
    </button>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default Approach;
