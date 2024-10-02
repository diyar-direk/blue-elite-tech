import React, { useContext, useEffect, useState } from "react";
import ProjectsComponent from "../../components/ProjectsComponent";
import "./projects.css";
import { Link } from "react-router-dom";
import { topStarting } from "../../components/Header";
import axios from "axios";
import { Context } from "../../context/Context";
const Project = () => {
  const [allData, setAllData] = useState([]);
  const [data, setData] = useState([]);

  const divsCount = 6;
  const context = useContext(Context);
  const language = context && context.language;

  const [pagnation, setPagnition] = useState(1);

  useEffect(() => {
    axios
      .get(
        `http://localhost:8000/api/projects?limit=${divsCount}&page=${pagnation}`
      )
      .then((data) => {
        setAllData(data.data.totalProjects);
        setData(data.data.projects);
      });
  }, [pagnation]);

  function spanClick(e) {
    setPagnition(+e.target.dataset.count);
    const allSpan = document.querySelectorAll(
      ".projects-page .pagination span"
    );
    allSpan.forEach((e) => e.classList.remove("active"));
    e.target.classList.add("active");
  }

  function createPagnition() {
    const AlldivsCount = allData;
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
          <h1
            className="title body-color"
            data-fill={language.project_page && language.project_page.title}
          >
            {language.project_page && language.project_page.title}
          </h1>
        </div>
        <div className="grid-2">
          <div>
            <h3>
              {language.project_page && language.project_page.paragraph}{" "}
              <Link to={"/services"} onClick={topStarting}>
                {language.project_page && language.project_page.link}
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
        <ProjectsComponent data={data} />
        <div className="pagination">{createPagnition()}</div>
      </div>
    </main>
  );
};

export default Project;
