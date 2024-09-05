export type Task = {
  id: number;
  title: string;
  startTime: string;
  endTime: string;
  type: TaskType;
};

export type TaskType = "class" | "quizz";
