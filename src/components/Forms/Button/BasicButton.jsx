import React from "react";

const BasicButton = ({ handleOnClickEvent, parameter, text }) => {
  return (
    <button
      className="text-nhask-text text-sm font-medium bg-nhask-primary px-3 py-2 rounded-md drop-shadow-sm mr-2 w-fit"
      onClick={() => handleOnClickEvent(parameter && parameter)}>
      {text}
    </button>
  );
};

export default BasicButton;
