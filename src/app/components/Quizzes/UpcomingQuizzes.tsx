"use client";
import type { Quiz } from "@/types/quizzes";
import { useEffect, useState } from "react";
import UpcomingQuizBox from "./UpcomingQuizBox";

const UpcomingQuizzes = () => {
  const [quizzes, setQuizzes] = useState<Array<Quiz>>([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await fetch("/Quizzes.json");
        const data = (await response.json()) as Array<Quiz>;
        setQuizzes(data);
      } catch (error) {
        console.error("Failed to load quizzes:", error);
      }
    };

    fetchQuizzes();
  }, []);

  return (
    <div className="w-full mx-auto bg-white text-black/80 rounded-xl px-4">
      <div className="flex flex-col max-h-[30vh] overflow-y-auto no-scrollbar">
        {quizzes.map((quiz) => (
          <UpcomingQuizBox key={quiz.id} quiz={quiz} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingQuizzes;
