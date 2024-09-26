import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const ProjectsComponent = (props) => {
  const { ref, inView } = useInView({
    threshold: 0.4, // 50% of the element is visible
    triggerOnce: true, // Trigger only once
  });
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
