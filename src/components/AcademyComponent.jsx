import React from "react";
import { Link } from "react-router-dom";
import Svg from "../pages/home/Svg";
import { useInView } from "react-intersection-observer";

const AcademyComponent = () => {
  const { ref, inView } = useInView({
    threshold: 0.5, // 50% of the element is visible
    triggerOnce: true, // Trigger only once
  });
  const animateAcademy = () => {
    const academyDivs = document.querySelectorAll(
      ".home-academy .academy-services > div"
    );
    academyDivs.forEach((e, i) => {
      setTimeout(() => {
        e.classList.add("active-academy");
        console.log(e);
      }, i * 100); // Adjust the delay (e.g., 1000ms = 1 second) based on the index
    });
  };

  return (
    <main className="center section-color">
      <div className="container home-academy wrap flex">
        <div className="title">
          <h1 className="title section-color" data-fill="academy">
            Academy
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
              <h1>What We Offer ?</h1>
              <p>
                Covering the basics of various programming languages and
                tools.Real-world projects & practical exercises.
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
              <h1>Our Mission</h1>
              <p>
                Our mission is to make coding education accessible and engaging,
                providing students with the knowledge and skills they need to
                thrive in the tech industry
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
              <h1>Our Team</h1>
              <p>
                Our instructors are industry professionals, including developers
                from Blue Elite Tech, who bring their real-world experience and
                expertise into the classroom. This ensures that our students
                receive top-quality education.
              </p>
            </article>
          </div>
          <Link to="/academy" className="btn d-block"> see more about our academy </Link>
        </div>
        <div className={` ${inView && "svg-active"}  flex svg `}>
          <div className=" animation-image">
            <Svg className="svg-image" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default AcademyComponent;
