import React, { useContext, useEffect, useState } from "react";
import "./academy.css";
import { Link } from "react-router-dom";
import ContactComponenet from "../../components/ContactComponenet";
import MapComponent from "../../components/MapComponent";
import { Context } from "../../context/Context";
import { useInView } from "react-intersection-observer";
import axios from "axios";

const Academy = () => {
  const context = useContext(Context);
  const language = context.language && context.language;
  const selectedLang = context.selectedLang && context.selectedLang;
  const [courses, setCourses] = useState([]);
  const { ref, inView } = useInView({
    threshold: 0.5, // 50% of the element is visible
    triggerOnce: true, // Trigger only once
  });
  const animateAcademy = () => {
    const academyDivs = document.querySelectorAll(
      ".academy-page .mission > div.before-animation "
    );
    academyDivs.forEach((e, i) => {
      setTimeout(() => {
        e.classList.add("after-animation");
      }, i * 200); // Adjust the delay (e.g., 1000ms = 1 second) based on the index
    });
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/courses")
      .then((res) => setCourses(res.data.courses));
  }, []);
  return (
    <>
      <main className="center sub-page academy-page body-color">
        <div className="container">
          <div className="title">
            <h1
              className="title body-color"
              data-fill={
                language.academy && language.academy.academy_section_header
              }
            >
              {language.academy && language.academy.academy_section_header}
            </h1>
          </div>
          <div className="main">
            <div className="flex">
              <div
                className={`flex-1 academy-text ${
                  inView && `academy-text-after `
                }  `}
              >
                <h1 className="title">SÎMURX</h1>
                <h2>A Beacon of Computer Science and Education</h2>
                <h3 style={{ color: "#bebe11" }}>Navenda Zanistên Komputerê</h3>
                <h4>
                  {language.academy && language.academy.academy_section_h4}
                </h4>
              </div>
              <div
                className={`flex-1 center academy-logo ${
                  inView && `academy-logo-after `
                }`}
              >
                <img src={require("./academy1.png")} alt="" loading="lazy" />
              </div>
            </div>
          </div>

          <div ref={ref} className="mission grid-2">
            <div className={`background before-animation `}>
              {inView && animateAcademy()}
              <h2>
                {language.academy &&
                  language.academy.academy_section_our_mission}
              </h2>
              <p>
                {language.academy &&
                  language.academy.academy_section_our_mission_p}
              </p>
            </div>

            <div className=" before-animation">
              <h2>
                {language.academy &&
                  language.academy.academy_section_what_we_offer}
              </h2>
              <p>
                {language.academy &&
                  language.academy.academy_section_what_we_offer_p1}
              </p>
            </div>

            <div className=" before-animation">
              <h2>
                {language.academy && language.academy.academy_section_our_team}
              </h2>
              <p>
                {language.academy &&
                  language.academy.academy_section_our_team_p}
              </p>
            </div>

            <div className="background before-animation">
              <h2>
                {language.academy &&
                  language.academy.academy_section_why_simurx}
              </h2>
              <p className="count">
                {language.academy &&
                  language.academy.academy_section_why_simurx_p.first}
              </p>
              <p className="count">
                {language.academy &&
                  language.academy.academy_section_why_simurx_p.second}
              </p>
              <p className="count">
                {language.academy &&
                  language.academy.academy_section_why_simurx_p.third}
              </p>
            </div>

            <div className="background before-animation">
              <h2>
                {" "}
                {language.academy &&
                  language.academy.academy_section_our_partnership}
              </h2>
              <p>
                {language.academy &&
                  language.academy.academy_section_our_partnership_p}
              </p>
            </div>
          </div>
        </div>
      </main>
      {courses && courses.length > 1 && (
        <main className="section-color center">
          <div className="container">
            <div className="title">
              <h1
                className="title section-color"
                data-fill={language.academy && language.academy.courses_header}
              >
                {language.academy && language.academy.courses_header}
              </h1>
            </div>

            {courses &&
              courses.map((e, i) => {
                return (
                  <article className="academy-card">
                    <div>
                      <img
                        src={`http://localhost:8000/img/${e.photo}`}
                        alt=""
                      />
                    </div>
                    <div className="info">
                      <h1>{e.headline[selectedLang]}</h1>
                      <h3>{e.summary[selectedLang]}</h3>
                      <Link to={""}>
                        {language.academy && language.academy.button_getStarted}
                      </Link>
                    </div>
                  </article>
                );
              })}
          </div>
        </main>
      )}{" "}
      <main
        className={`center ${
          courses && courses.length > 1 ? "body-color" : "section-color"
        }`}
      >
        <div className="container">
          <div className="title">
            <h1
              className={`title ${
                courses && courses.length > 1 ? "body-color" : "section-color"
              }`}
              data-fill={language.academy && language.academy.contact_header}
            >
              {language.academy && language.academy.contact_header}
            </h1>
          </div>
          <div className="academy-contact">
            <h3>{language.academy && language.academy.contact_discription}</h3>
            <ContactComponenet>
              <ContactComponenet.Info
                title={language.academy && language.academy.contact_academy_h1}
                showBtn={true}
                location="simurx"
                language={language && language}
              >
                <MapComponent location="simurx" />
              </ContactComponenet.Info>
            </ContactComponenet>
          </div>
        </div>
      </main>
    </>
  );
};

export default Academy;
