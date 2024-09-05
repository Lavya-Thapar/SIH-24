import Navbar from "@/app/components/Navbar";
import NavIcon from "@/app/components/NavIcon";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import Container from "@/app/components/Container";
import AssignmentTable from "@/app/components/AssignmentTable";
import EventCalendar from "@/app/components/Calendar/EventCalendar";
import UpcomingQuizzes from "@/app/components/Quizzes/UpcomingQuizzes";
import AttendanceChart from "@/app/components/Charts/AttendanceChart";
import LineChart from "@/app/components/Charts/LineChart";

export default function SubjectDashboard({
  params: { subjectName },
}: {
  params: {
    subjectName: string;
  };
}) {
  return (
    <div className="bg-dirty-white min-h-screen w-full box-border">
      <Navbar AddAssignment="True" />
      <div className="p-8 pl-32 w-fit mx-auto">
        <div className="flex justify-between">
          <div className="flex font-normal italic text-[1.5rem] text-[#04002DD9]">
            {subjectName.replaceAll("%20", " ")}
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
