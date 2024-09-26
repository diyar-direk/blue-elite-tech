import React from "react";
import ProjectsComponent from "../../components/ProjectsComponent";

const Project = () => {
  return (
    <main className="center sub-page">
      <div className="container">
        <div className="title">
          <h1 className="title body-color" data-fill="our projects">
            Our Projects
          </h1>
        </div>
        <ProjectsComponent />
      </div>
    </main>
  );
};

export default Project;
