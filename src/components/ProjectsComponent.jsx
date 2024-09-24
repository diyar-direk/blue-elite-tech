import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import axios from "axios";

const ProjectsComponent = () => {
  const { ref, inView } = useInView({
    threshold: 0.4, // 50% of the element is visible
    triggerOnce: true, // Trigger only once
  });
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/projects")
      .then((res) => setProjects(res.data.projects));
  }, []);

  return (
    <div ref={ref} className="home-project grid-3">
      {projects.map((e, i) => {
        return (
          <article className={`${inView && "project-animation"}`}>
            <div className="overlay relative flex">
              <img loading="lazy" src={e.photo} alt="" />
              <div className="center">
                <Link>
                  see live preview <i className="fa-solid fa-eye"></i>
                </Link>
              </div>
            </div>
            <div className="info">
              <h1>{e.headline.en}</h1>
              <p>{e.summary.en}</p>
              <Link>
                Live preview <i className="fa-solid fa-eye"></i>
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default ProjectsComponent;
