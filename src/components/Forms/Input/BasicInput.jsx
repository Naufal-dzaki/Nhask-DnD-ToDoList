import React from "react";

const BasicInput = ({ label, value, setValue, placeHolder }) => {
  return (
    <div className="relative w-full">
      <label
        htmlFor={label}
        className="text-lg text-nhask-secondary font-medium">
        {label}
      </label>
      <input
        type="text"
        id={label}
        className="text-nhask-text text-base font-normal border border-solid border-nhask-secondary rounded-[15px] w-full h-14 px-5 py-2 bg-transparent focus:outline-none focus:border-nhask-secondary focus:ring-0 focus:ring-transparent appearance-none peer placeholder:text-gray-500 mt-2"
        placeholder={placeHolder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default BasicInput;
