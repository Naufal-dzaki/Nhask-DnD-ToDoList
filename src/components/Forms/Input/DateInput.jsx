import React from "react";

const DateInput = ({ label, value, setValue }) => {
  return (
    <div className="relative w-full">
      <label
        htmlFor={label}
        className="text-lg text-nhask-secondary font-medium mb-4">
        {label}
      </label>
      <input
        type="date"
        id={label}
        className="text-nhask-secondary text-base font-normal border border-solid border-nhask-secondary rounded-[15px] w-full h-[40px] px-5 py-2 bg-transparent focus:outline-none focus:border-nhask-secondary focus:ring-0 focus:ring-transparent appearance-none peer"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default DateInput;
