import React from "react";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

const Warning = () => {
  return (
    <div className="absolute right-0 top-0 z-10">
      <span className="animate-ping absolute inline-flex h-[18px] w-[18px] rounded-full bg-nhask-alert opacity-100 -top-[6px] -right-[6px]" />
      <span className="p-[2px] rounded-full bg-nhask-alert absolute -right-[9px] -top-[9px]">
        <ExclamationCircleIcon className="w-5 h-5 text-nhask-text" />
      </span>
    </div>
  );
};

export default Warning;
