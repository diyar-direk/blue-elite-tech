import React, { useContext, useEffect, useState } from "react";
import "./footer.css";
import { NavLink } from "react-router-dom";
import Setting from "./Setting";
import { topStarting } from "./Header";
import { Context } from "../context/Context";
import axios from "axios";
const Footer = () => {
  const context = useContext(Context);
  const language = context.language && context.language;
  const userDetails = context.userDetails;
  const [projectsLength, setProjectsLength] = useState(0);
  useEffect(() => {
    axios.get("http://localhost:8000/api/projects?limit=1").then((res) => {
      setProjectsLength(res.data.totalProjects);
    });
  }, []);
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
              {language.links && language.links.home}
            </NavLink>
            <NavLink onClick={topStarting} to="/services">
              {language.links && language.links.our_services}
            </NavLink>
            <NavLink onClick={topStarting} to="/academy">
              {language.links && language.links.academy}
            </NavLink>
            {projectsLength > 1 && (
              <NavLink onClick={topStarting} to="/projects">
                {language.links && language.links.our_projects}
              </NavLink>
            )}
          </div>
          <div>
            <NavLink onClick={topStarting} to="/contact">
              {language.links && language.links.contact_us}
            </NavLink>
            <NavLink onClick={topStarting} to={"/join"}>
              {language.links && language.links.join_us}
            </NavLink>
            <NavLink onClick={topStarting} to={"/about"}>
              {language.links && language.links.about_us}
            </NavLink>
            {userDetails.token && (
              <NavLink onClick={topStarting} to={"/dashboard"}>
                {language.links && language.links.dashboard}
              </NavLink>
            )}
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
