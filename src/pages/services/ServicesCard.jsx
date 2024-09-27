import React from "react";
import { Link } from "react-router-dom";
import "./services.css";
import { useInView } from "react-intersection-observer";
import { topStarting } from "../../components/Header";

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
ServicesCard.Bottom.StartedLink = ({ className, title, state }) => {
  return (
    <Link
      onClick={topStarting}
      to={"/contact"}
      className={className}
      state={{ services: state }}
    >
      {title}
    </Link>
  );
};

ServicesCard.Bottom.Details = ({ title }) => {
  return (
    <Link onClick={topStarting} to={"/services"}>
      {title}
    </Link>
  );
};

export default ServicesCard;
