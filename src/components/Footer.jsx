import React, { useContext } from "react";
import "./footer.css";
import { NavLink } from "react-router-dom";
import Setting from "./Setting";
import { topStarting } from "./Header";
import { Context } from "../context/Context";
const Footer = () => {
  const context = useContext(Context);
  const language = context.language && context.language;
  return (
    <footer className="footer center">
      <div className="container">
        <div className="grid-3">
          <div>
            <h1>blue elite tech</h1>
            <div className="flex icon">
              <a
                className="center twitter"
                target="_blank"
                href="https://x.com/Blue_Elite_tech"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a
                className="center whatsapp"
                target="_blank"
                href="https://wa.me/message/4BZQ53OETHOLG1"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a
                className="center facebook"
                target="_blank"
                href="https://www.facebook.com/BlueEliteTech.home"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a
                className="center linkedin"
                target="_blank"
                href="https://www.linkedin.com/company/blue-elite-tech"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
            <p>{language.footer && language.footer.footer_p}</p>
            <Setting position="footer" />
          </div>
          <div>
            <NavLink onClick={topStarting} to="/">
              home
            </NavLink>
            <NavLink onClick={topStarting} to="/services">
              our services
            </NavLink>
            <NavLink onClick={topStarting} to="/academy">
              academy
            </NavLink>
            <NavLink onClick={topStarting} to="/projects">
              our projects
            </NavLink>
          </div>
          <div>
            <NavLink onClick={topStarting} to="/contact">
              contact us
            </NavLink>
            <NavLink onClick={topStarting} to={"/join"}>
              join us
            </NavLink>
            <NavLink onClick={topStarting} to={"/about"}>
              about us
            </NavLink>
          </div>
        </div>
        <div className="copyright center">
          {language.footer && language.footer.footer_rights}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
