import "./home.css";
import { Link } from "react-router-dom";
import ServicesCard from "../../components/ServicesCard";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import ProjectsComponent from "../../components/ProjectsComponent";
import AcademyComponent from "../../components/AcademyComponent";
import ParticlesBackground from "../../components/ParticlesBackground";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const { ref, inView } = useInView({
    threshold: 0.5, // 50% of the element is visible
    triggerOnce: true, // Trigger only once
  });

  //this might be a problem
  useEffect(() => {
    const imgElements = document.querySelectorAll("img");
    let loadedImages = 0;

    const handleImageLoad = () => {
      loadedImages += 1;
      if (loadedImages === imgElements.length) {
        setLoading(false);
      }
    };

    imgElements.forEach((img) => {
      if (img.complete) {
        handleImageLoad();
      } else {
        img.addEventListener("load", handleImageLoad);
      }
    });

    return () => {
      imgElements.forEach((img) => {
        img.removeEventListener("load", handleImageLoad);
      });
    };
  }, []);

  if (loading) {
    return <Loader />;
  }
  //this might be a problem
  return (
    <>
      <ParticlesBackground />
      <main className="landing center">
        <div className="container">
          <div className="center opavity-animation flex-direction">
            <h1>
              welcome to <span className="inside-span"> blue elite tech </span>
              company
            </h1>
            <p>Where we turn your ideas into reality</p>
            <div className="flex">
              <Link className="btn2">
                contact us <i className="fa-solid fa-phone"></i>
              </Link>
              <Link className="btn">join us</Link>
            </div>
          </div>
        </div>
      </main>
      <main className="center body-color wrap">
        <div className="container">
          <div className="title">
            <h1 data-fill="About The Company" className="title body-color">
              About The Company
            </h1>
          </div>
        </div>
        <div className="container flex about-company">
          <div>
            <div className="relative">
              <div>
                <h2>
                  we are <span>lorem ipsum</span>
                </h2>
                <h3>
                  Blue Elite boasts extensive experience in software
                  development, supported by a dedicated team of specialized
                  experts with deep industry knowledge. Our team is skilled in
                  delivering innovative solutions across diverse platforms,
                </h3>
              </div>
              <div>
                <h2>Why Blue Elite Tech?</h2>
                <h3>
                  At Blue Elite, we take pride in partnering with our clients to
                  become an integral part of their journey towards success.
                  Contact us today to explore how we can collaborate to drive
                  your business forward through innovative software solutions.
                </h3>
              </div>
              <div className="before">
                <h2>In the World of Technology Introducing Blue Elite Tech</h2>
                <h3>
                  In the modern age of technology, software development has
                  become essential for business success and goal achievement.
                  Stepping into the spotlight is Blue Elite, a trusted partner
                </h3>
              </div>
            </div>

            <Link className="btn d-block">contact us</Link>
          </div>
          <div
            ref={ref}
            className={`${inView ? "slide-up-animation" : ""}  flex-100 center`}
          >
            {console.log(inView)}

            <img loading="lazy" src={require("./icon18.png")} alt="" />
          </div>
        </div>
      </main>
      <main className="center section-color home-services">
        <div className="container">
          <div className="title">
            <h1 data-fill="Services we provide" className="title section-color">
              Services we provide
            </h1>
          </div>
          <div className="services grid-3">
            <ServicesCard>
              <ServicesCard.Body>
                <ServicesCard.Body.Icon>
                  <i className="fa-solid fa-laptop-code"></i>
                </ServicesCard.Body.Icon>
                <ServicesCard.Body.Title> Desktop Apps</ServicesCard.Body.Title>
                <ServicesCard.Body.Paragraph>
                  We program all desktop applications according to the
                  customer's needs
                </ServicesCard.Body.Paragraph>
              </ServicesCard.Body>
              <ServicesCard.Bottom>
                <ServicesCard.Bottom.StartedLink className="started" />
                <ServicesCard.Bottom.Details />
              </ServicesCard.Bottom>
            </ServicesCard>

            <ServicesCard>
              <ServicesCard.Body>
                <ServicesCard.Body.Icon>
                  <i className="fa-solid fa-mobile-screen-button"></i>
                </ServicesCard.Body.Icon>
                <ServicesCard.Body.Title> mobile Apps</ServicesCard.Body.Title>
                <ServicesCard.Body.Paragraph>
                  We program all android applications according to the
                  customer’s needs
                </ServicesCard.Body.Paragraph>
              </ServicesCard.Body>
              <ServicesCard.Bottom>
                <ServicesCard.Bottom.StartedLink className="started" />
                <ServicesCard.Bottom.Details />
              </ServicesCard.Bottom>
            </ServicesCard>

            <ServicesCard>
              <ServicesCard.Body>
                <ServicesCard.Body.Icon>
                  <i className="fa-brands fa-chrome"></i>
                </ServicesCard.Body.Icon>
                <ServicesCard.Body.Title> Websites</ServicesCard.Body.Title>
                <ServicesCard.Body.Paragraph>
                  We design, manage and fully supervise websites
                </ServicesCard.Body.Paragraph>
              </ServicesCard.Body>
              <ServicesCard.Bottom>
                <ServicesCard.Bottom.StartedLink className="started" />
                <ServicesCard.Bottom.Details />
              </ServicesCard.Bottom>
            </ServicesCard>

            <ServicesCard>
              <ServicesCard.Body>
                <ServicesCard.Body.Icon>
                  <i className="fa-solid fa-cloud"></i>
                </ServicesCard.Body.Icon>
                <ServicesCard.Body.Title>
                  Server Management
                </ServicesCard.Body.Title>
                <ServicesCard.Body.Paragraph>
                  We install local servers and manage them according to the
                  needs of institutions and companies
                </ServicesCard.Body.Paragraph>
              </ServicesCard.Body>
              <ServicesCard.Bottom>
                <ServicesCard.Bottom.StartedLink className="started" />
                <ServicesCard.Bottom.Details />
              </ServicesCard.Bottom>
            </ServicesCard>

            <ServicesCard>
              <ServicesCard.Body>
                <ServicesCard.Body.Icon>
                  <i className="fa-solid fa-network-wired"></i>
                </ServicesCard.Body.Icon>
                <ServicesCard.Body.Title>
                  Local Networks
                </ServicesCard.Body.Title>
                <ServicesCard.Body.Paragraph>
                  We install LAN networks according to the needs of companies
                  and institutions
                </ServicesCard.Body.Paragraph>
              </ServicesCard.Body>
              <ServicesCard.Bottom>
                <ServicesCard.Bottom.StartedLink className="started" />
                <ServicesCard.Bottom.Details />
              </ServicesCard.Bottom>
            </ServicesCard>
          </div>
          <Link className="btn">see all services</Link>
        </div>
      </main>
      <main className="body-color center">
        <div className="container">
          <div className="title">
            <h1 className="title body-color" data-fill="our projects">
              Our Projects
            </h1>
          </div>
          <ProjectsComponent />

          <Link className="btn home-projects">see all projects </Link>
        </div>
      </main>
      <AcademyComponent />
    </>
  );
};

export default Home;
