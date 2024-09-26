import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./about.css";
import { Context } from "../context/Context";
const AboutUs = () => {
  const context = useContext(Context);
  const language = context.language && context.language;
  return (
    <>
      <main class="responsive-container-block sub-page bigContainer section-color ">
        <div class="responsive-container-block container">
          <div className="title">
            <h1 className="title body-color" data-fill="About Us">
              About Us
            </h1>
          </div>
          <div class="responsive-container-block textSide">
            <div className="about-info flex">
              <div className="info-first">
                <p class="text-blk heading">Who Are We?</p>
                <p class="text-blk subHeading">
                  Blue Elite Tech is a leading company in software development,
                  we are passionate about driving innovation and excellence in
                  the world of software development. Founded with the vision to
                  revolutionize the tech industry, we specialize in creating
                  cutting-edge solutions for businesses and individuals alike.
                </p>
              </div>
              <img loading="lazy" src={require("./home/icon32.png")} alt="" />
            </div>
          </div>
        </div>
      </main>

      <main className="about-wrapper body-color">
        <div className="spikes"></div>
        <div className="about-flex grid-2 container ">
          <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12 background1">
            <div class="cardImgContainer">
              <i></i>
            </div>
            <div class="cardText">
              <h2 class="text-blk cardHeading">
                {" "}
                {language.about && language.about.about_our_mission}
              </h2>
              <p class="text-blk cardSubHeading">
                {language.about && language.about.about_our_mission_p}
              </p>
            </div>
          </div>
          <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12 background2">
            <div class="cardImgContainer">
              <i></i>
            </div>
            <div class="cardText">
              <h2 class="text-blk cardHeading">
                {" "}
                {language.about && language.about.about_our_team}
              </h2>
              <p class="text-blk cardSubHeading">
                {language.about && language.about.about_our_team_p}
              </p>
            </div>
          </div>
          <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12 background2 ">
            <div class="cardImgContainer">
              <i></i>
            </div>
            <div class="cardText">
              <h2 class="text-blk cardHeading">
                {" "}
                {language.about && language.about.about_what_we_do}
              </h2>
              <p class="text-blk cardSubHeading">
                {language.about && language.about.about_what_we_do_p}
              </p>
            </div>
          </div>
          <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12 background1">
            <div class="cardImgContainer">
              <i></i>
            </div>
            <div class="cardText">
              <h2 class="text-blk cardHeading">
                {" "}
                {language.about && language.about.about_why_choose_us}
              </h2>
              <p class="text-blk cardSubHeading">
                {language.about && language.about.about_why_choose_us_p}
              </p>
            </div>
          </div>

          <div className="btns">
            <Link>
              <button class="btn2">
                {" "}
                {language.about && language.about.button_explore_services}
              </button>
            </Link>
            <Link>
              <button class="btn2">
                {" "}
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
