import React, { useContext } from "react";
import { Context } from "../../context/Context";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const context = useContext(Context);
  const language = context && context.language;
  return (
    <main className="center sub-page body-color services-page">
      <div className="container">
        <div className="title">
          <h1 className="title body-color" data-fill="our services ">
            {language.services && language.services.sevices_section_header}
          </h1>
        </div>
        <div className="sevice-info grid-2">
          <h3>
            Blue Elite Tech is a leading software company known for its
            innovative solutions and advanced technology services. Founded on
            the principles of innovation and excellence, we have assembled a
            team of specialized developers and engineers dedicated to realizing
            our clients’ vision and meeting their technological needs.
          </h3>
          <img loading="lazy" src={require("./about.png")} alt="" />
        </div>
        <div className="grid-3 services">
          <ServicesCard>
            <ServicesCard.Body>
              <ServicesCard.Body.Icon>
                <i className="fa-solid fa-laptop-code"></i>
              </ServicesCard.Body.Icon>
              <ServicesCard.Body.Title>
                {language.services && language.services.desktop_header}
              </ServicesCard.Body.Title>
              <ServicesCard.Body.Paragraph>
                {language.services && language.services.desktop_p}
              </ServicesCard.Body.Paragraph>
            </ServicesCard.Body>
            <ServicesCard.Bottom>
              <ServicesCard.Bottom.StartedLink
                title={language.services && language.services.button_getStarted}
                state={language.services && language.services.desktop_header}
              />
            </ServicesCard.Bottom>
          </ServicesCard>

          <ServicesCard>
            <ServicesCard.Body>
              <ServicesCard.Body.Icon>
                <i className="fa-solid fa-mobile-screen-button"></i>
              </ServicesCard.Body.Icon>
              <ServicesCard.Body.Title>
                {language.services && language.services.mobile_header}
              </ServicesCard.Body.Title>
              <ServicesCard.Body.Paragraph>
                {language.services && language.services.mobile_p}
              </ServicesCard.Body.Paragraph>
            </ServicesCard.Body>
            <ServicesCard.Bottom>
              <ServicesCard.Bottom.StartedLink
                title={language.services && language.services.button_getStarted}
                state={language.services && language.services.mobile_header}
              />
            </ServicesCard.Bottom>
          </ServicesCard>

          <ServicesCard>
            <ServicesCard.Body>
              <ServicesCard.Body.Icon>
                <i className="fa-brands fa-chrome"></i>
              </ServicesCard.Body.Icon>
              <ServicesCard.Body.Title>
                {language.services && language.services.websites_header}
              </ServicesCard.Body.Title>
              <ServicesCard.Body.Paragraph>
                {language.services && language.services.websites_p}
              </ServicesCard.Body.Paragraph>
            </ServicesCard.Body>
            <ServicesCard.Bottom>
              <ServicesCard.Bottom.StartedLink
                title={language.services && language.services.button_getStarted}
                state={language.services && language.services.websites_header}
              />
            </ServicesCard.Bottom>
          </ServicesCard>

          <ServicesCard>
            <ServicesCard.Body>
              <ServicesCard.Body.Icon>
                <i className="fa-solid fa-cloud"></i>
              </ServicesCard.Body.Icon>
              <ServicesCard.Body.Title>
                {language.services && language.services.server_header}
              </ServicesCard.Body.Title>
              <ServicesCard.Body.Paragraph>
                {language.services && language.services.server_p}
              </ServicesCard.Body.Paragraph>
            </ServicesCard.Body>
            <ServicesCard.Bottom>
              <ServicesCard.Bottom.StartedLink
                title={language.services && language.services.button_getStarted}
                state={language.services && language.services.server_header}
              />
            </ServicesCard.Bottom>
          </ServicesCard>

          <ServicesCard>
            <ServicesCard.Body>
              <ServicesCard.Body.Icon>
                <i className="fa-solid fa-network-wired"></i>
              </ServicesCard.Body.Icon>
              <ServicesCard.Body.Title>
                {language.services && language.services.local_header}
              </ServicesCard.Body.Title>
              <ServicesCard.Body.Paragraph>
                {language.services && language.services.local_p}
              </ServicesCard.Body.Paragraph>
            </ServicesCard.Body>
            <ServicesCard.Bottom>
              <ServicesCard.Bottom.StartedLink
                title={language.services && language.services.button_getStarted}
                state={language.services && language.services.local_header}
              />
            </ServicesCard.Bottom>
          </ServicesCard>

          <ServicesCard>
            <ServicesCard.Body>
              <ServicesCard.Body.Icon>
                <i className="fa-solid fa-list-check"></i>
              </ServicesCard.Body.Icon>
              <ServicesCard.Body.Title>
                {" "}
                {language.services && language.services.qualifying_header}
              </ServicesCard.Body.Title>
              <ServicesCard.Body.Paragraph>
                {language.services && language.services.qualifying_p}
              </ServicesCard.Body.Paragraph>
            </ServicesCard.Body>
            <ServicesCard.Bottom>
              <ServicesCard.Bottom.StartedLink />
            </ServicesCard.Bottom>
          </ServicesCard>

          <ServicesCard>
            <ServicesCard.Body>
              <ServicesCard.Body.Icon>
                <i className="fa-solid fa-camera-retro"></i>
              </ServicesCard.Body.Icon>
              <ServicesCard.Body.Title>
                {language.services && language.services.camera_header}
              </ServicesCard.Body.Title>
              <ServicesCard.Body.Paragraph>
                {language.services && language.services.camera_p}
              </ServicesCard.Body.Paragraph>
            </ServicesCard.Body>
            <ServicesCard.Bottom>
              <ServicesCard.Bottom.StartedLink />
            </ServicesCard.Bottom>
          </ServicesCard>

          <ServicesCard>
            <ServicesCard.Body>
              <ServicesCard.Body.Icon>
                <i className="fa-solid fa-lightbulb"></i>
              </ServicesCard.Body.Icon>
              <ServicesCard.Body.Title>
                {" "}
                {language.services && language.services.warning_header}
              </ServicesCard.Body.Title>
              <ServicesCard.Body.Paragraph>
              {language.services && language.services.warning_p}
              </ServicesCard.Body.Paragraph>
            </ServicesCard.Body>
            <ServicesCard.Bottom>
              <ServicesCard.Bottom.StartedLink />
            </ServicesCard.Bottom>
          </ServicesCard>
        </div>
      </div>
    </main>
  );
};

export default Services;
