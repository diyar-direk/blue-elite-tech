import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../../../components/Logo";
import "./dashboard-navbar.css";
import Setting from "../../../components/Setting";
import Cookies from "universal-cookie";
import { useContext } from "react";
import { Context } from "../../../context/Context";
const DashboardNavbar = () => {
  //context for language

  function handelCilck(e) {
    e.stopPropagation();
    e.target.classList.toggle("close");
    const aside = document.querySelector("aside.dashboard-aside");
    const container = document.querySelector("div.main .dashboard-container");
    if (e.target.classList.contains("close")) {
      aside && aside.classList.add("active");

      container && container.classList.add("active");
    } else {
      aside && aside.classList.remove("active");

      container && container.classList.remove("active");
    }
  }

  const cookie = new Cookies();
  const context = useContext(Context);
  const language = context.language && context.language;

  const isAdmin = context.userDetails.isAdmin;
  const nav = useNavigate();
  function logOut() {
    cookie.set("token", "");
    context.setUserDetails(false);
    window.location.reload();
    nav("/");
  }

  return (
    <>
      <div className="navbar center">
        <div className="between container">
          <div className="logo">
            <Logo />
          </div>
          <div className="flex">
            <Link to={"/"} className="btn2">
            {language.dashboard && language.dashboard.homeLink}
            </Link>
            <div onClick={logOut} className="btn">
            {language.dashboard && language.dashboard.logOutLink} <i className="fa-solid fa-arrow-right-from-bracket"></i>
            </div>
          </div>
        </div>
      </div>
      <aside className="dashboard-aside">
        <h3>{language.dashboard && language.dashboard.dashboard} </h3>
        <h4 onClick={handelCilck}></h4>

        {isAdmin && (
          <>
            <NavLink to={"activities"}>
              <i className="fa-solid fa-clock-rotate-left"></i>
              <span>{language.dashboard && language.dashboard.Activities}</span>
            </NavLink>

            <NavLink to={"users"}>
              <i className="fa-solid fa-users"></i>
              <span>{language.dashboard && language.dashboard.Users}</span>
            </NavLink>

            <NavLink to={"add_user"}>
              <i className="fa-solid fa-user-plus"></i>
              <span>{language.dashboard && language.dashboard.Add_user}</span>
            </NavLink>
          </>
        )}

        <NavLink to={"projects"}>
          <i className="fa-solid fa-diagram-project"></i>
          <span> {language.dashboard && language.dashboard.projects}</span>
        </NavLink>

        <NavLink to={"add_project"}>
          <i className="fa-solid fa-circle-plus"></i>
          <span>{language.dashboard && language.dashboard.add_projects}</span>
        </NavLink>

        <NavLink to={"courses"}>
          <i className="fa-solid fa-graduation-cap"></i>
          <span>{language.dashboard && language.dashboard.courses}</span>
        </NavLink>

        <NavLink to={"add_cours"}>
          <i className="fa-solid fa-plus"></i>
          <span>{language.dashboard && language.dashboard.add_courses}</span>
        </NavLink>
        <Setting title={true} position="dashboard" mode={true} />
      </aside>
    </>
  );
};

export default DashboardNavbar;
