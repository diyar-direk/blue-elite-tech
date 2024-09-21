import React, { useContext, useEffect, useState } from "react";
import "./home.css";
import img from "./landing3.png";
import { Context } from "../context/Context";
import { Link } from "react-router-dom";
const Home = () => {
  const context = useContext(Context);
  return (
    <>
      <main className="landing center">
        <div className="container">
          <div className="flex wrap">
            <div className="center flex-direction">
              <h1>
                welcom to <span className="inside-span"> blue elite tech </span>
                world
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                laudantium consectetur! Accusantium maxime, nam enim voluptatum
                tenetur et nemo. Quibusdam deleniti voluptatum commodi, enim
                dicta hic minima alias veritatis suscipit?
              </p>
            </div>
            <div className="center">
              <img src={img} alt="" />
            </div>
          </div>
        </div>
        <div className="svg">
          <svg
            id="wave"
            viewBox="0 0 1440 100"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                <stop stopColor="rgba(243, 106, 62, 1)" offset="0%" />
                <stop stopColor="rgba(255, 179, 11, 1)" offset="100%" />
              </linearGradient>
            </defs>
            <path
              fill={context.theme ? "#181b20" : "#fff"}
              d="M0,60L20,53.3C40,47,80,33,120,25C160,17,200,13,240,16.7C280,20,320,30,360,35C400,40,440,40,480,40C520,40,560,40,600,43.3C640,47,680,53,720,56.7C760,60,800,60,840,55C880,50,920,40,960,41.7C1000,43,1040,57,1080,63.3C1120,70,1160,70,1200,60C1240,50,1280,30,1320,33.3C1360,37,1400,63,1440,61.7C1480,60,1520,30,1560,28.3C1600,27,1640,53,1680,68.3C1720,83,1760,87,1800,73.3C1840,60,1880,30,1920,16.7C1960,3,2000,7,2040,10C2080,13,2120,17,2160,15C2200,13,2240,7,2280,11.7C2320,17,2360,33,2400,43.3C2440,53,2480,57,2520,48.3C2560,40,2600,20,2640,18.3C2680,17,2720,33,2760,43.3C2800,53,2840,57,2860,58.3L2880,60L2880,100L2860,100C2840,100,2800,100,2760,100C2720,100,2680,100,2640,100C2600,100,2560,100,2520,100C2480,100,2440,100,2400,100C2360,100,2320,100,2280,100C2240,100,2200,100,2160,100C2120,100,2080,100,2040,100C2000,100,1960,100,1920,100C1880,100,1840,100,1800,100C1760,100,1720,100,1680,100C1640,100,1600,100,1560,100C1520,100,1480,100,1440,100C1400,100,1360,100,1320,100C1280,100,1240,100,1200,100C1160,100,1120,100,1080,100C1040,100,1000,100,960,100C920,100,880,100,840,100C800,100,760,100,720,100C680,100,640,100,600,100C560,100,520,100,480,100C440,100,400,100,360,100C320,100,280,100,240,100C200,100,160,100,120,100C80,100,40,100,20,100L0,100Z"
            ></path>
          </svg>
        </div>
      </main>
      <main
        className="center body-color"
        style={{ transform: "translateY(-10px)" }}
      >
        <div className="container flex about-company">
          <div className="">
            <h1 data-fill="About The Company" className="title">
              About The Company
            </h1>

            <div className="relative">
              <div className="slider active">
                <h2>
                  we are <span>lorem ipsum</span>
                </h2>
                <h3>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  inventore debitis, cum non, quibusdam pariatur minus omnis vel
                  excepturi, quia eos. Eos modi earum vitae accusantium
                  consectetur. Nobis, delectus amet?
                </h3>
              </div>
              <div className="slider">
                <h2>
                  In the World of Technological Advancement Introducing Blue
                  Elite Tech
                </h2>
                <h3>
                  In the modern age of technology, software development has
                  become essential for business success and goal achievement.
                  Stepping into the spotlight is Blue Elite, a trusted partner
                  in the realm of software development, committed to delivering
                  innovative solutions that efficiently meet our clients' needs
                  with unparalleled quality.
                </h3>
              </div>
            </div>
            <div className="dots">
              <span className="active"></span>
              <span></span>
            </div>
            <div className="btn">contact us</div>
          </div>
          <div className="">
            <img src={require("./icon12.png")} alt="" />
          </div>
        </div>
      </main>
      <main className="center section-color home-services">
        <div className="container">
          <h1 data-fill="Services we provide" className="title">
            Services we provide
          </h1>
          <div className="services">
            <article>
              <div>
                <i className="fa-solid fa-laptop-code"></i>
                <h1>Desktop Apps</h1>
                <p>
                  We program all desktop applications according to the
                  customer's needs
                </p>
              </div>
              <article>
                <div className="between">
                  <Link className="started">get started</Link>
                  <Link>Details</Link>
                </div>
              </article>
            </article>

            <article>
              <div>
                <i className="fa-solid fa-mobile-screen-button"></i>
                <h1>mobile Apps</h1>
                <p>
                  We program all android applications according to the
                  customer’s needs
                </p>
              </div>
              <article>
                <div className="between">
                  <Link className="started">get started</Link>
                  <Link>Details</Link>
                </div>
              </article>
            </article>

            <article>
              <div>
                <i className="fa-brands fa-chrome"></i>
                <h1>Websites</h1>
                <p>
                  We program all desktop applications according to the
                  customer's needs
                </p>
              </div>
              <article>
                <div className="between">
                  <Link className="started">get started</Link>
                  <Link>Details</Link>
                </div>
              </article>
            </article>

            <article>
              <div>
                <i className="fa-solid fa-cloud"></i>
                <h1>Server Management</h1>
                <p>
                  We install local servers and manage them according to the
                  needs of institutions and companies
                </p>
              </div>
              <article>
                <div className="between">
                  <Link className="started">get started</Link>
                  <Link>Details</Link>
                </div>
              </article>
            </article>

            <article>
              <div>
                <i className="fa-solid fa-network-wired"></i>
                <h1>Local Networks</h1>
                <p>
                  We install LAN networks according to the needs of companies
                  and institutions
                </p>
              </div>
              <article>
                <div className="between">
                  <Link className="started">get started</Link>
                  <Link>Details</Link>
                </div>
              </article>
            </article>
          </div>
          <Link className="btn">see all services</Link>
        </div>
      </main>
      <main className="body-color"></main>
    </>
  );
};

export default Home;
