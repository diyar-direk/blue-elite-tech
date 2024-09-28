import React, { useContext } from "react";
import "./academy.css";
import { Link } from "react-router-dom";
import ContactComponenet from "../../components/ContactComponenet";
import MapComponent from "../../components/MapComponent";
import { Context } from "../../context/Context";

const Academy = () => {
  const context = useContext(Context);
  const language = context.language && context.language;
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
              <div className="flex-1">
                <h1 className="title">SÎMURX</h1>
                <h2>A Beacon of Computer Science and Education</h2>
                <h3 style={{ color: "#bebe11" }}>Navenda Zanistên Komputerê</h3>
                <h4>
                  {language.academy && language.academy.academy_section_h4}
                </h4>
              </div>
              <div className="flex-1 center">
                <img src={require("./academy1.png")} alt="" loading="lazy" />
              </div>
            </div>
          </div>

          {/* <div className="slider">
            <div>
              <img
                src={require("./academy1.8e16765036fe248a0321.jpg")}
                alt=""
              />
            </div>
            <div>
              <img
                src={require("./academy2.1a677465b56e39b4500e.jpg")}
                alt=""
              />
            </div>
            <div>
              <img
                src={require("./academy3.07ee47e15b16e884da6a (1).jpg")}
                alt=""
              />
            </div>
            <div>
              <img
                src={require("./academy4.4bccc090d270125d6d70.jpg")}
                alt=""
              />
            </div>
          </div> */}

          <div className="mission grid-2">
            <div className="background">
              <h2>
                {language.academy &&
                  language.academy.academy_section_our_mission}
              </h2>
              <p>
                {language.academy &&
                  language.academy.academy_section_our_mission_p}
              </p>
            </div>

            <div>
              <h2>
                {language.academy &&
                  language.academy.academy_section_what_we_offer}
              </h2>
              <p>
                {language.academy &&
                  language.academy.academy_section_what_we_offer_p1}
              </p>
            </div>

            <div>
              <h2>
                {language.academy && language.academy.academy_section_our_team}
              </h2>
              <p>
                {language.academy &&
                  language.academy.academy_section_our_team_p}
              </p>
            </div>

            <div className="background">
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

            <div className="background">
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
          <article className="academy-card">
            <div>
              <img src={require("./sb2.png")} alt="" />
            </div>
            <div className="info">
              <h1>fist cours</h1>
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae non soluta reiciendis esse consectetur provident
                voluptatem natus nulla cum aspernatur quasi temporibus, possimus
                reprehenderit sint quos fugiat modi. Minus, optio.
              </h3>
              <Link to={""}>
                {language.academy && language.academy.button_getStarted}
              </Link>
            </div>
          </article>
          <article className="academy-card">
            <div>
              <img src={require("./sb9.png")} alt="" />
            </div>
            <div className="info">
              <h1>second cours</h1>
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae non soluta reiciendis esse consectetur provident
                voluptatem natus nulla cum aspernatur quasi temporibus, possimus
                reprehenderit sint quos fugiat modi. Minus, optio.
              </h3>
              <Link to={""}>
                {language.academy && language.academy.button_getStarted}
              </Link>
            </div>
          </article>
          <article className="academy-card">
            <div>
              <img src={require("./course-05.jpg")} alt="" />
            </div>
            <div className="info">
              <h1>third cours</h1>
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae non soluta reiciendis esse consectetur provident
                voluptatem natus nulla cum aspernatur quasi temporibus, possimus
                reprehenderit sint quos fugiat modi. Minus, optio.
              </h3>
              <Link to={""}>
                {language.academy && language.academy.button_getStarted}
              </Link>
            </div>
          </article>
        </div>
      </main>

      <main className="center body-color">
        <div className="container">
          <div className="title">
            <h1
              className="title body-color"
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
