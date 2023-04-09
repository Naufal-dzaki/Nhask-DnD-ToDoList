import React from "react";

const FloatInputText = ({ label, value, setValue, isError, isLoading }) => {
  return (
    <div className="relative w-full">
      <input
        type="text"
        id={label}
        className={`block text-nhask-text text-base font-normal border border-solid rounded-[15px] w-full h-[60px]  px-4 py-5 bg-transparent focus:outline-none focus:ring-0 focus:ring-transparent appearance-none peer ${
          isLoading && "cursor-progress"
        } ${
          isError
            ? "border-nhask-danger focus:border-nhask-danger"
            : "focus:border-nhask-secondary border-nhask-secondary"
        }`}
        placeholder=" "
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <label
        htmlFor={label}
        className={`absolute text-base ${
          isError
            ? "text-nhask-danger peer-focus:text-nhask-danger"
            : "text-nhask-secondary peer-focus:text-nhask-secondary"
        } duration-300 transform -translate-y-4 scale-95 top-[6px] z-10 origin-[0] bg-nhask-bg-primary px-1 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-[6px] peer-focus:scale-100 peer-focus:-translate-y-4 left-4`}>
        {label}
      </label>
    </div>
  );
};

export default FloatInputText;
