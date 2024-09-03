import React from "react";
import CalendarIcon from "./CalendarIcon";

type Props = {
  quizz: {
    id: string;
    title: string;
    date: string;
    startTime: string;
    endTime: string;
    description: string;
    location: string;
    batch: string;
  };
};

const UpcomingQuizzBox = ({ quizz }: Props) => {
  const startTime = new Date(quizz.startTime);
  const endTime = new Date(quizz.endTime);

  const startTimeString = startTime.toLocaleTimeString("en-us", {
    hour: "numeric",
    minute: "2-digit",
    second: undefined,
    hour12: true,
  });
  const endTimeString = endTime.toLocaleTimeString("en-us", {
    hour: "numeric",
    minute: "2-digit",
    second: undefined,
    hour12: true,
  });
  return (
    <div className="w-full  border-2 border-gray-400 border-dotted p-2 rounded-xl my-2">
      <div className="flex gap-4 items-center">
        <CalendarIcon date={quizz.date}></CalendarIcon>
        <div className="flex-grow max-w-96 flex flex-col text-sm">
          <div className="flex items-center  justify-between ">
            <span className="block font-semibold  overflow-ellipsis text-xs ">{quizz.title}</span>
            <span className="block text-xs min-w-max font-medium">
              {startTimeString}-{endTimeString}
            </span>
          </div>
          <span className="text-xs ">{quizz.batch}</span>
        </div>
      </div>
    </div>
  );
};

export default UpcomingQuizzBox;
