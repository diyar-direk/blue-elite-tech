import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import "./Header.css";
import Setting from "./Setting";

const Header = () => {
  function OpenAsid(e) {
    e.stopPropagation();
    document.querySelector(".aside-overlay").classList.toggle("open");
    document.querySelector("header").classList.add("active");
  }
  window.addEventListener("click", (e) => {
    const overlay = document.querySelector(".aside-overlay.open");
    overlay && overlay.classList.remove("open");
  });
  return (
    <>
      <header className="center">
        <div className="container flex">
          <div className="flex">
            <Logo show={true} />
          </div>
          <div className="links flex-1">
            <NavLink to="/">home</NavLink>
            <NavLink to="/services">our services</NavLink>
            <NavLink to="/about">academy</NavLink>
            <NavLink to="/contact">contact us</NavLink>

            <i className="fa-solid fa-bars-staggered" onClick={OpenAsid}></i>
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
          <NavLink to="/about">
            <i className="fa-solid fa-graduation-cap"></i>academy
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
            <Setting />
          </div>
        </aside>
      </div>
    </>
  );
};

export default Header;
