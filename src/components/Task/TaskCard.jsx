import React from "react";
import Warning from "./Alert/Warning";
import Danger from "./Alert/Danger";
import DateFormat from "../../utils/DateFormat";
import CheckExpiredDate from "../../utils/CheckExpiredDate";

const TaskCard = ({ DetailTaskData, handleClickDetail }) => {
  const CheckStatusExpired = (expiredDate) => {
    if (CheckExpiredDate(expiredDate) === "on this date") {
      return "text-nhask-alert";
    } else if (CheckExpiredDate(expiredDate) === "out of date") {
      return "text-nhask-danger";
    } else if (CheckExpiredDate(expiredDate) === "on future date") {
      return "text-nhask-secondary";
    }
  };

  const checkLevel = (level) => {
    if (level <= 3) {
      return "bg-nhask-normal";
    } else if (level <= 6) {
      return "bg-nhask-alert";
    } else if (level <= 9) {
      return "bg-nhask-danger";
    }
  };

  const convertLevel = (level) => {
    if (level <= 3) {
      return level;
    } else if (level <= 6) {
      return level - 3;
    } else if (level <= 9) {
      return level - 6;
    }
  };

  return (
    <div
      className="relative flex w-full bg-nhask-bg-primary rounded-xl py-[10px] px-4 items-center mb-4 cursor-pointer"
      onClick={() => handleClickDetail(DetailTaskData)}>
      {CheckExpiredDate(DetailTaskData.deadline) === "on this date" && (
        <Warning />
      )}
      {CheckExpiredDate(DetailTaskData.deadline) === "out of date" && (
        <Danger />
      )}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="20"
        fill="none"
        viewBox="0 0 12 20">
        <path
          stroke="#9CB0A4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M2 3a1 1 0 100-2 1 1 0 000 2zM10 3a1 1 0 100-2 1 1 0 000 2zM2 11a1 1 0 100-2 1 1 0 000 2zM10 11a1 1 0 100-2 1 1 0 000 2zM2 19a1 1 0 100-2 1 1 0 000 2zM10 19a1 1 0 100-2 1 1 0 000 2z"></path>
      </svg>
      <div className="flex flex-col ml-4 flex-grow">
        <h2 className="text-nhask-text text-base line-clamp-2 w-[200px]">
          {DetailTaskData.title}
        </h2>
        <div className="flex justify-between w-full items-center">
          <div className="flex gap-2">
            {[...Array(3)].map((i, index) => {
              return (
                <span
                  key={index}
                  className={`${
                    convertLevel(DetailTaskData.level) >= index + 1
                      ? checkLevel(DetailTaskData.level)
                      : "bg-nhask-secondary"
                  }   w-5 h-[5px] rounded-full`}
                />
              );
            })}
          </div>
          <p
            className={`${CheckStatusExpired(
              DetailTaskData.deadline
            )} text-xs`}>
            {DateFormat(DetailTaskData.deadline)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
