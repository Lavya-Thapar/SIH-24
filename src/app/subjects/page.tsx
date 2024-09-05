"use client";
import Navbar from "../components/Navbar";
import NavIcon from "../components/NavIcon";
import Greeting from "../components/Greeting";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import SubjectBlock from "./SubjectBlock";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import PopupForm from "./PopUp";
import { useEffect, useState } from "react";

interface Assignment {
  name: string;
  teacher: string;
  assignments: string[];
  quizzes: string[];
  color: string;
}

const colors = ["navy", "#3D52A0", "#7091E6", "#8998F6"];

export default function Subjects() {
  const [subjects, setSubjects] = useState<Assignment[]>([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subjectName = formData.get("subjectName");
    const teacherName = formData.get("teacherName");
    console.log("Submitted:", { subjectName, teacherName });

    handleClosePopup();
  };

  useEffect(() => {
    fetch("/Subjects.json")
      .then((response) => response.json())
      .then((data) => {
        const dataWithColors = data.map((subject: any, index: number) => ({
          ...subject,
          color: colors[index % colors.length],
        }));
        setSubjects(dataWithColors);
      })
      .catch((error) => console.error("Error loading the subjects:", error));
  }, []);

  return (
    <div className="bg-dirty-white min-h-screen box-border flex">
      <div>
        <Navbar AddAssignment="False" />
      </div>
      <div className="flex-[1] p-8 pl-32 w-fit mx-auto">
        <div className="flex justify-between">
          <div className="flex font-normal italic text-[1.5rem] text-[#04002DD9]">
            <Greeting />, Harsh
          </div>
          <div className="flex gap-3">
            <div>
              <button onClick={handleOpenPopup}>
                <NavIcon icon={<AddOutlinedIcon />} />
              </button>
            </div>
            <div>
              <NavIcon icon={<PermIdentityIcon />} />
            </div>
          </div>
        </div>
        <PopupForm
          isOpen={isPopupOpen}
          onClose={handleClosePopup}
          onSubmit={handleSubmit}
        />
        <div className="flex justify-between">
          <div className="grid grid-cols-4 gap-8">
            {subjects.map((subject, index) => (
              <SubjectBlock
                key={index}
                name={subject.name}
                teacher={subject.teacher}
                assignments={subject.assignments}
                color={subject.color}
                quizzes={subject.quizzes}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
