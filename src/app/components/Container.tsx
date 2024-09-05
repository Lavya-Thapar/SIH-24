"use client";

import { ReactNode } from "react";

interface props {
  head: string;
  comp: ReactNode;
}

export default function Container({ head, comp }: props) {
  return (
    <div className="flex flex-col h-[41vh] items-center p-[20px] rounded-[15px] bg-[white] [box-shadow:0px_0px_10px_rgba(0,_0,_0,_0.1)] w-full">
      <h1 className="text-[#4f4f6f] text-[1.2rem] mb-4 mx-4">{head}</h1>
      <div className="w-full">{comp}</div>
    </div>
  );
}
