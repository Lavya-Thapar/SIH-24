"use client";
import { useEffect, useMemo, useRef, useState } from "react";

type Props = {
  height: number;
  pxPerMin: number;
  timeLineStart: number;
  timeLineEnd: number;
};

const calculateCurrTime = (
  pxPerMin: number,
  timeLineStart: number,
  timeLineEnd: number
): [number, number] => {
  const currTime = new Date();
  let minutes = Math.max(
    currTime.getHours() * 60 + currTime.getMinutes() - timeLineStart * 60,
    0
  );
  minutes = Math.min(minutes, timeLineEnd * 60 - timeLineStart);
  let position = minutes * pxPerMin;
  return [minutes, position];
};

const Timeline = ({ height, pxPerMin, timeLineStart, timeLineEnd }: Props) => {
  const timeRef = useRef<HTMLDivElement>(null);
  const elements = useMemo(() => {
    const elems = [];
    for (let i = timeLineStart; i <= timeLineEnd; i++) {
      elems.push(
        <div
          key={i}
          className={`border-gray-400 border-t-2 border-dotted relative`}
          style={{ height: `${height}px` }}
        >
          <span className="block absolute bg-gray-200 px-2 py-1 rounded-lg text-xs -top-3.5">
            {i < 12 ? `${i} AM` : i == 12 ? `${i} PM` : `${i - 12} PM`}
          </span>
        </div>
      );
    }
    return elems;
  }, [height, timeLineStart, timeLineEnd]);

  const res = useMemo(() => {
    return calculateCurrTime(pxPerMin, timeLineStart, timeLineEnd);
  }, [pxPerMin, timeLineStart, timeLineEnd]);
  // TODO: currTimeMins never used?
  const [_currTimeMins, setCurrTimeMins] = useState<number>(res[0]);
  const [position, setPosition] = useState<number>(res[1]);

  useEffect(() => {
    const updateCurrTime = () => {
      const [mins, pos] = calculateCurrTime(
        pxPerMin,
        timeLineStart,
        timeLineEnd
      );
      setCurrTimeMins(mins);
      setPosition(pos);
    };
    updateCurrTime();
    const timer = setTimeout(() => {
      const scrollIntoViewOptions: ScrollIntoViewOptions = {
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      };

      timeRef.current?.scrollIntoView(scrollIntoViewOptions);
    }, 0);

    const interval = setInterval(updateCurrTime, 50 * 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [pxPerMin, timeLineStart, timeLineEnd]);

  return (
    <div className="relative">
      {elements}
      <div
        className="border-t-2 border-blue-600 absolute w-full z-10"
        ref={timeRef}
        style={{ top: `${position}px` }}
      >
        <span className="bg-blue-600 absolute rounded-full block w-2 h-2 -left-1 -top-1"></span>
      </div>
    </div>
  );
};

export default Timeline;
