import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { topStarting } from "./Header";
import { Context } from "../context/Context";

const AcademyComponent = (props) => {
  const { ref, inView } = useInView({
    threshold: 0.5, // 50% of the element is visible
    triggerOnce: true, // Trigger only once
  });
  const context = useContext(Context);
  const language = context.language && context.language;

  const animateAcademy = () => {
    const academyDivs = document.querySelectorAll(
      ".home-academy .academy-services > div"
    );
    academyDivs.forEach((e, i) => {
      setTimeout(() => {
        e.classList.add("active-academy");
      }, i * 100); // Adjust the delay (e.g., 1000ms = 1 second) based on the index
    });
  };

  return (
    <main className={` ${props.classStyle} center section-color`}>
      <div className="container home-academy wrap flex">
        <div className="title">
          <h1
            className={` ${
              props.classStyle ? props.classStyle : "section-color"
            } title `}
            data-fill={language.academy && language.academy.academy_home_header}
          >
            {language.academy && language.academy.academy_home_header}
          </h1>
        </div>
        <div ref={ref} className="academy-services">
          <div className={` flex`}>
            {inView && animateAcademy()}
            <img
              loading="lazy"
              src={require("../pages/home/icons8-services-64 (1).png")}
              alt=""
            />
            <article>
              <h1>
                {language.academy &&
                  language.academy.academy_home_what_we_offer}
              </h1>
              <p>
                {language.academy &&
                  language.academy.academy_home_what_we_offer_p}
              </p>
            </article>
          </div>
          <div ref={ref} className={` flex`}>
            <img
              loading="lazy"
              src={require("../pages/home/icons8-projects-58.png")}
              alt=""
            />
            <article>
              <h1>
                {" "}
                {language.academy && language.academy.academy_home_our_mission}
              </h1>
              <p>
                {language.academy &&
                  language.academy.academy_home_our_mission_p}
              </p>
            </article>
          </div>
          <div ref={ref} className={`flex`}>
            <img
              loading="lazy"
              src={require("../pages/home/icons8-group-50.png")}
              alt=""
            />
            <article>
              <h1>
                {language.academy && language.academy.academy_home_our_Team}
              </h1>
              <p>
                {language.academy && language.academy.academy_home_our_team_p}
              </p>
            </article>
          </div>
          <Link onClick={topStarting} to="/academy" className="btn d-block">
            {language.academy && language.academy.button_seeMore}
          </Link>
        </div>
        <div className={` ${inView && "svg-active"}  flex svg `}>
          <div className=" animation-image">
            <img src={require("../pages/services/about.png")} alt="" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default AcademyComponent;
