import React, { useEffect } from "react";
import { getToken, removeToken } from "../../utils/CookiesHooks";
import { API_URL } from "../../config/ApiUrl";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserLogOut = ({
  setIsShowLogout,
  isShowLogout,
  logoutRef,
  isLoading,
  setIsLoading,
}) => {
  const navigate = useNavigate();
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

  const handleLogout = () => {
    setIsLoading(true);
    axios
      .post(
        `${API_URL}/api/auth/logout`,
        {},
        {
          withCredentials: true,
          headers: { Authorization: `Bearer ${getToken()}` },
        }
      )
      .then(() => {
        setIsLoading(false);
        navigate("/login");
        removeToken();
      });
  };

  return (
    <div
      className={` ${
        isShowLogout
          ? `opacity-100 transition duration-150 ease-in z-10`
          : `hidden opacity-0 transition duration-150 ease-out -z-10`
      }   fixed left-56 top-32 text-base list-none bg-nhask-white-12/100 backdrop-blur-md drop-shadow-md divide-y divide-gray-100 rounded-lg shadow w-44`}>
      <p
        className={`text-lg text-nhask-text font-medium px-4 py-2 text-center ${
          isLoading ? "cursor-progress" : "cursor-pointer"
        }`}
        onClick={() => handleLogout()}>
        Logout
      </p>
    </div>
  );
};

export default UserLogOut;
