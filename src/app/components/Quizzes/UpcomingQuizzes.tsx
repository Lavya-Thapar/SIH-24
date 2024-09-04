"use client";
import { useEffect, useState } from "react";
import UpcomingQuizBox from "./UpcomingQuizBox";

type Props = {}

const UpcomingQuizzes = (props: Props) => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await fetch('/Quizzes.json');
        const data = await response.json();
        setQuizzes(data.upcomingQuizzes);
      } catch (error) {
        console.error("Failed to load quizzes:", error);
      }
    };

    fetchQuizzes();
  }, []);

  return (
    <div className="w-96 bg-white text-black rounded-xl px-4">
      <div className="flex flex-col max-h-[30vh] overflow-y-auto no-scrollbar px-2">
        {quizzes.map((quiz) => (
          <UpcomingQuizBox key={quiz.id} quiz={quiz} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingQuizzes;
