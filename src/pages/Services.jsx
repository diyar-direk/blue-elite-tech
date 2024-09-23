import React from "react";
import ServicesCard from "../components/ServicesCard";

const Services = () => {
  return (
    <main className="center section-color">
      <div className="container">
        <div className="title">
          <h1 className="title section-color" data-fill="our services ">
            our services
          </h1>
        </div>
        <h3>
          Blue Elite Tech is a leading software company known for its innovative
          solutions and advanced technology services. Founded on the principles
          of innovation and excellence, we have assembled a team of specialized
          developers and engineers dedicated to realizing our clients’ vision
          and meeting their technological needs.
        </h3>
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
                We program all android applications according to the customer’s
                needs
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
                We install local servers and manage them according to the needs
                of institutions and companies
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
              <ServicesCard.Body.Title>Local Networks</ServicesCard.Body.Title>
              <ServicesCard.Body.Paragraph>
                We install LAN networks according to the needs of companies and
                institutions
              </ServicesCard.Body.Paragraph>
            </ServicesCard.Body>
            <ServicesCard.Bottom>
              <ServicesCard.Bottom.StartedLink className="started" />
              <ServicesCard.Bottom.Details />
            </ServicesCard.Bottom>
          </ServicesCard>
        </div>
      </div>
    </main>
  );
};

export default Services;
