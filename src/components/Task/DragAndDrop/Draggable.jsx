import React from "react";
import { useDrag } from "react-dnd";

function Draggable({ children, type, item, state, handleOnClick, parameter }) {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type,
      item,
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    [state]
  );

  //   if (isDragging && hideWhenDrag) {
  //     return <div ref={drag}></div>;
  //   }

  return (
    <span
      className={`relative flex w-full bg-nhask-bg-primary rounded-xl py-[10px] px-4 items-center mb-4 cursor-pointer ${
        isDragging && "cursor-grabbing"
      }`}
      ref={drag}
      onClick={() => handleOnClick(parameter)}>
      {children}
    </span>
  );
}

export default Draggable;
