import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="z-10 fixed inset-x-0 h-24 flex items-center justify-between px-5 md:px-20 text-sm md:text-lg bg-dirty-white/80 backdrop-blur-sm">
      <div className="flex items-center justify-center gap-5 text-black/75">
        <div className="md:mr-10">Logo</div>
        <Link
          href="/"
          className="group mt-0.5 hover:text-medium-blue transition duration-200"
        >
          Home
          <span
            aria-hidden="true"
            className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-medium-blue"
          ></span>
        </Link>
        <Link
          href="/about"
          className="group mt-0.5 hover:text-medium-blue transition duration-200"
        >
          About
          <span
            aria-hidden="true"
            className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-medium-blue"
          ></span>
        </Link>
      </div>
      <div className="flex items-center justify-center gap-5">
        <Link
          href="/login"
          className="text-black/75 hover:text-medium-blue transition"
        >
          Login
        </Link>
        <Link
          href="/login"
          className="px-5 py-2 border-dark-blue border-2 rounded-lg text-dark-blue hover:bg-dark-blue hover:text-white transition"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <div className="pt-10 px-10 md:px-0 min-h-[calc(100vh-6rem)] flex flex-col">
      <div className="max-w-prose mx-auto">
        <h1 className="font-extrabold text-4xl md:text-6xl text-center">
          Learning is now more easy and affordable
        </h1>
        <p className="mt-5 text-center text-black/80 text-lg">
          Convert your school into a{" "}
          <span className="inline-block underline decoration-wavy decoration-dark-blue/80 decoration-[1.5px] underline-offset-4">
            smart school
          </span>
          . Track your progress using{" "}
          <span className="inline-block text-dark-blue font-semibold">
            AI generated reports
          </span>
          .
        </p>
        <Link
          href="/login"
          className="block w-fit mx-auto mt-5 px-5 py-3 bg-dark-blue rounded-lg text-white"
        >
          Get Started
        </Link>
      </div>
      <Image
        src="/landing-page/dashboard-pic.png"
        width={1919}
        height={1045}
        alt="dashboard-page image"
        className="grow ring-2 ring-offset-4 ring-dark-blue aspect-video mx-auto rounded-lg mt-10 w-[90%] md:w-[80%] lg:w-[70%] bg-gray-400"
      />
    </div>
  );
};

const About = () => {
  return (
    <div className="mt-10 px-10">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-10 w-[90%] md:w-[80%] lg:w-[70%] mx-auto">
        <div className="bg-white/20 hover:bg-white border border-blue-200 aspect-square flex flex-col items-center justify-center gap-5 p-5 rounded-lg hover:shadow-lg hover:shadow-dark-gray transition hover:scale-105">
          {/* <a href="https://www.flaticon.com/free-icons/webcam" title="webcam icons">Webcam icons created by Freepik - Flaticon</a> */}
          <Image
            src="/landing-page/webcam.png"
            alt=""
            width={64}
            height={64}
            className="size-10"
          />
          <p className="text-center text-sm text-black/80">
            Computer vision assisted attendance
          </p>
        </div>
        <div className="bg-white/20 hover:bg-white border border-blue-200 aspect-square flex flex-col items-center justify-center gap-5 p-5 rounded-lg hover:shadow-lg hover:shadow-dark-gray transition hover:scale-105">
          {/* <a href="https://www.flaticon.com/free-icons/calendar" title="calendar icons">Calendar icons created by Freepik - Flaticon</a> */}
          <Image
            src="/landing-page/schedule.png"
            alt=""
            width={64}
            height={64}
            className="size-10"
          />
          <p className="text-center text-sm text-black/80">
            Schedule for teachers and students
          </p>
        </div>
        <div className="bg-white/20 hover:bg-white border border-blue-200 aspect-square flex flex-col items-center justify-center gap-5 p-5 rounded-lg hover:shadow-lg hover:shadow-dark-gray transition hover:scale-105">
          {/* <a href="https://www.flaticon.com/free-icons/artificial-intelligence" title="artificial intelligence icons">Artificial intelligence icons created by Freepik - Flaticon</a> */}
          <Image
            src="/landing-page/ai.png"
            alt=""
            width={64}
            height={64}
            className="size-10"
          />
          <p className="text-center text-sm text-black/80">
            AI generated report for improvements
          </p>
        </div>
        <div className="bg-white/20 hover:bg-white border border-blue-200 aspect-square flex flex-col items-center justify-center gap-5 p-5 rounded-lg hover:shadow-lg hover:shadow-dark-gray transition hover:scale-105">
          {/* <a href="https://www.flaticon.com/free-icons/quiz" title="quiz icons">Quiz icons created by Flat Icons - Flaticon</a> */}
          <Image
            src="/landing-page/quiz.png"
            alt=""
            width={64}
            height={64}
            className="size-10"
          />
          <p className="text-center text-sm text-black/80">
            Realtime quizzes to revise and compete
          </p>
        </div>
      </div>
    </div>
  );
};

const Tick = () => {
  return (
    <img
      src="/landing-page/tick.svg"
      aria-hidden="true"
      className="size-3 inline-block mr-2"
    />
  );
};

const Description = () => {
  return (
    <div className="mt-10 flex justify-center gap-10 mx-auto w-fit px-10">
      <div>
        <h2 className="text-4xl font-semibold text-black/80 w-full md:max-w-[60vw]">
          A complete online system for your school
        </h2>
        <p className="mt-3 text-black/70">
          StudyMate supports many features while providing AI powered smart
          classroom solutions
        </p>
        <ul className="mt-4 flex flex-col gap-2 text-black/70">
          <li className="flex items-center">
            <Tick />
            Multiple batch support for teachers
          </li>
          <li className="flex items-center">
            <Tick />
            Event schedule to avoid conflicting events
          </li>
          <li className="flex items-center">
            <Tick />
            Student wise as well as batch wise metrics for easier evaluation
          </li>
          <li className="flex items-center">
            <Tick />
            Assignments tracker for avoiding deadlines
          </li>
          <li className="flex items-center">
            <Tick />
            Identification of weak topics per subject
          </li>
        </ul>
      </div>
      <Image
        src="/landing-page/dashboard-phone.png"
        width={747}
        height={947}
        alt="dashboard-page image"
        className="w-60 hidden md:block aspect-[9/12] mx-auto rounded-lg"
      />
    </div>
  );
};

const Footer = () => {
  return (
    <div className="mt-20 mx-auto w-fit rounded-xl bg-dark-blue flex items-center justify-center gap-10 md:px-5 flex-col md:flex-row py-5">
      <p className="font-semibold text-white max-w-[50%] text-center">
        Interested in bringing StudyMate to your school? Try it out now
      </p>
      <Link
        href="login"
        className="rounded-2xl border-2 border-dirty-white px-5 py-2 text-lg text-dirty-white hover:bg-dirty-white hover:text-black/70 transition-colors"
      >
        Login / Sign up
      </Link>
    </div>
  );
};

export default function Home() {
  return (
    <main className="bg-white pb-10">
      <Navbar />
      <div aria-hidden="true" className="pt-24"></div>
      <Hero />
      <About />
      <Description />
      <Footer />
    </main>
  );
}
