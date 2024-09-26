import "./home.css";
import { Link } from "react-router-dom";
import ServicesCard from "../../components/ServicesCard";
import { useInView } from "react-intersection-observer";
import { useContext, useEffect, useState } from "react";
import Loader from "../../components/Loader";
import ProjectsComponent from "../../components/ProjectsComponent";
import AcademyComponent from "../../components/AcademyComponent";
import ParticlesBackground from "../../components/ParticlesBackground";
import { Context } from "../../context/Context";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const { ref, inView } = useInView({
    threshold: 0.5, // 50% of the element is visible
    triggerOnce: true, // Trigger only once
  });
  const context = useContext(Context);
  const language = context.language;
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
  if (!context) {
    <Loader />;
  }
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
            {context.selectedLang === "english" ? (
              <h1>
                welcome to
                <span className="inside-span"> blue elite tech </span>
                company
              </h1>
            ) : context.selectedLang === "arabic" ? (
              <h1>
                <span className="inside-span"> blue elite tech </span>
                مرحبًا بكم في شركة
              </h1>
            ) : (
              <h1>
                Kurdish
                <span className="inside-span"> blue elite tech </span>
                company
              </h1>
            )}
            <p>{language.landing.landing_p}</p>
            <div className="flex">
              <Link to={`/contact`} className="btn2">
                {language.landing.first_button}
                <i className="fa-solid fa-phone"></i>
              </Link>
              <Link to={`/`} className="btn">
                {language.landing.second_button}
              </Link>
            </div>
          </div>
        </div>
      </main>
      <main className="center body-color wrap">
        <div className="container">
          <div className="title">
            <h1 data-fill="About The Company" className="title body-color">
              {language.about_home.about_header}
            </h1>
          </div>
        </div>
        <div className="container flex about-company">
          <div>
            <div className="relative">
              <div>
                <h2>
                  {language.about_home.first_h1} <span>lorem ipsum</span>
                </h2>
                <h3>{language.about_home.first_p}</h3>
              </div>
              <div>
                <h2> {language.about_home.second_h1}</h2>
                <h3>{language.about_home.second_p}</h3>
              </div>
              <div className="before">
                <h2> {language.about_home.third_h1}</h2>
                <h3>{language.about_home.third_p}</h3>
              </div>
            </div>

            <Link className="btn d-block">{language.about_home.about_btn}</Link>
          </div>
          <div
            ref={ref}
            className={`${inView ? "slide-up-animation" : ""}  flex-100 center`}
          >
            <img loading="lazy" src={require("./icon18.png")} alt="" />
          </div>
        </div>
      </main>
      <main className="center section-color home-services">
        <div className="container">
          <div className="title">
            <h1 data-fill="Services we provide" className="title section-color">
              {language.services.sevices_home_header}
            </h1>
          </div>
          <div className="services grid-3">
            <ServicesCard>
              <ServicesCard.Body>
                <ServicesCard.Body.Icon>
                  <i className="fa-solid fa-laptop-code"></i>
                </ServicesCard.Body.Icon>
                <ServicesCard.Body.Title>
                  {language.services.desktop_header}
                </ServicesCard.Body.Title>
                <ServicesCard.Body.Paragraph>
                  {language.services.desktop_p}
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
                <ServicesCard.Body.Title>
                  {" "}
                  {language.services.mobile_header}
                </ServicesCard.Body.Title>
                <ServicesCard.Body.Paragraph>
                  {language.services.mobile_p}
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
                <ServicesCard.Body.Title>
                  {" "}
                  {language.services.websites_header}
                </ServicesCard.Body.Title>
                <ServicesCard.Body.Paragraph>
                  {language.services.websites_p}
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
                  {language.services.server_header}
                </ServicesCard.Body.Title>
                <ServicesCard.Body.Paragraph>
                  {language.services.server_p}
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
                  {language.services.local_header}
                </ServicesCard.Body.Title>
                <ServicesCard.Body.Paragraph>
                  {language.services.local_p}
                </ServicesCard.Body.Paragraph>
              </ServicesCard.Body>
              <ServicesCard.Bottom>
                <ServicesCard.Bottom.StartedLink className="started" />
                <ServicesCard.Bottom.Details />
              </ServicesCard.Bottom>
            </ServicesCard>
          </div>
          <Link className="btn">
            {" "}
            {language.services.button_seeAllServices}
          </Link>
        </div>
      </main>
      <main className="body-color center">
        <div className="container">
          <div className="title">
            <h1 className="title body-color" data-fill="our projects">
              {language.projects.projects_home_header}
            </h1>
          </div>
          <ProjectsComponent />

          <Link className="btn home-projects">
            {language.projects.btn_allProjects}
          </Link>
        </div>
      </main>
      <AcademyComponent />
    </>
  );
};

export default Home;
