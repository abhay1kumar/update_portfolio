import React from "react";
import "./Project.css";

const Project = (props) => {
  const { title, demoLink, sourceCodeLink, imageSrc } = props.project;

  return (
    <div className="project-container">
      <div className="image-wrapper">
        <img
          src={imageSrc}
          alt="project pictures"
          loading="lazy"
          height="100%"
          width="100%"
        />
      </div>
      <div className="project-description">
        <h2>{title}</h2>
        {demoLink ? (
          <a
            target="_blank"
            rel="noreferrer"
            href={demoLink}
            className="button-link"
          >
            Demo
          </a>
        ) : null}
        {sourceCodeLink ? (
          <a
            target="_blank"
            rel="noreferrer"
            href={sourceCodeLink}
            className="button-link"
          >
            GitHub
          </a>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Project;
