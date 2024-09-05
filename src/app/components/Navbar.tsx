import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NavIcon from "./NavIcon";

interface props {
  AddAssignment: string;
}

export default function Navbar({ AddAssignment }: props) {
  return (
    <div className="h-[95vh] fixed w-[80px] bg-[#2C2F33] px-4 py-8 left-4 top-[2.5vh] rounded-[10px] flex flex-col justify-between z-10">
      <div>
        <NavIcon icon={<HomeOutlinedIcon />} />
        <NavIcon icon={<CalendarTodayOutlinedIcon />} />
        {AddAssignment === "True" && (
          <NavIcon icon={<AssignmentOutlinedIcon />} />
        )}
      </div>
      <div>
        <NavIcon icon={<SettingsOutlinedIcon />} />
        <NavIcon icon={<LogoutOutlinedIcon />} />
      </div>
    </div>
  );
}
