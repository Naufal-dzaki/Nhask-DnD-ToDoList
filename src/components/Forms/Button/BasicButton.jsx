import React from "react";

const BasicButton = ({
  handleOnClickEvent,
  parameter,
  children,
  tipe,
  validation,
}) => {
  const handleBgButton = (tipe) => {
    if (tipe === "danger") {
      return `bg-nhask-danger`;
    } else if (tipe === "warning") {
      return "bg-nhask-alert";
    } else if (tipe === "default") {
      return "bg-nhask-primary";
    }
  };
  return (
    <button
      className={`flex items-center text-nhask-text text-sm font-medium ${handleBgButton(
        tipe
      )} px-3 py-2 rounded-md drop-shadow-sm mr-2 w-fit`}
      onClick={() => handleOnClickEvent(parameter && parameter)}>
      {children}
    </button>
  );
};

export default BasicButton;
