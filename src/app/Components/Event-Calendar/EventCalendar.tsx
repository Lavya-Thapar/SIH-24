import React, { useMemo } from "react";
import Timeline from "./TimeLine";
import Task from "./Tasks";
import tasks from "@/app/Components/Event-Calendar/task.json"
type Props = {
  height:number;
  timeLineStart:number;
  timeLineEnd:number;

};

const EventCalendar = ({height,timeLineEnd,timeLineStart}: Props) => {
  
  const pxPerMin = useMemo(()=>height / 60,[height]);
  return (
    <>
      <div className="w-96 min-w-60 h-full min-h-72   text-black bg-white rounded-2xl p-4">
        <span className="font-semibold block my-2">Calendar</span>
        <div className="h-full min-h-72  w-full  rounded-lg  overflow-y-scroll relative custom-scrollbar">
          <div className="w-full h-full absolute py-2 left-0">
            <Timeline
              height={height}
              pxPerMin={pxPerMin}
              timeLineStart={timeLineStart}
              timeLineEnd={timeLineEnd}
            ></Timeline>
          </div>
          <div className="w-full ">
            <div className="pl-20 border-l flex-grow border-l-black w-full relative ">
              {tasks.tasks.map((task) => {
                const startTime = new Date(task.startTime);
                const startTimeInMins =
                  startTime.getHours() * 60 + startTime.getMinutes();
                if (startTimeInMins > (timeLineEnd + 1) * 60) {
                  return null;
                }
                return (
                  <Task
                    task={task}
                    key={task.id}
                    pxPerMin={pxPerMin}
                    offset={timeLineStart}
                  ></Task>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventCalendar;
