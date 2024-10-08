import { Link } from "react-router-dom";
import { topStarting } from "./Header";

const ContactComponenet = ({ children }) => {
  return <div className="contact-comp"> {children} </div>;
};

ContactComponenet.Info = ({ children, title, location, showBtn, language }) => {
  return (
    <>
      <div className="info flex">
        <div>
          <h3 className="title"> {title} </h3>
          <article className="flex">
            <div className="flex">
              <i className="fa-solid fa-envelope"></i>
            </div>
            <div>
              <h3>
                {language.academy && language.academy.academy_contact_email}
              </h3>
              <a
                target="_b lank"
                href={
                  location === "blue tech"
                    ? "mailto:support@blue-elite.tech"
                    : "mailto:simurxakademy@gmail.com"
                }
              >
                {location === "blue tech"
                  ? "support@blue-elite.tech"
                  : "simurxakademy@gmail.com"}
              </a>
            </div>
          </article>
          <article className="flex">
            <div className="flex">
              <i className="fa-solid fa-phone"></i>
            </div>
            <div>
              <h3>
                {language.academy && language.academy.academy_contact_phone}
              </h3>
              <a
                target="_bla nk"
                href={
                  location === "blue tech"
                    ? "tel:+963939722358"
                    : "tel:+963984981113"
                }
              >
                {location === "blue tech"
                  ? "+963 939 722 358"
                  : "+963 984 981 113"}
              </a>
            </div>
          </article>
          <article className="flex">
            <div className="flex">
              <i className="fa-solid fa-building"></i>
            </div>
            <div>
              <h3>
                {language.academy && language.academy.academy_contact_adress_h1}
              </h3>
              <a
                target="_bla nk"
                href={
                  location === "blue tech"
                    ? "https://www.google.com/maps/place/36%C2%B030'56.8%22N+40%C2%B044'57.9%22E/@36.5157901,40.7487793,19z/data=!3m1!4b1!4m4!3m3!8m2!3d36.515789!4d40.749423?hl=en-US&entry=ttu"
                    : "https://www.google.com/maps/place/36%C2%B030'56.8%22N+40%C2%B044'57.9%22E/@36.5157901,40.7487793,19z/data=!3m1!4b1!4m4!3m3!8m2!3d36.515789!4d40.749423?hl=en-US&entry=ttu"
                }
              >
                {location === "blue tech"
                  ? "GP8X+8P2, Al Hasakah, Syria"
                  : "Al Qamishli, Syria"}
              </a>
            </div>
          </article>
          {showBtn && (
            <Link
              onClick={topStarting}
              state={{ services: "SÎMURX ACADEMY" }}
              to={`/contact_us`}
              className="btn2"
            >
              {language.academy && language.academy.button_getStarted}
            </Link>
          )}
        </div>

        {children}
      </div>
    </>
  );
};

ContactComponenet.Form = ({ children }) => {
  return <div className="form">{children}</div>;
};

export default ContactComponenet;
