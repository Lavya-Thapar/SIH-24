type Props = {
  date:Date|string;
  
}

const CalendarIcon = ({date}: Props) => {
  const currDate = new Date(date);
  
  return (
    <div className="size-10 border-t-8  font-semibold text-gray-600 border-t-dark-blue bg-gray-300 rounded-md ">
      <div className="text-center text-xs">
        <span>{currDate.getDate()}</span>
      </div>
      <div className="text-center text-xs">
        <span>{currDate.toLocaleDateString('default',{month:'short'})}</span>
      </div>
    </div>
  )
}

export default CalendarIcon;