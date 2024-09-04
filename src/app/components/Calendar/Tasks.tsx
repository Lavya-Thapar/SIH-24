import React from "react";

type TaskType = "class" | "quizz";
type Props = {
  task: {
    id: number;
    title: string;
    startTime: string;
    endTime: string;
    type: string;
  };
  pxPerMin: number;
  offset: number;
};

const borderStyles = {
  class: "border-t-[8px] border-blue-500",
  quizz: "border-t-[8px] border-red-500",
  default: "border-t-[8px] border-gray-400"
};

const Task = ({ task, pxPerMin, offset }: Props) => {
  const startTime = new Date(task.startTime);
  const endTime = new Date(task.endTime);

  let totalMinutes = startTime.getHours() * 60 + startTime.getMinutes();
  let minutesElapseAfterOffset = Math.max(totalMinutes - offset * 60, 0);
  let duration = endTime.getHours() * 60 + endTime.getMinutes() - totalMinutes;

  let distanceFromTop = minutesElapseAfterOffset * pxPerMin;
  let taskHeight = Math.max(duration * pxPerMin, pxPerMin * 30);
  
  const borderStyle = borderStyles[task.type as TaskType] || borderStyles["default"];
  const container = `bg-white absolute overflow-x-auto rounded-lg w-56 box-border p-2 shadow-md drop-shadow-md overflow-y-auto custom-scrollbar ${borderStyle}`;
  
  return (
    <div className={container} style={{ top: `${distanceFromTop}px`, height: `${taskHeight}px` }}>
      <span className="flex flex-col justify-center items-center h-full cursor-pointer">
        <h2 className="text-sm font-[500] text-center hover:underline">{task.title.toUpperCase()}</h2>
        <div>
          <span className="text-xs">
            {startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - {endTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
      </span>
    </div>
  );
};

export default Task;
