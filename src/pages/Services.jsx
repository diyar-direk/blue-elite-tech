import React from "react";
import ServicesCard from "../components/ServicesCard";

const Services = () => {
  return (
    <main className="center sub-page body-color services-page">
      <div className="container">
        <div className="title">
          <h1 className="title body-color" data-fill="our services ">
            our services
          </h1>
        </div>
        <div className="sevice-info flex">
          <h3>
            Blue Elite Tech is a leading software company known for its
            innovative solutions and advanced technology services. Founded on
            the principles of innovation and excellence, we have assembled a
            team of specialized developers and engineers dedicated to realizing
            our clients’ vision and meeting their technological needs.
          </h3>
          <img src={require("./32.png")} alt="" />
        </div>
        <div className="grid-3 services">
          <ServicesCard>
            <ServicesCard.Body>
              <ServicesCard.Body.Icon>
                <i className="fa-solid fa-laptop-code"></i>
              </ServicesCard.Body.Icon>
              <ServicesCard.Body.Title> Desktop Apps</ServicesCard.Body.Title>
              <ServicesCard.Body.Paragraph>
                We program all desktop applications according to the customer's
                needs
              </ServicesCard.Body.Paragraph>
            </ServicesCard.Body>
            <ServicesCard.Bottom>
              <ServicesCard.Bottom.StartedLink />
            </ServicesCard.Bottom>
          </ServicesCard>

          <ServicesCard>
            <ServicesCard.Body>
              <ServicesCard.Body.Icon>
                <i className="fa-solid fa-mobile-screen-button"></i>
              </ServicesCard.Body.Icon>
              <ServicesCard.Body.Title> mobile Apps</ServicesCard.Body.Title>
              <ServicesCard.Body.Paragraph>
                We program all android applications according to the customer’s
                needs
              </ServicesCard.Body.Paragraph>
            </ServicesCard.Body>
            <ServicesCard.Bottom>
              <ServicesCard.Bottom.StartedLink />
            </ServicesCard.Bottom>
          </ServicesCard>

          <ServicesCard>
            <ServicesCard.Body>
              <ServicesCard.Body.Icon>
                <i className="fa-brands fa-chrome"></i>
              </ServicesCard.Body.Icon>
              <ServicesCard.Body.Title> Websites</ServicesCard.Body.Title>
              <ServicesCard.Body.Paragraph>
                We design, develop, manage, and fully supervise websites,
                ensuring  performance, and user-friendly functionality.
              </ServicesCard.Body.Paragraph>
            </ServicesCard.Body>
            <ServicesCard.Bottom>
              <ServicesCard.Bottom.StartedLink />
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
                We install local servers and manage them according to the needs
                of institutions and companies
              </ServicesCard.Body.Paragraph>
            </ServicesCard.Body>
            <ServicesCard.Bottom>
              <ServicesCard.Bottom.StartedLink />
            </ServicesCard.Bottom>
          </ServicesCard>

          <ServicesCard>
            <ServicesCard.Body>
              <ServicesCard.Body.Icon>
                <i className="fa-solid fa-network-wired"></i>
              </ServicesCard.Body.Icon>
              <ServicesCard.Body.Title>Local Networks</ServicesCard.Body.Title>
              <ServicesCard.Body.Paragraph>
                We install LAN networks according to the needs of companies and
                institutions
              </ServicesCard.Body.Paragraph>
            </ServicesCard.Body>
            <ServicesCard.Bottom>
              <ServicesCard.Bottom.StartedLink />
            </ServicesCard.Bottom>
          </ServicesCard>

          <ServicesCard>
            <ServicesCard.Body>
              <ServicesCard.Body.Icon>
                <i className="fa-solid fa-list-check"></i>
              </ServicesCard.Body.Icon>
              <ServicesCard.Body.Title>Qualifying</ServicesCard.Body.Title>
              <ServicesCard.Body.Paragraph>
                Providing technical consultations and protection in the areas of
                developing
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
              <ServicesCard.Body.Title>Camera System</ServicesCard.Body.Title>
              <ServicesCard.Body.Paragraph>
                Installing protection networks with surveillance cameras
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
              <ServicesCard.Body.Title>Warning System</ServicesCard.Body.Title>
              <ServicesCard.Body.Paragraph>
                Establishing early warning systems and sensors upon request
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
