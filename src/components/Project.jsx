import React, { useContext } from "react";
import { Context } from "../context/Context";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const Project = (props) => {
  const context = useContext(Context);
  const language = context.language && context.language;
  const selectedLang = context.selectedLang && context.selectedLang;
  const { ref, inView } = useInView({
    threshold: 0.4, // 50% of the element is visible
    triggerOnce: true, // Trigger only once
  });

  return (
    <article ref={ref} className={`${inView && "project-animation"}`}>
      <div className="overlay relative flex">
        <img
          loading="lazy"
          src={`http://localhost:8000/img/${props.e.photo}`}
          alt=""
        />

        <div className="center">
          {props.e.projectLink && (
            <Link to={props.e.projectLink}>
              {language.projects && language.projects.see_live_preview}{" "}
              <i className="fa-solid fa-eye"></i>
            </Link>
          )}
        </div>
      </div>
      <div className="info">
        <h1>{props.e.headline[selectedLang]}</h1>
        <p>{props.e.summary[selectedLang]}</p>
        {props.e.projectLink && (
          <Link to={props.e.projectLink}>
            {language.projects && language.projects.btn_livePreview}{" "}
            <i className="fa-solid fa-eye"></i>
          </Link>
        )}
      </div>
    </article>
  );
};

export default Project;
