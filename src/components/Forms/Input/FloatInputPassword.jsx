import React from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

const FloatInputPassword = ({
  label,
  isShowPassword,
  togglePassword,
  password,
  setPassword,
  isError,
  isLoading,
}) => {
  return (
    <div className="relative flex w-full">
      <input
        id={label}
        className={`block text-nhask-text text-base font-normal border border-solid rounded-[15px] w-full h-[60px]  px-4 py-5 bg-transparent focus:outline-none focus:ring-0 focus:ring-transparent appearance-none peer ${
          isLoading && "cursor-progress"
        } ${
          isError
            ? "border-nhask-danger focus:border-nhask-danger"
            : "border-nhask-secondary focus:border-nhask-secondary"
        }`}
        placeholder=" "
        type={isShowPassword ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <label
        htmlFor={label}
        className={`absolute ${
          isError
            ? "text-nhask-danger peer-focus:text-nhask-danger"
            : "text-nhask-secondary peer-focus:text-nhask-secondary"
        } text-base duration-300 transform -translate-y-4 scale-95 top-[6px] z-10 origin-[0] bg-nhask-bg-primary px-1 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-[6px] peer-focus:scale-100 peer-focus:-translate-y-4 left-4`}>
        {label}
      </label>
      <div
        onClick={togglePassword}
        className="absolute -translate-y-1/2 cursor-pointer right-5 top-1/2">
        {isShowPassword ? (
          <EyeIcon
            className={`w-6 h-6 ${
              isError ? "text-nhask-danger" : "text-nhask-text"
            }`}
          />
        ) : (
          <EyeSlashIcon
            className={`w-6 h-6 ${
              isError ? "text-nhask-danger" : "text-nhask-text"
            }`}
          />
        )}
      </div>
    </div>
  );
};

export default FloatInputPassword;
