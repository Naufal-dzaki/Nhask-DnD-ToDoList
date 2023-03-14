import React, { useState, useEffect } from "react";
import axios from "axios";
import SideBar from "../../components/SideBar";
import FormTask from "../../components/Modal/FormTask";
import DetailTask from "../../components/Modal/DetailTask";
import TaskContainer from "../../components/Task/TaskContainer";
import { Bars3Icon } from "@heroicons/react/24/outline";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import "./PerfectScrollbar.css";

const dummyTask = {
  data: [
    {
      id: 1,
      title: "Create UI Design",
      status: "to-do",
      deadline: "2023-02-12",
      level: "8",
      description:
        "Nunc lorem augue, scelerisque ut erat sed, pharetra porta ligula. Morbi augue ligula, viverra eu feugiat eu, fermentum nec tortor. Vivamus rutrum at metus nec hendrerit. Duis nec dignissim velit, ac efficitur massa. Sed in mollis odio. ",
    },
    {
      id: 2,
      title: "Create API",
      status: "to-do",
      deadline: "2023-03-06",
      level: "3",
      description:
        "Nunc lorem augue, scelerisque ut erat sed, pharetra porta ligula. Morbi augue ligula, viverra eu feugiat eu, fermentum nec tortor. Vivamus rutrum at metus nec hendrerit. Duis nec dignissim velit, ac efficitur massa. Sed in mollis odio. ",
    },
    {
      id: 3,
      title: "slicing home page",
      status: "to-do",
      deadline: "2023-03-17",
      level: "1",
      description:
        "Nunc lorem augue, scelerisque ut erat sed, pharetra porta ligula. Morbi augue ligula, viverra eu feugiat eu, fermentum nec tortor. Vivamus rutrum at metus nec hendrerit. Duis nec dignissim velit, ac efficitur massa. Sed in mollis odio. ",
    },
    {
      id: 4,
      title: "fix bug drag and drop card to-do",
      status: "to-do",
      deadline: "2023-02-07",
      level: "9",
      description:
        "Nunc lorem augue, scelerisque ut erat sed, pharetra porta ligula. Morbi augue ligula, viverra eu feugiat eu, fermentum nec tortor. Vivamus rutrum at metus nec hendrerit. Duis nec dignissim velit, ac efficitur massa. Sed in mollis odio. ",
    },
    {
      id: 5,
      title: "filter status api for task to do drag and drop to-do list nhask",
      status: "on-progress",
      deadline: "2023-03-08",
      level: "7",
      description:
        "Nunc lorem augue, scelerisque ut erat sed, pharetra porta ligula. Morbi augue ligula, viverra eu feugiat eu, fermentum nec tortor. Vivamus rutrum at metus nec hendrerit. Duis nec dignissim velit, ac efficitur massa. Sed in mollis odio. ",
    },
    {
      id: 6,
      title: "fix token login",
      status: "to-do",
      deadline: "2023-01-10",
      level: "3",
      description:
        "Nunc lorem augue, scelerisque ut erat sed, pharetra porta ligula. Morbi augue ligula, viverra eu feugiat eu, fermentum nec tortor. Vivamus rutrum at metus nec hendrerit. Duis nec dignissim velit, ac efficitur massa. Sed in mollis odio. ",
    },
    {
      id: 7,
      title: "fix token login",
      status: "on-progress",
      deadline: "2023-01-10",
      level: "5",
      description:
        "Nunc lorem augue, scelerisque ut erat sed, pharetra porta ligula. Morbi augue ligula, viverra eu feugiat eu, fermentum nec tortor. Vivamus rutrum at metus nec hendrerit. Duis nec dignissim velit, ac efficitur massa. Sed in mollis odio. ",
    },
    {
      id: 8,
      title: "fix token login",
      status: "to-do",
      deadline: "2023-01-10",
      level: "4",
      description:
        "Nunc lorem augue, scelerisque ut erat sed, pharetra porta ligula. Morbi augue ligula, viverra eu feugiat eu, fermentum nec tortor. Vivamus rutrum at metus nec hendrerit. Duis nec dignissim velit, ac efficitur massa. Sed in mollis odio. ",
    },
    {
      id: 9,
      title: "fix token login",
      status: "to-do",
      deadline: "2023-01-10",
      level: "3",
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
  const [isShowCreate, setIsShowCreate] = useState(false);
  const [isShowUpdate, setIsShowUpdate] = useState(false);
  const [isShowDetail, setIsShowDetail] = useState(false);
  const [updateData, setUpdateData] = useState([]);
  const [detailData, setDetailData] = useState([]);
  const [taskData, setTaskData] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // useEffect(() => {
  //   fetch("https://5405-180-253-163-31.ap.ngrok.io/api/aktivitas", {
  //     mode: "no-cors",
  //   })
  //     .then((response) => response.json())
  //     .then((json) => console.log(json));
  // }, []);

  // useEffect(() => {
  //   axios
  //     .get("https://5405-180-253-163-31.ap.ngrok.io/api/aktivitas")
  //     .then((response) => console.log(response));
  // }, []);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const result = await axios.get(
  //         "https://5405-180-253-163-31.ap.ngrok.io/api/aktivitas"
  //       );
  //       console.log(result.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })();
  // }, []);

  useEffect(() => {
    getData();
  }, []);

  console.log(taskData);

  // useEffect(() => {
  //   getData();
  // }, []);

  // const getData = async () => {
  //   const harga = await fetch(
  //     "https://5405-180-253-163-31.ap.ngrok.io/api/aktivitas"
  //   );
  //   const value = await harga.json();
  //   setTaskData(value);
  // };

  const getData = async () => {
    await axios
      .get(`https://5405-180-253-163-31.ap.ngrok.io/api/aktivitas`)
      .then((res) => {
        setTaskData(res.data);
      })
      .catch(() => {
        console.log("error");
      });
  };

  const handleClickUpdates = (value) => {
    setUpdateData(value);
    if (isShowDetail) setIsShowDetail(false);
    setIsShowUpdate(true);
  };

  const handleClickDetail = (value) => {
    setDetailData(value);
    if (isShowDetail) setIsShowDetail(false);
    else setIsShowDetail(true);
  };

  const handleShowSidebar = () => {
    if (isSidebarOpen) setIsSidebarOpen(true);
    else setIsSidebarOpen(true);
  };

  const data = dummyTask.data;

  const TaskContainerData = dummyTaskContainer.data;

  return (
    <div className="min-h-screen bg-nhask-bg-primary">
      <SideBar
        setIsSidebarOpen={setIsSidebarOpen}
        isSidebarOpen={isSidebarOpen}
      />
      {/* pop up */}
      {isShowCreate && (
        <FormTask
          isShowForm={isShowCreate}
          setIsShowForm={setIsShowCreate}
          formTitle={"Create Task"}
          isUpdateForm={false}
        />
      )}
      {isShowUpdate && (
        <FormTask
          data={updateData}
          isShowForm={isShowUpdate}
          setIsShowForm={setIsShowUpdate}
          formTitle={"Update Task"}
          isUpdateForm={true}
        />
      )}
      {isShowDetail && (
        <DetailTask
          data={detailData}
          isShowDetail={isShowDetail}
          setIsShowDetail={setIsShowDetail}
          handleClickUpdates={handleClickUpdates}
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

          <div className="min-[1224px]:pl-72 pt-0 min-[1224px]:pt-8 pb-6 grid grid-cols-1 min-[672px]:grid-cols-2 min-[952px]:grid-cols-3 gap-y-6 gap-8 px-8 justify-items-center">
            {TaskContainerData.map((value) => (
              <div key={value.id} className="w-full">
                <TaskContainer
                  TaskContainerTitle={value.title}
                  TaskContainerStatus={value.status}
                  isShowCreate={isShowCreate}
                  setIsShowCreate={setIsShowCreate}
                  TaskData={data}
                  handleClickDetail={handleClickDetail}
                />
              </div>
            ))}
          </div>
        </div>
      </PerfectScrollbar>
    </div>
  );
};

export default Home;
