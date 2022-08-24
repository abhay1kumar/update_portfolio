import React from "react";
import netflixCloneImg from "../../images/netflix.png";
import Project from "../Project/Project";
import bookingApp from "../../images/bookingapp.png";
import crudApplication from "../../images/crudapplication.jpg";
import todolist from "../../images/todolist.png";
import appdev from "../../images/appdev.png";
import hirtech from "../../images/hiretech.webp";
import "./Projects.css";

const Projects = () => {
  //List of projects
  const projects = [
    {
      title: "App Development Blogs",
      demoLink: "https://www.appdevelopmentblogs.com/",
      //   sourceCodeLink: "https://github.com/Nishant-Bhosale/amazon-clone",
      imageSrc: appdev,
    },
    {
      title: "Hire-Tech Developers",
      demoLink: "https://www.hiretechdevelopers.com/",
      //   sourceCodeLink: "https://github.com/Nishant-Bhosale/amazon-clone",
      imageSrc: hirtech,
    },
    {
      title: "Airbnb Clone",
      demoLink: "https://nostalgic-jones-a2b0d2.netlify.app/",
      sourceCodeLink: "https://github.com/Abhay1kumar/HotelBookingWebsite",
      imageSrc: bookingApp,
    },
    {
      title: "CRUD Application",
      demoLink: "https://gallant-jennings-647af6.netlify.app/",
      sourceCodeLink: "https://github.com/Abhay1kumar/FebTasks",
      imageSrc: crudApplication,
    },
    {
      title: "TO-Do List",
      demoLink: "https://practical-leakey-00dd9c.netlify.app/",
      sourceCodeLink: "https://github.com/Abhay1kumar/Reach-To-do-list",
      imageSrc: todolist,
    },
    {
      title: "Movie Trailer App",
      demoLink: "https://abhay-kumar-movieapp.netlify.app/",
      sourceCodeLink: "https://github.com/Abhay1kumar/MovieAPP",
      imageSrc: netflixCloneImg,
    },
  ];

  return (
    <div style={{ background: "rgb(40, 40, 40)" }}>
      <h1 className="work-heading">My Work</h1>
      <div id="work" className="projects-container" projects={projects}>
        {projects.map((project, index) => {
          return <Project project={project} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
