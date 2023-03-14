import React from "react";
import { ClockIcon } from "@heroicons/react/24/outline";

const Danger = () => {
  return (
    <div className="absolute right-0 top-0 z-10">
      <span className="animate-ping absolute inline-flex h-[18px] w-[18px] rounded-full bg-nhask-danger opacity-100 -top-[2px] -right-[2px]" />
      <span className="p-[2px] rounded-full bg-nhask-danger absolute -right-[5px] -top-[5px]">
        <ClockIcon className="w-5 h-5 text-nhask-text" />
      </span>
    </div>
  );
};

export default Danger;
