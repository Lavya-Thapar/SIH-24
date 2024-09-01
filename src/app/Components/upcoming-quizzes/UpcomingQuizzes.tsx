import CalendarIcon from "./CalendarIcon";
import quizz from "@/app/Components/upcoming-quizzes/quizz.json"
import UpcomingQuizzBox from "./UpcomingQuizzBox";
type Props = {}

const UpcomingQuizzes = (props: Props) => {
  return (
    <div className="w-96 bg-white text-black rounded-xl p-4">
      <h2 className="font-semibold text-lg">Upcomming Quizzes</h2>
      <div className="flex flex-col h-64 overflow-y-auto custom-scrollbar p-2">
        {
          quizz.upcomingQuizzes.map((quizz)=>(
            <UpcomingQuizzBox key={quizz.id} quizz={quizz}></UpcomingQuizzBox>
          ))
        }
      </div>
    </div>
  )
}

export default UpcomingQuizzes;