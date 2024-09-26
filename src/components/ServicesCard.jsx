import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./services.css";
import { useInView } from "react-intersection-observer";
import { Context } from "../context/Context";

const ServicesCard = ({ children, className }) => {
  const { ref, inView } = useInView({
    threshold: 0.1, // 50% of the element is visible
    triggerOnce: true, // Trigger only once
  });
  const context = useContext(Context);
  const language = context.language && context.language;
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
ServicesCard.Bottom.StartedLink = ({ className, to }) => {

  return (
    <Link to={to} className={className}>
     
      {/* {language.services && language.services.button_getStarted} */}
    </Link>
  );
};

ServicesCard.Bottom.Details = () => {
  return <Link to={"/services"}>
     {/* {language.details && language.services.details} */}
      </Link>;
};

export default ServicesCard;
