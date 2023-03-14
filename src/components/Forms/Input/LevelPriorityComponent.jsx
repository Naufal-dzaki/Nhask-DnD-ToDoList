import React from "react";

const LevelPriorityComponent = ({ label, value, setValue }) => {
  const checkLevel = (i) => {
    if (i <= 3) {
      return "bg-nhask-normal";
    } else if (i <= 6) {
      return "bg-nhask-alert";
    } else if (i <= 9) {
      return "bg-nhask-danger";
    }
  };

  return (
    <div className="relative w-full">
      <p className="text-lg font-medium text-nhask-secondary">{label}</p>
      <div className="grid grid-cols-9 gap-2 mt-2">
        {[...Array(9)].map((e, i) => {
          return (
            <span
              key={i}
              className={`${
                value >= i + 1 ? checkLevel(i + 1) : "bg-nhask-secondary"
              }  w-full h-[6px] md:h-[10px] rounded-full cursor-pointer`}
              onClick={() => {
                setValue(i + 1);
              }}
            />
          );
        })}
        {/* <span
          className={`${
            value >= 1 ? "bg-nhask-normal" : "bg-nhask-secondary"
          }  w-full h-[10px] rounded-full cursor-pointer`}
          onClick={() => {
            setValue(1);
          }}></span>
        <span
          className={`${
            value >= 2 ? "bg-nhask-normal" : "bg-nhask-secondary"
          } w-full h-[10px] rounded-full cursor-pointer`}
          onClick={() => {
            setValue(2);
          }}></span> */}
      </div>
    </div>
  );
};

export default LevelPriorityComponent;
