import React from "react";

const TextAreaComponent = ({ label, value, setValue, placeHolder }) => {
  return (
    <div className="relative w-full">
      <label
        htmlFor={label}
        className="text-lg font-medium text-nhask-secondary">
        {label}
      </label>
      <textarea
        className="text-nhask-text text-base font-normal border border-solid border-nhask-secondary rounded-[15px] w-full h-36 px-5 py-2 bg-transparent focus:outline-none focus:border-nhask-secondary focus:ring-0 focus:ring-transparent appearance-none peer placeholder:text-gray-500 mt-2"
        placeholder={placeHolder}
        defaultValue={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}></textarea>
    </div>
  );
};

export default TextAreaComponent;
