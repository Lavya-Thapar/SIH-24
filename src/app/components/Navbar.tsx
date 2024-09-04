import NavIcon from './NavIcon';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

interface props {
    AddAssignment : string;
}

export default function Navbar({AddAssignment} : props){
    return(
        <div className='h-[95vh] w-[80px] bg-[#2C2F33] px-4 py-8 mx-4 my-[2.5vh] rounded-[10px] flex flex-col justify-between'>
            <div>
                <NavIcon icon={<HomeOutlinedIcon />} />
                <NavIcon icon={<CalendarTodayOutlinedIcon />} />
                {AddAssignment==='True' && <NavIcon icon={<AssignmentOutlinedIcon />} /> }
            </div>
            <div>
                <NavIcon icon={<SettingsOutlinedIcon />} />
                <NavIcon icon={<LogoutOutlinedIcon />} />
            </div>
        </div>
    )
}