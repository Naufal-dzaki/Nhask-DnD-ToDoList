import React from "react";
import BasicButton from "../components/Forms/Button/BasicButton";

const NotFound = () => {
  return (
    <div className="bg-nhask-bg-primary min-h-screen min-w-screen grid place-content-center text-center">
      <h3 className="text-nhask-secondary text-2xl mb-3">Ooops.....</h3>
      <h1 className="text-nhask-text font-bold text-9xl mb-3">
        4<span className="text-nhask-primary">0</span>4
      </h1>
      <p className="text-nhask-primary text-4xl font-semibold mb-3">
        PAGE NOT FOUND
      </p>
      <p className="text-nhask-secondary text-2xl font-medium mb-3 w-[350px]">
        Don't worry, tap the button below to write your task
      </p>
      <div className="self-center">
        <button className="px-3 py-2 rounded-lg bg-nhask-primary text-nhask-text font-bold text-lg w-fit self-center">
          WRITE TASK
        </button>
      </div>
    </div>
  );
};

export default NotFound;
