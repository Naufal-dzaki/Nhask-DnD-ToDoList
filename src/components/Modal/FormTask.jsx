import React, { useState, useRef, useContext } from "react";
import { TaskContext } from "../../pages/Home";
import axios from "axios";
import { getToken } from "../../utils/CookiesHooks";
import { API_URL } from "../../config/ApiUrl";
import { XMarkIcon } from "@heroicons/react/24/solid";
import BasicInput from "../Forms/Input/BasicInput";
import BasicButton from "../Forms/Button/BasicButton";
import DatePickerComponent from "../Forms/Input/DatePickerComponent";
import LevelPriorityComponent from "../Forms/Input/LevelPriorityComponent";
import TextAreaComponent from "../Forms/Input/TextAreaComponent";
import dayjs from "dayjs";
import DateFormatNumber from "../../utils/DateFormatNumber";
import BeatLoader from "react-spinners/BeatLoader";

const FormTask = ({
  isShowForm,
  setIsShowForm,
  data,
  formTitle,
  isUpdateForm,
}) => {
  const [title, setTitle] = useState(isUpdateForm ? data.title : "");
  const [deadLine, setDeadLine] = useState(
    isUpdateForm ? dayjs(data.deadline) : ""
  );
  const [levelPriority, setLevelPriority] = useState(
    isUpdateForm ? data.level : null
  );
  const [description, setDescription] = useState(
    isUpdateForm ? data.description : ""
  );
  const [isLoading, setIsLoading] = useState(false);
  const { updateTask } = useContext(TaskContext);

  const containerRef = useRef();

  const HandleAddTask = () => {
    setIsLoading(true);
    const data = {
      title: title,
      deadline: DateFormatNumber(deadLine),
      level: levelPriority,
      description: description,
    };

    axios
      .post(`${API_URL}/api/task/create`, data, {
        withCredentials: true,
        headers: { Authorization: `Bearer ${getToken()}` },
      })
      .then((response) => {
        console.log(response);
        setTitle("");
        setDeadLine("");
        setLevelPriority(null);
        setDescription("");
        setIsShowForm(false);
        setIsLoading(false);
      })
      .catch((response) => console.log(response));
    updateTask();
  };

  const HandleUpdateTask = () => {
    setIsLoading(true);
    const UpdateData = {
      title: title,
      deadline: DateFormatNumber(deadLine),
      level: levelPriority,
      description: description,
    };

    axios
      .put(`${API_URL}/api/task/update/${data.id}`, UpdateData, {
        withCredentials: true,
        headers: { Authorization: `Bearer ${getToken()}` },
      })
      .then(() => {
        setTitle("");
        setDeadLine("");
        setLevelPriority(null);
        setDescription("");
        setIsShowForm(false);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
    updateTask();
  };

  const handleClose = () => {
    if (isShowForm) setIsShowForm(false);
  };

  const validator = () => {
    if (title && deadLine && levelPriority && description) return true;
    else return false;
  };

  return (
    <div
      className={`${
        isShowForm ? `opacity-100 z-40 ease-in` : `hidden -z-20 ease-out`
      } transition duration-150 bg-nhask-black-1/5 backdrop-blur-[2px] w-full h-full fixed inset-0`}>
      <div
        className="fixed p-5 md:p-6 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-nhask-bg-primary rounded-2xl w-[80vw] max-w-[564px] shadow-md"
        ref={containerRef}>
        <div className="flex items-center justify-between mb-5">
          <h1 className="text-xl font-medium md:text-2xl text-nhask-primary">
            {formTitle}
          </h1>
          <XMarkIcon
            className="w-6 h-6 cursor-pointer text-nhask-text"
            onClick={handleClose}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-12 sm:gap-4 sm:mb-4">
          <div className="mb-4 sm:mb-0 sm:col-span-8">
            <BasicInput
              label={"Title"}
              value={title}
              setValue={setTitle}
              placeHolder={`Write your task's title`}
            />
          </div>
          <div className="mb-4 sm:mb-0 sm:col-span-4">
            <DatePickerComponent
              label={"Deadline"}
              value={deadLine}
              setValue={setDeadLine}
              containerRef={containerRef}
            />
          </div>
        </div>
        <div className="mb-4">
          <LevelPriorityComponent
            label={"Level Priority"}
            value={levelPriority}
            setValue={setLevelPriority}
          />
        </div>
        <div className="mb-4">
          <TextAreaComponent
            label={"Description"}
            value={description}
            setValue={setDescription}
            placeHolder={`Write your task's description`}
          />
        </div>
        {isUpdateForm ? (
          <BasicButton handleOnClickEvent={HandleUpdateTask} tipe={"default"}>
            {isLoading ? (
              <BeatLoader color="#E4EADF" size={7} />
            ) : (
              "Update Task"
            )}
          </BasicButton>
        ) : (
          <BasicButton handleOnClickEvent={HandleAddTask} tipe={"default"}>
            {isLoading ? (
              <BeatLoader color="#E4EADF" size={7} />
            ) : (
              "Create Task"
            )}
          </BasicButton>
        )}
      </div>
    </div>
  );
};

export default FormTask;
