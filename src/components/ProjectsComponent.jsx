import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { Context } from "../context/Context";
import { useContext } from "react";

const ProjectsComponent = (props) => {
  const { ref, inView } = useInView({
    threshold: 0.4, // 50% of the element is visible
    triggerOnce: true, // Trigger only once
  });
  //context for language
  const context = useContext(Context);
  const language = context.language && context.language;
  const selectedLang = context.selectedLang && context.selectedLang;
  const data = props && props.data;

  return (
    <div ref={ref} className="home-project grid-3">
      {data &&
        data.map((e, i) => {
          return (
            <article className={`${inView && "project-animation"}`}>
              <div className="overlay relative flex">
                <img loading="lazy" src={e.photo} alt="" />
                <div className="center">
                  <Link>
                   {language.projects&& language.projects.see_live_preview } <i className="fa-solid fa-eye"></i>
                  </Link>
                </div>
              </div>
              <div className="info">
                <h1>{e.headline[selectedLang]}</h1>
                <p>{e.summary[selectedLang]}</p>
                <Link>
                {language.projects&& language.projects.btn_livePreview } <i className="fa-solid fa-eye"></i>
                </Link>
              </div>
            </article>
          );
        })}
    </div>
  );
};

export default ProjectsComponent;
