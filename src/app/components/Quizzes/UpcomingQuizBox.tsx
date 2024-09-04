import React from "react";
import CalendarIcon from "./CalendarIcon";

type Props = {
  quiz: {
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

const UpcomingQuizzBox = ({ quiz }: Props) => {
  const startTime = new Date(quiz.startTime);
  const endTime = new Date(quiz.endTime);

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
    <div className="w-full border-2 border-gray-400 border-dotted p-2 rounded-xl my-2 cursor-pointer">
      <div className="flex gap-4 items-center">
        <CalendarIcon date={quiz.date}></CalendarIcon>
        <div className="flex-grow max-w-96 flex flex-col text-sm">
          <div className="flex items-center justify-between ">
            <span className="block font-semibold overflow-hidden text-ellipsis whitespace-nowrap max-w-[130px] text-xs hover:underline ">{quiz.title}</span>
            <span className="block text-xs min-w-max font-medium">
              {startTimeString}-{endTimeString}
            </span>
          </div>
          <span className="text-xs ">{quiz.batch}</span>
        </div>
      </div>
    </div>
  );
};

export default UpcomingQuizzBox;