import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import "./Header.css";
import Setting from "./Setting";
import { useInView } from "react-intersection-observer";
const Header = () => {
  const { ref, inView } = useInView({
    threshold: 0.5, // 50% of the element is visible
    triggerOnce: true, // Trigger only once
  });

  useEffect(() => {
    let headerLink = document.querySelectorAll(".js-class");
    let linkCounter = 0;
    let headerInterval = setInterval((e) => {
      console.log(1);
      console.log(headerLink);

      if (linkCounter < headerLink.length) {
        headerLink[linkCounter++].classList.add("slide-down-animation");
      } else if (linkCounter >= headerLink.length) {
        clearInterval(headerInterval);
      }
    }, 100);
  }, []);
  let headerLink = document.querySelectorAll(".js-class");
  let linkCounter = 0;
  let headerInterval = setInterval((e) => {
    console.log(1);
    console.log(headerLink);

    if (linkCounter < headerLink.length) {
      headerLink[linkCounter++].classList.add("slide-down-animation");
    } else if (linkCounter >= headerLink.length) {
      clearInterval(headerInterval);
    }
  }, 100);

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
  return (
    <>
      <header className="center">
        <div className="container flex">
          <div className="flex">
            <Logo show={true} />
          </div>
          <div className="links flex-1">
            <NavLink className="js-class " to="/">
              home
            </NavLink>
            <NavLink className="js-class " to="/services">
              our services
            </NavLink>
            <NavLink className="js-class " to="/academy">
              academy
            </NavLink>
            <NavLink className="js-class " to="/contact">
              contact us
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
            home
          </NavLink>
          <NavLink to="/services">
            <i className="fa-solid fa-code"></i>our services
          </NavLink>
          <NavLink to="/academy">
            <i className="fa-solid fa-graduation-cap"></i>academy
          </NavLink>
          <NavLink to="/academy">
            <i className="fa-solid fa-diagram-project"></i>our project
          </NavLink>
          <NavLink to="/contact">
            <i className="fa-solid fa-phone"></i>contact us
          </NavLink>
          <NavLink to={"/join"}>
            <i className="fa-solid fa-circle-plus"></i> join us
          </NavLink>
          <NavLink to={"/about"}>
            <i className="fa-solid fa-circle-exclamation"></i> about us
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
