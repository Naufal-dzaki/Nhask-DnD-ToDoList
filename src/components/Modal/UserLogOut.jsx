import React from "react";
import { useEffect } from "react";

const UserLogOut = ({ setIsShowLogout, isShowLogout, logoutRef }) => {
  // on click outside
  useEffect(() => {
    let handler = (e) => {
      if (!logoutRef.current.contains(e.target)) {
        setIsShowLogout(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div
      className={` ${
        isShowLogout
          ? `opacity-100 transition duration-150 ease-in z-10`
          : `opacity-0 transition duration-150 ease-out -z-10`
      }   fixed left-56 top-32 text-base list-none bg-nhask-white-12/100 backdrop-blur-md drop-shadow-md divide-y divide-gray-100 rounded-lg shadow w-44`}>
      <p className="text-lg text-nhask-text font-medium px-4 py-2 text-center cursor-pointer">
        Logout
      </p>
    </div>
  );
};

export default UserLogOut;
