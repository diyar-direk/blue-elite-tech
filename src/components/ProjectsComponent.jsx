import React from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const ProjectsComponent = () => {
  const { ref, inView } = useInView({
    threshold: 0.4, // 50% of the element is visible
    triggerOnce: true, // Trigger only once
  });
  return (
    <article ref={ref} className={`${inView && "project-animation"}`}>
      <div className="overlay relative flex">
        <img
          loading="lazy"
          src={require("../pages/home/project1.png")}
          alt=""
        />
        <div className="center">
          <Link>
            see live preview <i className="fa-solid fa-eye"></i>
          </Link>
        </div>
      </div>
      <div className="info">
        <h1>dashboard</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          consectetur iste voluptatum, vitae mollitia incidunt quasi quo quod
          explicabo sed quaerat quae cum temporibus saepe! Eveniet odit mollitia
          eaque repellat!
        </p>
        <Link>
          Live preview <i className="fa-solid fa-eye"></i>
        </Link>
      </div>
    </article>
  );
};

export default ProjectsComponent;
