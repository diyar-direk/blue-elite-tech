import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { Context } from "../context/Context";
import { useContext } from "react";
import Project from "./Project.jsx";
const ProjectsComponent = (props) => {
  const { ref, inView } = useInView({
    threshold: 0.4, // 50% of the element is visible
    triggerOnce: true, // Trigger only once
  });
  //context for language

  const data = props && props.data;

  return (
    <div className="home-project grid-3">
      {data &&
        data.map((e, i) => {
          return (
            <>
              <Project e={e} />
            </>
          );
        })}
    </div>
  );
};

export default ProjectsComponent;
