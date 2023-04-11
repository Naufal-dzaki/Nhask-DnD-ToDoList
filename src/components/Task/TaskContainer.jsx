import React, { useContext } from "react";
import { TaskContext } from "../../pages/Home";
import axios from "axios";
import { getToken } from "../../utils/CookiesHooks";
import { API_URL } from "../../config/ApiUrl";
import {
  ClipboardDocumentListIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";
import TaskCard from "./TaskCard";
import BasicButton from "../Forms/Button/BasicButton";
import Droppable from "./DragAndDrop/Droppable";
import PerfectScrollbar from "react-perfect-scrollbar";
import "./PerfectScrollBar.css";

const TaskContainer = ({
  TaskContainerData,
  isShowCreate,
  setIsShowCreate,
  TaskData,
  setTaskData,
  handleClickDetail,
}) => {
  const { updateTask } = useContext(TaskContext);

  const handleDrop = (item, monitor, state, containerStatus) => {
    if (state.find((each) => each.id === item.id)) return;

    axios
      .put(
        `${API_URL}/api/task/update/${item.id}`,
        { status_id: containerStatus },
        {
          withCredentials: true,
          headers: { Authorization: `Bearer ${getToken()}` },
        }
      )
      .then((response) => console.log(response))
      .catch((response) => console.log(response));

    updateTask();
  };

  const handleClickCreate = () => {
    if (isShowCreate) setIsShowCreate(false);
    else setIsShowCreate(true);
  };

  const handleIconTaskContainer = () => {
    if (TaskContainerData.status === "to-do") {
      return (
        <ClipboardDocumentListIcon className="w-6 h-6 text-nhask-primary" />
      );
    } else if (TaskContainerData.status === "on-progress") {
      return (
        <div className="grid w-6 h-6 place-content-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="22"
            fill="none"
            viewBox="0 0 19 22">
            <path
              stroke="#3AB79E"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M13.985 2.452C13.741 1.614 12.945 1 12 1H9.25c-.945 0-1.74.614-1.985 1.452m6.72 0c.05.172.078.354.078.542v0a.665.665 0 01-.665.665H7.852a.665.665 0 01-.665-.665v0c0-.188.027-.37.078-.542m6.72 0c.593.043 1.182.098 1.767.163A1.953 1.953 0 0117.5 4.552V16.29c0 1.101-.923 1.994-2.063 1.994H5.813c-1.14 0-2.063-.893-2.063-1.994V4.552c0-.982.739-1.823 1.748-1.937.585-.065 1.174-.12 1.767-.163"></path>
            <path
              fill="#263D4D"
              d="M1.917 6.318H13.834V19.613999999999997H1.917z"></path>
            <path
              stroke="#3AB79E"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M13.833 15.045v-1.909c0-1.355-1.292-2.454-2.887-2.454H9.662c-.531 0-.962-.367-.962-.818V8.773c0-1.356-1.293-2.455-2.887-2.455H4.207m.642 10.364v.545m2.567-2.182v2.182m2.566-3.818v3.818M6.133 6.318h-4.17c-.532 0-.963.366-.963.818v12.546c0 .452.43.818.962.818h10.909c.531 0 .962-.366.962-.818v-6.818c0-3.615-3.447-6.546-7.7-6.546z"></path>
          </svg>
        </div>
      );
    } else if (TaskContainerData.status === "completed") {
      return (
        <ClipboardDocumentCheckIcon className="w-6 h-6 text-nhask-primary" />
      );
    } else {
      return console.log("error status task container");
    }
  };

  return (
    <Droppable
      accept={"drag-1"}
      handleDrop={handleDrop}
      state={TaskData.filter(
        (value) => value.status_id === TaskContainerData.status_id
      )}
      containerStatus={TaskContainerData.status_id}>
      <div className="flex items-center px-4 pt-4 pb-2">
        {handleIconTaskContainer(TaskContainerData.status)}
        <h1 className="ml-3 text-xl text-nhask-primary">
          {TaskContainerData.title}
        </h1>
      </div>
      {TaskData.filter(
        (value) => value.status_id === TaskContainerData.status_id
      ) && (
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
          <div className="flex flex-col px-5 py-1 mt-2">
            {TaskData.filter(
              (value) => value.status_id === TaskContainerData.status_id
            ).map((value, index) => (
              <TaskCard
                key={index}
                TaskData={TaskData.filter(
                  (value) => value.status_id === TaskContainerData.status_id
                )}
                DetailTaskData={value}
                handleClickDetail={handleClickDetail}
              />
            ))}
          </div>
        </PerfectScrollbar>
      )}
      {TaskContainerData.status === "to-do" && (
        <div className="mx-4 mt-2 mb-4">
          <BasicButton handleOnClickEvent={handleClickCreate} tipe={"default"}>
            Add Task
          </BasicButton>
        </div>
      )}
    </Droppable>
  );
};

export default TaskContainer;
