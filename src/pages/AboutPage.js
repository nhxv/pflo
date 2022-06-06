import { useNavigate } from "react-router-dom";
import avatar from "../assets/linkedin-avatar-dark.png";

export default function AboutPage() {
  const navigate = useNavigate();

  const onViewProjects = () => {
    navigate(`/projects`);
  }

  return (
  <>
  <section className="text-neutral-300">
    <div className="flex lg:flex-row flex-col-reverse justify-center items-center">
      <div>
        <img src={avatar} alt="avatar" className="mr-8 mt-6 lg:mt-0" height="375" width="375" />
      </div>
      <div>
        <p className="font-semibold text-xl text-neutral-100">Hi, my name is Xuân Vinh;</p>
        <p className="text-neutral-500 text-xl">I'm a software developer.</p>
        <div className="flex flex-col sm:flex-row mt-8">
          <a href="#"
          className="link-box sm:mr-6 mb-4 sm:mb-0">
            <i className="pi pi-file-pdf text-3xl"></i>
            <p className="mt-2">Resume</p>
          </a>
          <a href="https://github.com/nhxv" target="_blank"  rel="noopener noreferrer"
          className="link-box sm:mr-6 mb-4 sm:mb-0">
            <i className="pi pi-github text-3xl"></i>
            <p className="mt-2">Github</p>
          </a>

          <a href="https://www.linkedin.com/in/vinh-ngo-119459185/" target="_blank"  rel="noopener noreferrer"
          className="link-box sm:mr-6 mb-4 sm:mb-0">
            <i className="pi pi-linkedin text-3xl"></i>
            <p className="mt-2">Linkedin</p>
          </a>
        </div>

        <div className="mt-8">
          <p className="text-neutral-500">Email:</p>
          <a href="mailto:ngohoangxuanvinh1995@gmail.com"className="link">ngohoangxuanvinh1995@gmail.com</a>
          <p className="text-neutral-500 mt-4">Address:</p>
          <p>District 3 Ho Chi Minh City, Vietnam</p>
          <p className="text-neutral-500 mt-2">Phone number:</p>
          <p> (+84) 772679015</p>
        </div>
      </div>
    </div>

    <div className="mt-8 flex justify-center">
      <div className="2xl:px-80 sm:px-32 px-0">
        <h6 className="text-xl font-semibold text-neutral-100">About me</h6>
        <div className="text-neutral-400">
          <p>
            I decided to pursue a career in web development after completing a basic Python course in Winter of 2018. 
            Since then I've been taking programming courses in college (Java core & data structures, SQL) as well as 
            studying modern web frontend (HTML, CSS, JS) and common web frameworks (React, Angular2+, jQuery, Bootstrap, Spring Boot) 
            from various online resources (Freecodecamp, MDN,<a href="https://github.com/nhxv/mooc.fi-part-2" 
            target="_blank"  rel="noopener noreferrer" className="link"> MOOC.fi</a>, Udemy, F8).
          </p>
          <br />
          <p>
            After learning Angular and Spring Boot, I built 
            <a href="https://github.com/nhxv/task-manager" target="_blank"  rel="noopener noreferrer" 
            className="link"> a task management fullstack web application </a>
            to help with my family's business, then collaborated with my friend on
            <a href="https://github.com/nhxv/uq-ecommerce" target="_blank"  rel="noopener noreferrer" 
            className="link"> a fullstack clothing e-commerce web application </a> 
            after all his teammates bailed on him.
            While working as an inventory clerk at SwiftPOD, I wrote a Chrome extension that ultilizes keyboard shortcuts
            to fill out shipping form on shipstation.com faster and more accurate.
            Recently I've been trying out React ecosystem by building<a href="https://github.com/nhxv/ms" target="_blank"  rel="noopener noreferrer"  
            className="link"> a manga fullstack e-commerce web application </a>
            and dabbling with <a href="https://github.com/nhxv/discord-bot" target="_blank"  rel="noopener noreferrer"  
            className="link"> Discord Bot API</a>.
          </p>
          <br />
          <p>
            Aside from writing business oriented web applications, I've also been working on<a href="https://github.com/nhxv/beatup" className="link"> a little web dancing game</a>.
          </p>
          <br />
          <p>
            When not writing code, I read fictions, play collectible card games and listen to music.
          </p>
        </div>

      </div>
    </div>

    <div className="mt-8">
      <div className="2xl:px-80 sm:px-32 px-0">
        <h6 className="text-xl font-semibold text-neutral-100 mb-2">Technologies I've learned</h6>
        <div className="flex flex-wrap">
          <span className="my-1 mr-2 p-1 font-medium border-2 bg-neutral-800 border-cyan-300 text-cyan-300">
            React
          </span>
          <span className="my-1 mr-2 p-1 font-medium border-2 bg-neutral-800 border-purple-300 text-purple-300">Redux</span>
          <span className="my-1 mr-2 p-1 font-medium border-2 bg-neutral-800 border-red-400 text-red-400">Angular</span>
          <span className="my-1 mr-2 p-1 font-medium border-2 bg-neutral-800 border-green-400 text-green-400">Spring</span>
          <span className="my-1 mr-2 p-1 font-medium border-2 bg-neutral-800 border-neutral-300 text-neutral-300">SQL</span>
        </div>
      </div>
    </div>

    <div className="mt-8">
      <div className="2xl:px-80 sm:px-32 px-0">
        <h6 className="text-xl font-semibold text-neutral-100">What I've done</h6>
        <p>Check them out <span className="link" onClick={onViewProjects}>here →</span></p>
      </div>
    </div>

    <div className="mt-12 py-4">
      <div className="text-neutral-500 text-center">
        <p>Built with React & Tailwind.</p>
      </div>
    </div>
  </section>
  </>
  );
}