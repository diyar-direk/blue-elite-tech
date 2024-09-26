import React from "react";
import { Link } from "react-router-dom";
import "./about.css";
const AboutUs = () => {
  return (
    <>
    <main class="responsive-container-block bigContainer ">
      <div className="title">
        <h1 className="title body-color" data-fill="About Us">
          About Us
        </h1>
      </div>
      <div class="responsive-container-block container">
        <div class="responsive-container-block textSide">
          <div className="about-info flex">
            <div className="info-first">
              <p class="text-blk heading">Who Are We?</p>
              <p class="text-blk subHeading">
                Blue Elite Tech is a leading company in software development, we
                are passionate about driving innovation and excellence in the
                world of software development. Founded with the vision to
                revolutionize the tech industry, we specialize in creating
                cutting-edge solutions for businesses and individuals alike.
              </p>
            </div>
            <img loading="lazy" src={require("./home/icon32.png")} alt="" />
          </div>
        </div>
      </div>
      </main>

      <main className="about-wrapper">
        <div className="about-flex grid-2 container ">
          <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
            <div class="cardImgContainer">
              <i></i>
            </div>
            <div class="cardText">
              <h2 class="text-blk cardHeading">Our Mission</h2>
              <p class="text-blk cardSubHeading">
                Our mission is to deliver high-quality, tailored software
                solutions that meet the unique needs of our clients. We aim to
                empower businesses with technology that enhances efficiency,
                productivity, and growth.
              </p>
            </div>
          </div>
          <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
            <div class="cardImgContainer">
              <i></i>
            </div>
            <div class="cardText">
              <h2 class="text-blk cardHeading">Our Team</h2>
              <p class="text-blk cardSubHeading">
                Our team comprises skilled professionals with diverse expertise
                in software development, design, and cybersecurity. With a
                commitment to continuous learning and innovation, we ensure that
                our solutions are always at the forefront of technology.
              </p>
            </div>
          </div>
          <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
            <div class="cardImgContainer">
              <i></i>
            </div>
            <div class="cardText">
              <h2 class="text-blk cardHeading">What We Do</h2>
              <p class="text-blk cardSubHeading">
                Application Development: From desktop to mobile applications, we
                design and develop custom software that aligns with your
                business objectives. Web Design: Our team crafts visually
                stunning and highly functional websites that offer an
                exceptional user experience. Cybersecurity: We provide
                comprehensive cybersecurity services to protect your digital
                assets from potential threats. Coding Courses: Through our
                partner academy, Symorx, we offer a range of coding courses
                designed to equip aspiring developers with the skills they need
                to succeed in the tech industry.
              </p>
            </div>
          </div>
          <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
            <div class="cardImgContainer">
              <i></i>
            </div>
            <div class="cardText">
              <h2 class="text-blk cardHeading">Why Choosing Us</h2>
              <p class="text-blk cardSubHeading">
                Expertise: Our experienced team brings a wealth of knowledge and
                skill to every project. Innovation: We leverage the latest
                technologies to deliver innovative solutions. Client-Centric: We
                prioritize our clients' needs and work closely with them to
                achieve their goals. Quality: TWe are dedicated to delivering
                high-quality products and services that exceed expectations.
              </p>
            </div>
          </div>

          <div className="btns">
            <Link>
              <button class="btn2">Explore our Services</button>
            </Link>
            <Link>
              <button class="btn2">Explore our Services</button>
            </Link>
          </div>
        </div>
    </main>
    </>
  );
};

export default AboutUs;
