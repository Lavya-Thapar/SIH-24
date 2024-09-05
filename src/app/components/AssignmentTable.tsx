"use client";

import { Assignment } from "@/types/assignments";
import AlarmIcon from "@mui/icons-material/Alarm";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { useEffect, useState } from "react";

const n = 7;

const AssignmentTable = () => {
  const [assignments, setAssignments] = useState<Assignment[]>([]);

  useEffect(() => {
    fetch("/assignments.json")
      .then((response) => response.json())
      .then((data) => setAssignments(data));
  }, []);

  const calculateIcon = (dateString: string) => {
    const [day, month] = dateString.split(" ") as [
      string,
      (
        | "JAN"
        | "FEB"
        | "MAR"
        | "APR"
        | "MAY"
        | "JUN"
        | "JUL"
        | "AUG"
        | "SEP"
        | "OCT"
        | "NOV"
        | "DEC"
      )
    ];
    const months = {
      JAN: 0,
      FEB: 1,
      MAR: 2,
      APR: 3,
      MAY: 4,
      JUN: 5,
      JUL: 6,
      AUG: 7,
      SEP: 8,
      OCT: 9,
      NOV: 10,
      DEC: 11,
    };

    const submissionDate = new Date(
      new Date().getFullYear(),
      months[month],
      parseInt(day)
    );
    const currentDate = new Date();
    const diffInTime = Math.abs(
      submissionDate.getTime() - currentDate.getTime()
    );
    const diffInDays = diffInTime / (1000 * 3600 * 24);

    return diffInDays <= n ? (
      <AlarmIcon className="text-[#E20000D9]" />
    ) : (
      <SendOutlinedIcon className="text-[#147E03]" />
    );
  };

  return (
    <div className="h-[30vh] overflow-y-scroll no-scrollbar">
      <table>
        <thead>
          <tr className="text-center text-[#04002DD9] sticky top-0 bg-white">
            <th className="py-3 min-w-[70px]">Date</th>
            <th className="py-3 min-w-[200px]">Subject</th>
            <th className="py-3 min-w-[70px">Submit</th>
          </tr>
        </thead>
        <tbody>
          {assignments.map((assignment, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-[#f9f9f9]" : ""}>
              <td className="py-3 text-[#333] px-2">{assignment.date}</td>
              <td className="py-3 text-[#333] text-center px-5 overflow-hidden text-ellipsis whitespace-nowrap hover:underline cursor-pointer">
                {assignment.subject}
              </td>
              <td className="py-3 px-2 text-center">
                {calculateIcon(assignment.date)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssignmentTable;
