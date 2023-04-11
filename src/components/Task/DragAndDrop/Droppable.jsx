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
      className={`flex flex-col mx-auto justify-between min-w-[308px] w-full max-w-md min-h-[164px] h-fit max-h-[85vh] rounded-2xl ${
        containerStatus === "to-do" ? "p-1" : "px-1 py-1"
      } ${isActive ? "bg-nhask-bg-secondary-4/5" : "bg-nhask-bg-secondary"} `}
      ref={drop}>
      {children}
    </div>
  );
}

export default Droppable;
