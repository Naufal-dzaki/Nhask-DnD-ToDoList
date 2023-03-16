import React from "react";
import { useDrop } from "react-dnd";

function Droppable({ accept, handleDrop, children, state, containerStatus }) {
  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept,
      drop: (item, monitor) =>
        handleDrop(item, monitor, state, containerStatus),
      collect: (monitor) => ({
        isOver: !!monitor.isOver({ shallow: true }),
        canDrop: !!monitor.canDrop(),
      }),
    }),
    [state] // Dependency
  );

  const isActive = isOver && canDrop;

  return (
    <div
      className={`flex flex-col mx-auto justify-between min-w-[308px] w-full max-w-md min-h-[164px] max-h-[85vh] rounded-2xl ${
        containerStatus === "to-do" ? "p-1" : "px-1 pt-1 pb-5"
      } ${isActive ? "bg-nhask-bg-secondary-4/5" : "bg-nhask-bg-secondary"} `}
      //  active dnd ${!isActive && canDrop && "bg-blue-200"}
      ref={drop}>
      {children}
    </div>
  );
}

export default Droppable;
