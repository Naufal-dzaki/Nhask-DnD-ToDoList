import React, { useState } from "react";
// useEffect
// import axios from "axios";
import SideBar from "../../components/SideBar";
import FormTask from "../../components/Modal/FormTask";
import DetailTask from "../../components/Modal/DetailTask";
import TaskContainer from "../../components/Task/TaskContainer";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import "./PerfectScrollbar.css";

const dummyTask = {
  data: [
    {
      id: 1,
      title: "Fetch API from Backend",
      status: "to-do",
      deadline: "2023-03-30",
      level: "5",
      description:
        "Nunc lorem augue, scelerisque ut erat sed, pharetra porta ligula. Morbi augue ligula, viverra eu feugiat eu, fermentum nec tortor. Vivamus rutrum at metus nec hendrerit. Duis nec dignissim velit, ac efficitur massa. Sed in mollis odio. ",
    },
    {
      id: 2,
      title: "Create API",
      status: "on-progress",
      deadline: "2023-03-29",
      level: "6",
      description:
        "Nunc lorem augue, scelerisque ut erat sed, pharetra porta ligula. Morbi augue ligula, viverra eu feugiat eu, fermentum nec tortor. Vivamus rutrum at metus nec hendrerit. Duis nec dignissim velit, ac efficitur massa. Sed in mollis odio. ",
    },
    {
      id: 3,
      title: "slicing UI",
      status: "completed",
      deadline: "2023-03-10",
      level: "5",
      description:
        "Nunc lorem augue, scelerisque ut erat sed, pharetra porta ligula. Morbi augue ligula, viverra eu feugiat eu, fermentum nec tortor. Vivamus rutrum at metus nec hendrerit. Duis nec dignissim velit, ac efficitur massa. Sed in mollis odio. ",
    },
    {
      id: 4,
      title: "Made the Feature Drag and Drop Work",
      status: "completed",
      deadline: "2023-03-20",
      level: "8",
      description:
        "Nunc lorem augue, scelerisque ut erat sed, pharetra porta ligula. Morbi augue ligula, viverra eu feugiat eu, fermentum nec tortor. Vivamus rutrum at metus nec hendrerit. Duis nec dignissim velit, ac efficitur massa. Sed in mollis odio. ",
    },
    {
      id: 5,
      title: "Recap Task",
      status: "completed",
      deadline: "2023-03-23",
      level: "2",
      description:
        "Nunc lorem augue, scelerisque ut erat sed, pharetra porta ligula. Morbi augue ligula, viverra eu feugiat eu, fermentum nec tortor. Vivamus rutrum at metus nec hendrerit. Duis nec dignissim velit, ac efficitur massa. Sed in mollis odio. ",
    },
  ],
};

const dummyTaskContainer = {
  data: [
    {
      id: 1,
      title: "To-Do",
      status: "to-do",
    },
    {
      id: 2,
      title: "On-Progress",
      status: "on-progress",
    },
    {
      id: 1,
      title: "Completed",
      status: "completed",
    },
  ],
};

const Home = () => {
  const [taskData, setTaskData] = useState(dummyTask.data);
  const TaskContainerData = dummyTaskContainer.data;
  const [isShowCreate, setIsShowCreate] = useState(false);
  const [isShowUpdate, setIsShowUpdate] = useState(false);
  const [isShowDetail, setIsShowDetail] = useState(false);
  const [updateData, setUpdateData] = useState([]);
  const [detailData, setDetailData] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleClickDetail = (value) => {
    setDetailData(value);
    if (isShowDetail) setIsShowDetail(false);
    else setIsShowDetail(true);
  };

  const handleShowSidebar = () => {
    if (isSidebarOpen) setIsSidebarOpen(true);
    else setIsSidebarOpen(true);
  };

  return (
    <div className="min-h-screen bg-nhask-bg-primary">
      <SideBar
        setIsSidebarOpen={setIsSidebarOpen}
        isSidebarOpen={isSidebarOpen}
        taskData={taskData}
      />

      {/* pop up */}
      {isShowCreate && (
        <FormTask
          isShowForm={isShowCreate}
          setIsShowForm={setIsShowCreate}
          formTitle={"Create Task"}
          isUpdateForm={false}
          setTaskData={setTaskData}
          taskData={taskData}
        />
      )}
      {isShowUpdate && (
        <FormTask
          data={updateData}
          isShowForm={isShowUpdate}
          setIsShowForm={setIsShowUpdate}
          formTitle={"Update Task"}
          isUpdateForm={true}
          setTaskData={setTaskData}
          taskData={taskData}
        />
      )}
      {isShowDetail && (
        <DetailTask
          data={detailData}
          isShowDetail={isShowDetail}
          setIsShowDetail={setIsShowDetail}
          setIsShowUpdate={setIsShowUpdate}
          setUpdateData={setUpdateData}
          setTaskData={setTaskData}
          taskData={taskData}
        />
      )}
      {/* end pop up */}

      <PerfectScrollbar
        options={{
          suppressScrollX: true,
          wheelPropagation: false,
          handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"],
        }}>
        <div className="h-screen">
          <div className="py-6 px-6 flex flex-row w-full min-[1224px]:hidden">
            <Bars3Icon
              className="w-6 h-6 cursor-pointer text-nhask-secondary"
              onClick={handleShowSidebar}
            />
          </div>
          <DndProvider backend={HTML5Backend}>
            <div className="min-[1224px]:pl-72 pt-0 min-[1224px]:pt-8 pb-6 grid grid-cols-1 min-[672px]:grid-cols-2 min-[952px]:grid-cols-3 gap-y-6 gap-8 px-8 justify-items-center">
              {TaskContainerData.map((value, index) => (
                <TaskContainer
                  key={index}
                  TaskContainerData={value}
                  TaskContainerTitle={value.title}
                  TaskContainerStatus={value.status}
                  TaskData={taskData}
                  setTaskData={setTaskData}
                  isShowCreate={isShowCreate}
                  setIsShowCreate={setIsShowCreate}
                  handleClickDetail={handleClickDetail}
                />
              ))}
            </div>
          </DndProvider>
        </div>
      </PerfectScrollbar>
    </div>
  );
};

export default Home;
