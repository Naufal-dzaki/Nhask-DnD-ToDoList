import React from "react";
import { useState, useRef, useEffect } from "react";
import {
  EllipsisVerticalIcon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import UserLogOut from "../Modal/UserLogOut";
import CheckExpiredDate from "../../utils/CheckExpiredDate";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import "./index.css";

const SideBar = ({
  isSidebarOpen,
  setIsSidebarOpen,
  taskData,
  isLoading,
  setIsLoading,
  Username,
}) => {
  const [isShowLogout, setIsShowLogout] = useState(false);
  const sideBarRef = useRef();
  const logoutRef = useRef();

  const handleClickLogout = () => {
    if (isShowLogout) setIsShowLogout(false);
    else setIsShowLogout(true);
  };

  useEffect(() => {
    let handler = (e) => {
      if (!sideBarRef.current.contains(e.target)) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div
      className={`${
        isSidebarOpen
          ? "max-[1224px]:bg-nhask-black-1/5 max-[1224px]:backdrop-blur-[2px] w-full h-screen fixed inset-0 z-30"
          : "max-[1224px]:opacity-0 max-[1224px]:-z-30"
      } min-[1224px]:left-0 top-0 min-[1224px]:w-fit min-[1224px]:bg-transparent transition-opacity ease-in duration-200 ${
        isLoading && "cursor-progress"
      }`}>
      <div
        className={`bg-nhask-bg-secondary h-screen fixed p-2  ${
          isSidebarOpen ? "left-0" : "-left-full"
        } min-[1224px]:left-0 top-0 transition-all ease-in duration-150 max-w-fit rounded-r-[15px] shadow-md z-30`}
        ref={sideBarRef}>
        <PerfectScrollbar
          options={{
            suppressScrollX: true,
            wheelPropagation: false,
            handlers: [
              "click-rail",
              "drag-thumb",
              "keyboard",
              "wheel",
              "touch",
            ],
          }}>
          <div className="p-3">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-semibold text-nhask-primary">
                Nhask
              </h1>
              <XMarkIcon
                className="w-6 h-6 min-[1224px]:hidden text-nhask-secondary cursor-pointer"
                onClick={() => setIsSidebarOpen(false)}
              />
            </div>
            {/* user */}
            <div className="flex items-center my-6">
              <UserCircleIcon className="w-[72px] h-[72px] text-nhask-secondary mr-3" />
              <p className="max-w-[120px] text-nhask-text text-xl font-medium">
                Welcome, {Username}!
              </p>
              <div className="flex" ref={logoutRef}>
                <EllipsisVerticalIcon
                  className="w-6 h-6 cursor-pointer text-nhask-secondary"
                  onClick={handleClickLogout}
                />
                <UserLogOut
                  setIsShowLogout={setIsShowLogout}
                  isShowLogout={isShowLogout}
                  logoutRef={logoutRef}
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                />
              </div>
            </div>
            <hr className="border-nhask-bg-primary" />
            {/* recap */}
            <div className="flex flex-col py-6">
              <div className="mb-5">
                <h2 className="mb-1 text-lg font-medium text-nhask-secondary">
                  Total Activity :
                </h2>
                <div className="flex">
                  <span className="w-1 mr-2 rounded-full h-7 bg-nhask-primary" />
                  <p className="text-xl text-nhask-text">{taskData.length}</p>
                </div>
              </div>
              <div className="mb-5">
                <h2 className="mb-1 text-lg font-medium text-nhask-secondary">
                  Completed :
                </h2>
                <div className="flex">
                  <span className="w-1 mr-2 rounded-full h-7 bg-nhask-normal" />
                  <p className="text-xl text-nhask-text">
                    {taskData.filter((task) => task.status_id === 3).length}
                  </p>
                </div>
              </div>
              <div className="mb-5">
                <h2 className="mb-1 text-lg font-medium text-nhask-secondary">
                  In Progress :
                </h2>
                <div className="flex">
                  <span className="w-1 mr-2 rounded-full h-7 bg-nhask-alert" />
                  <p className="text-xl text-nhask-text">
                    {taskData.filter((task) => task.status_id === 2).length}
                  </p>
                </div>
              </div>
              <div className="mb-5">
                <h2 className="mb-1 text-lg font-medium text-nhask-secondary">
                  Out of Date :
                </h2>
                <div className="flex">
                  <span className="w-1 mr-2 rounded-full h-7 bg-nhask-danger" />
                  <p className="text-xl text-nhask-text">
                    {
                      taskData.filter(
                        (task) =>
                          CheckExpiredDate(task.deadline) === "out of date"
                      ).length
                    }
                  </p>
                </div>
              </div>
            </div>
            <hr className="border-nhask-bg-primary" />
            {/* level information */}
            <div className="flex flex-col py-6">
              <h2 className="mb-2 text-lg font-medium text-nhask-secondary">
                Priority level :
              </h2>
              <div className="flex items-center mb-2">
                <span className="w-10 h-2 mr-2 rounded-full bg-nhask-danger" />
                <p className="text-base text-nhask-danger ">important</p>
              </div>
              <div className="flex items-center mb-2">
                <span className="w-10 h-2 mr-2 rounded-full bg-nhask-alert" />
                <p className="text-base text-nhask-alert ">Semi Important</p>
              </div>
              <div className="flex items-center mb-2">
                <span className="w-10 h-2 mr-2 rounded-full bg-nhask-normal" />
                <p className="text-base text-nhask-normal ">Unimportant</p>
              </div>
            </div>
          </div>
        </PerfectScrollbar>
      </div>
    </div>
  );
};

export default SideBar;
