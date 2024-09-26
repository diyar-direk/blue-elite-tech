import React from "react";
import { Link } from "react-router-dom";
import "./services.css";
import { useInView } from "react-intersection-observer";

const ServicesCard = ({ children, className }) => {
  const { ref, inView } = useInView({
    threshold: 0.1, // 50% of the element is visible
    triggerOnce: true, // Trigger only once
  });

  return (
    <article
      ref={ref}
      className={`${inView && "services-animation"} ${
        className ? className : ""
      }`}
    >
      {children}
    </article>
  );
};

ServicesCard.Body = ({ children }) => {
  return <div>{children}</div>;
};

ServicesCard.Body.Title = ({ children }) => {
  return <h1>{children}</h1>;
};
ServicesCard.Body.Icon = ({ children }) => {
  return <div> {children}</div>;
};
ServicesCard.Body.Paragraph = ({ children }) => {
  return <p> {children} </p>;
};

ServicesCard.Bottom = ({ children }) => {
  return (
    <article>
      <div className="between"> {children} </div>
    </article>
  );
};
ServicesCard.Bottom.StartedLink = ({ className, to, language }) => {
  return (
    <Link to={to} className={className}>
      {/* {console.log(language)} */}
      {/* {language.services && language.services.button_getStarted} */}
      Get Started
    </Link>
  );
};

ServicesCard.Bottom.Details = ({ language }) => {
  return <Link to={"/services"}>details</Link>;
};

export default ServicesCard;
