import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo";
import "./Header.css";
import Setting from "./Setting";
import { useInView } from "react-intersection-observer";
import { Context } from "../context/Context";
import Loader from "./Loader";
const Header = () => {
  const context = useContext(Context);
  const language = context && context.language;

  const { ref, inView } = useInView({
    threshold: 0.5, // 50% of the element is visible
    triggerOnce: true, // Trigger only once
  });
  const location = useLocation();
  const [animationDone, setAnimationDone] = useState(false);

  useEffect(() => {
    // Check if we are on the home page and animation hasn't run yet

    const headerLinks = document.querySelectorAll(".js-class");
    let linkCounter = 0;

    if (location.pathname !== "/") {
      headerLinks.forEach((e, i) => {
        e.classList.add("services-stable");
      });
    }
    if (animationDone) {
      headerLinks.forEach((e, i) => {
        e.classList.add("services-stable");
      });
      return;
    }
    const headerInterval = setInterval(() => {
      if (linkCounter < headerLinks.length) {
        headerLinks[linkCounter].classList.add("slide-down-animation");
        linkCounter++;
      } else {
        clearInterval(headerInterval);
        setAnimationDone(true); // Mark animation as done
      }
    }, 100);

    return () => clearInterval(headerInterval);
  }, [location, animationDone]); // Dependencies include location and animationDone

  function OpenAsid(e) {
    e.stopPropagation();
    document.querySelector(".aside-overlay").classList.toggle("open");
    if (document.querySelector(".aside-overlay").classList.contains("open"))
      document.querySelector("header").classList.add("active");
    else {
      const main = document.querySelector("main.landing");
      if (main) {
        if (window.scrollY <= main.clientHeight / 2 - 150) {
          document.querySelector("header").classList.remove("active");
        }
      }
    }
  }
  window.addEventListener("click", (e) => {
    const overlay = document.querySelector(".aside-overlay.open");
    overlay && overlay.classList.remove("open");
  });
  window.addEventListener("scroll", () => {
    const main = document.querySelector("main.landing");
    const header = document.querySelector("header");

    if (main) {
      if (window.scrollY >= main.clientHeight / 2 - 150)
        header.classList.add("active");
      else header.classList.remove("active");
    }
  });
  if (!context) {
    <Loader />;
  }
  return (
    <>
      <header className="center">
        <div className="container flex">
          <div className="flex">
            <Logo show={true} />
          </div>
          <div className="links flex-1">
            <NavLink className="js-class " to="/">
              {language.links && language.links.home}
            </NavLink>
            <NavLink className="js-class " to="/services">
              {language.links && language.links.our_services}
            </NavLink>
            <NavLink className="js-class " to="/academy">
              {language.links && language.links.academy}
            </NavLink>
            <NavLink className="js-class " to="/contact">
              {language.links && language.links.contact_us}
            </NavLink>

            <i
              className="fa-solid js-class fa-bars-staggered"
              onClick={OpenAsid}
            ></i>
          </div>
        </div>
      </header>
      <div className="aside-overlay">
        <aside className="header-aside" onClick={(e) => e.stopPropagation()}>
          <div className="flex">
            <Logo />
            <i
              className="fa-solid fa-xmark "
              onClick={() => {
                document
                  .querySelector(".aside-overlay.open")
                  .classList.remove("open");
              }}
            ></i>
          </div>
          <NavLink to="/">
            <i className="fa-solid fa-house"></i>
            {language.links && language.links.home}
          </NavLink>
          <NavLink to="/services">
            <i className="fa-solid fa-code"></i>{" "}
            {language.links && language.links.our_services}
          </NavLink>
          <NavLink to="/academy">
            <i className="fa-solid fa-graduation-cap"></i>{" "}
            {language.links && language.links.academy}
          </NavLink>
          <NavLink to="/projects">
            <i className="fa-solid fa-diagram-project"></i>{" "}
            {language.links && language.links.our_projects}
          </NavLink>
          <NavLink to="/contact">
            <i className="fa-solid fa-phone"></i>{" "}
            {language.links && language.links.contact_us}
          </NavLink>
          <NavLink to={"/join"}>
            <i className="fa-solid fa-circle-plus"></i>{" "}
            {language.links && language.links.join_us}
          </NavLink>
          <NavLink to={"/about"}>
            <i className="fa-solid fa-circle-exclamation"></i>{" "}
            {language.links && language.links.about_us}
          </NavLink>
          <div className="aside-setting">
            <Setting mode={true} title={true} position="navbar" />
          </div>
        </aside>
      </div>
    </>
  );
};

export default Header;
