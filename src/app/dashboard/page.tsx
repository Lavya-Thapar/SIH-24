import Navbar from "../components/Navbar";
import NavIcon from "../components/NavIcon";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import Container from "../components/Container";
import AssignmentTable from "../components/AssignmentTable";
import EventCalendar from "../components/Calendar/EventCalendar";
import UpcomingQuizzes from "../components/Quizzes/UpcomingQuizzes";
import AttendanceChart from "../components/Charts/AttendanceChart";
import LineChart from "../components/Charts/LineChart";

export default function Dashboard() {
  return (
    <div className="bg-dirty-white min-h-screen w-full box-border">
      <Navbar AddAssignment="True" />
      <div className="p-8 pl-32 w-fit mx-auto">
        <div className="flex justify-between">
          <div className="flex font-normal italic text-[1.5rem] text-[#04002DD9]">
            Subject Name
          </div>
          <div>
            <NavIcon icon={<PermIdentityIcon />} />
          </div>
        </div>
        <div className="flex flex-col gap-7">
          <div className="flex flex-col lg:flex-row justify-start gap-10">
            <Container head="Attendance Chart" comp={<AttendanceChart />} />
            <Container head="Upcoming Quizzes" comp={<UpcomingQuizzes />} />
            <Container head="Pending Assignments" comp={<AssignmentTable />} />
          </div>
          <div className="flex flex-col lg:flex-row justify-start gap-10">
            <Container head="Your Performance" comp={<LineChart />} />
            <Container
              head="Daily Schedule"
              comp={
                <EventCalendar height={70} timeLineStart={8} timeLineEnd={22} />
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
