"use client";
import React, { useMemo, useEffect, useState, useRef } from "react";
import Timeline from "./Timeline";
import Task from "./Tasks";

type Props = {
  height: number;
  timeLineStart: number;
  timeLineEnd: number;
};

const EventCalendar = ({ height, timeLineEnd, timeLineStart }: Props) => {
  const [tasks, setTasks] = useState([]);
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch('/Task.json')
      .then(response => response.json())
      .then(data => setTasks(data.tasks))
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);

  const pxPerMin = useMemo(() => height / 60, [height]);

  useEffect(() => {
    const now = new Date();
    const currentTimeInMins = now.getHours() * 60 + now.getMinutes();

    // Scroll to current time if it's within the timeline range
    if (currentTimeInMins >= timeLineStart * 60 && currentTimeInMins <= timeLineEnd * 60 && calendarRef.current) {
      const offsetMins = currentTimeInMins - timeLineStart * 60;
      const scrollPosition = offsetMins * pxPerMin;
      calendarRef.current.scrollTop = scrollPosition;
    }
  }, [timeLineStart, timeLineEnd, pxPerMin]);

  return (
    <div className="w-96 min-w-60 text-black px-8 py-4">
      <div ref={calendarRef} className="h-[30vh] w-full rounded-lg overflow-y-scroll relative no-scrollbar">
        <div className="w-full h-full absolute py-2 left-0">
          <Timeline height={height} pxPerMin={pxPerMin} timeLineStart={timeLineStart} timeLineEnd={timeLineEnd} />
        </div>
        <div className="w-full">
          <div className="pl-20 border-l flex-grow border-l-black w-full relative">
            {tasks.map((task) => {
              const startTime = new Date(task.startTime);
              const startTimeInMins = startTime.getHours() * 60 + startTime.getMinutes();
              if (startTimeInMins > (timeLineEnd + 1) * 60) {
                return null;
              }
              return (
                <Task task={task} key={task.id} pxPerMin={pxPerMin} offset={timeLineStart} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCalendar;
