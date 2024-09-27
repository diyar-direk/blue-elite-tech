import React, { useEffect, useState } from "react";
import ProjectsComponent from "../../components/ProjectsComponent";
import "./projects.css";
import { Link } from "react-router-dom";
import { topStarting } from "../../components/Header";
const Project = () => {
  const [allData, setAllData] = useState([]);

  const divsCount = 6;

  const [pagnation, setPagnition] = useState({
    from: 0,
    to: divsCount,
  });

  const data = allData.slice(pagnation.from, pagnation.to);

  useEffect(() => {
    fetch("test.json")
      .then((res) => res.json())
      .then((data) => setAllData(data.data));
  }, []);

  function spanClick(e) {
    const from = (e.target.dataset.count - 1) * divsCount;
    const to = (e.target.dataset.count - 1) * divsCount + divsCount;
    setPagnition({ from, to });
    const allSpan = document.querySelectorAll(
      ".projects-page .pagination span"
    );
    allSpan.forEach((e) => e.classList.remove("active"));
    e.target.classList.add("active");
  }

  function createPagnition() {
    const AlldivsCount = allData.length;
    const pageCount = Math.ceil(AlldivsCount / divsCount);
    const span = [];
    for (let index = 0; index < pageCount; index++) {
      span.push(
        <span
          className={`${index === 0 ? "active" : ""}`}
          key={index}
          onClick={spanClick}
          data-count={index + 1}
        >
          {index + 1}
        </span>
      );
    }
    return span;
  }

  return (
    <main className=" projects-page center sub-page">
      <div className="container">
        <div className="title">
          <h1 className="title body-color" data-fill="our projects">
            Our Projects
          </h1>
        </div>
        <div className="grid-2">
          <div>
            <h3>
              Our company offers a wide range of services, including desktop
              applications, mobile applications, website development, server
              management, LAN setup, and IT qualification. Below is a selection
              of projects that demonstrate our expertise in these fields. You
              can also see our services{" "}
              <Link to={"/services"} onClick={topStarting}>
                from here...
              </Link>
            </h3>
          </div>
          <div className="image center">
            <img
              loading="lazy"
              src={require("./undraw_Growth_curve_re_t5s7-removebg-preview.png")}
              alt=""
            />
          </div>
        </div>
        <ProjectsComponent />
        <div className="pagination">{createPagnition()}</div>
      </div>
    </main>
  );
};

/*
1 2 3
4 5 6
7 8 9 
*/

export default Project;
