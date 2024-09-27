import React from "react";

const Button = ({
  title,
  postion,
  icon,
  handelClick,
}: {
  title: string;
  postion?: string;
  icon?: React.ReactNode;
  handelClick?: () => void;
}) => {
  return (
    <button
      className="relative inline-flex h-12 overflow-hidden rounded-md p-[1px] focus:outline-none my-2 text-white hover:text-purple "
      onClick={handelClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md  bg-slate-950 px-7 py-1 text-sm font-medium  backdrop-blur-3xl gap-2">
        {postion === "left" && icon}

        {title}
        {postion === "right" && icon}
      </span>
    </button>
  );
};

export default Button;
