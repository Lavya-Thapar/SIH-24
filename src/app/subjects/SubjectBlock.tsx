import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";

interface props {
  name: string;
  teacher: string;
  assignments: string[];
  quizzes: string[];
  color: string;
}

export default function SubjectBlock({
  name,
  teacher,
  assignments,
  quizzes,
  color,
}: props) {
  return (
    <div className="w-[20vw] min-w-[200px] h-[40vh] rounded-[10px] text-[1.1rem] bg-[white] cursor-pointer [box-shadow:0px_0px_10px_rgba(0,_0,_0,_0.1)] sub-block">
      <div
        className="text-[white] p-6 h-[35%] flex flex-col justify-center rounded-tl-[10px] rounded-tr-[10px]"
        style={{ backgroundColor: color }}
      >
        <div className="flex justify-between items-center">
          <div className="text-[1.4rem] hover:underline overflow-hidden text-ellipsis whitespace-nowrap max-w-[80%]">
            {name}
          </div>
          <div className="p-2 hover hover:cursor-pointer hover:rounded-[50%]">
            <MoreVertOutlinedIcon />
          </div>
        </div>
        <div>{teacher}</div>
      </div>
      <div className="overflow-y-scroll h-[180px] p-6 bg-[white] text-[black] no-scrollbar rounded-bl-[10px] rounded-br-[10px]">
        <span className="underline font-medium ">Assignments</span>
        <ul>
          {assignments && assignments.length > 0 ? (
            assignments.map((assignment, index) => (
              <li
                key={index}
                className="py-1 overflow-hidden text-ellipsis whitespace-nowrap max-w-[85%] hover:underline"
              >
                {assignment}
              </li>
            ))
          ) : (
            <li className="py-1 text-gray-500">No assignments available</li>
          )}
        </ul>
        <br />
        <span className="underline font-medium">Quizzes</span>
        <ul>
          {quizzes && quizzes.length > 0 ? (
            quizzes.map((quiz, index) => (
              <li
                key={index}
                className="py-1 overflow-hidden text-ellipsis whitespace-nowrap max-w-[85%] hover:underline"
              >
                {quiz}
              </li>
            ))
          ) : (
            <li className="py-1 text-gray-500">No quizzes available</li>
          )}
        </ul>
      </div>
    </div>
  );
}
