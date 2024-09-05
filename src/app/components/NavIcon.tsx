"use client";

import { ReactElement } from "react";

interface props {
  icon: ReactElement;
}

export default function NavIcon({ icon }: props) {
  return (
    <div className="p-3 rounded-[50%] bg-[white] mb-5 cursor-pointer hover:bg-blue-500 hover:text-[white] flex justify-center items-center text-[#04002DD9]">
      {icon}
    </div>
  );
}
