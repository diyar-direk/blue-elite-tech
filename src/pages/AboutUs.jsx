import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./about.css";
import { topStarting } from "../components/Header";
import { Context } from "../context/Context";
const AboutUs = () => {
  const context = useContext(Context);
  const language = context.language && context.language;
  return (
    <>
      <main className="responsive-container-block sub-page bigContainer section-color ">
        <div className="responsive-container-block container">
          <div className="title">
            <h1
              className="title body-color"
              data-fill={language.about && language.about.about_header}
            >
              {language.about && language.about.about_header}
            </h1>
          </div>
          <div className="responsive-container-block textSide">
            <div className="about-info flex">
              <div className="info-first">
                <p className="text-blk heading">
                  {language.about && language.about.about_top_h1}
                </p>
                <p className="text-blk subHeading">
                  {language.about && language.about.about_top_p}
                </p>
              </div>
              <img loading="lazy" src={require("./home/icon18.png")} alt="" />
            </div>
          </div>
        </div>
      </main>

      <main className="about-wrapper body-color">
        <div className="spikes"></div>
        <div className="about-flex grid-2 container ">
          <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12 background1">
            <div className="cardImgContainer">
              <i></i>
            </div>
            <div className="cardText">
              <h2 className="text-blk cardHeading">
                {language.about && language.about.about_our_mission}
              </h2>
              <p className="text-blk cardSubHeading">
                {language.about && language.about.about_our_mission_p}
              </p>
            </div>
          </div>
          <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12 background2">
            <div className="cardImgContainer">
              <i></i>
            </div>
            <div className="cardText">
              <h2 className="text-blk cardHeading">
                {language.about && language.about.about_our_team}
              </h2>
              <p className="text-blk cardSubHeading">
                {language.about && language.about.about_our_team_p}
              </p>
            </div>
          </div>
          <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12 background2 ">
            <div className="cardImgContainer">
              <i></i>
            </div>
            <div className="cardText">
              <h2 className="text-blk cardHeading">
                {language.about && language.about.about_what_we_do}
              </h2>
              <p className="text-blk cardSubHeading">
                {language.about && language.about.about_what_we_do_p}
              </p>
            </div>
          </div>
          <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12 background1">
            <div className="cardImgContainer">
              <i></i>
            </div>
            <div className="cardText">
              <h2 className="text-blk cardHeading">
                {language.about && language.about.about_why_choose_us}
              </h2>
              <p className="text-blk cardSubHeading">
                {language.about && language.about.about_why_choose_us_p}
              </p>
            </div>
          </div>

          <div className="btns">
            <Link onClick={topStarting} to={"/services"}>
              <button className="btn2">
                {language.about && language.about.button_explore_services}
              </button>
            </Link>
            <Link onClick={topStarting} to="/contact">
              <button className="btn2">
                {language.about && language.about.button_contact_us}
              </button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutUs;
