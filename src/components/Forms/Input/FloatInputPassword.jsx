import React from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

const FloatInputPassword = ({
  label,
  isShowPassword,
  togglePassword,
  password,
  setPassword,
}) => {
  return (
    <div className="relative flex w-full">
      <input
        id="floating_outlined"
        className="block text-nhask-text text-base font-normal border border-solid border-nhask-secondary rounded-[15px] w-full h-[60px]  px-4 py-5 bg-transparent focus:outline-none focus:border-nhask-secondary focus:ring-0 focus:ring-transparent appearance-none peer"
        placeholder=" "
        type={isShowPassword ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <label
        htmlFor="floating_outlined"
        className="absolute text-base text-nhask-secondary duration-300 transform -translate-y-4 scale-95 top-[6px] z-10 origin-[0] bg-nhask-bg-primary px-1 peer-focus:px-2 peer-focus:text-nhask-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-[6px] peer-focus:scale-100 peer-focus:-translate-y-4 left-4">
        {label}
      </label>
      <div
        onClick={togglePassword}
        className="absolute -translate-y-1/2 cursor-pointer right-5 top-1/2">
        {isShowPassword ? (
          <EyeIcon className="w-6 h-6 text-nhask-text" />
        ) : (
          <EyeSlashIcon className="w-6 h-6 text-nhask-text" />
        )}
      </div>
    </div>
  );
};

export default FloatInputPassword;
