import { Link, NavLink } from "react-router-dom";
import Logo from "../../../components/Logo";
import "./dashboard-navbar.css";
import Setting from "../../../components/Setting";
const DashboardNavbar = () => {
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

  return (
    <>
      <div className="navbar center">
        <div className="between container">
          <div className="logo">
            <Logo />
          </div>
          <div className="flex">
            <Link to={"/"} className="btn2">
              home
            </Link>
            <div className="btn">
              log out <i className="fa-solid fa-arrow-right-from-bracket"></i>
            </div>
          </div>
        </div>
      </div>
      <aside className="dashboard-aside">
        <h3>title</h3>
        <h4 onClick={handelCilck}></h4>

        <NavLink to={"activities"}>
          <i className="fa-solid fa-clock-rotate-left"></i>
          <span>activities</span>
        </NavLink>

        <NavLink to={"add_project"}>
          <i className="fa-solid fa-circle-plus"></i>
          <span>add project</span>
        </NavLink>

        <NavLink to={"courses"}>
          <i className="fa-solid fa-graduation-cap"></i>
          <span>courses</span>
        </NavLink>

        <NavLink to={"add_cours"}>
          <i className="fa-solid fa-plus"></i>
          <span>add cours</span>
        </NavLink>
        <Setting title={true} position="dashboard" mode={true} />
      </aside>
    </>
  );
};

export default DashboardNavbar;
