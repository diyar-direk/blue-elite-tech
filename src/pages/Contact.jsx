import React, { useContext, useState } from "react";
import "./contact.css";
import MapComponent from "../components/MapComponent";
import ContactComponenet from "../components/ContactComponenet";
import { Context } from "../context/Context";
import Loader from "../components/Loader";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    services: "",
    message: "",
  });
  const context = useContext(Context);
  const language = context.language && context.language;

  document.addEventListener("click", () => {
    const selectDiv = document.querySelector(
      ".contact-page form div.inp > div.active"
    );
    selectDiv && selectDiv.classList.remove("active");
  });
  function handelFormChange(e) {
    setForm({ ...form, [e.target.id]: e.target.value });
  }
  function activeDiv(e) {
    e.stopPropagation();

    const allActive = document.querySelectorAll(
      `.contact-page form div.inp > div`
    );
    allActive.forEach((ele, i) => {
      if (e.target.dataset.index != i) ele.classList.remove("active");
    });
    const active = document.querySelector(
      `.contact-page form div.inp > div[data-input="${e.target.dataset.input}"]`
    );
    active && active.classList.toggle("active");
  }
  function selectServices(e) {
    setForm({ ...form, services: e.target.dataset.services });
    e.target.parentNode.classList.remove("active");
  }
  function selectCours(e) {
    setForm({ ...form, cours: e.target.dataset.services });
    e.target.parentNode.classList.remove("active");
  }
  if (!context) {
    <Loader />;
  }
  return (
    <main className="center">
      <div className="container">
        <div className="title">
          <h1 className="title body-color" data-fill="contact us">
            {language.contact && language.contact.contact_header}
          </h1>
        </div>
        <div className="contact-page flex">
          <form className="flex-1">
            <label htmlFor="name">
              {" "}
              {language.contact && language.contact.contact_fullName}
            </label>
            <input
              required
              className="inp"
              type="text"
              id="name"
              placeholder={
                language.contact &&
                language.contact.contact_fullName_placeholder
              }
              value={form.name}
              onInput={handelFormChange}
            />

            <label htmlFor="phone">
              {language.contact && language.contact.contact_Phone}
            </label>
            <input
              required
              value={form.phone}
              onInput={handelFormChange}
              className="inp"
              type="text"
              id="phone"
              placeholder={
                language.contact && language.contact.contact_phone_placeholder
              }
            />

            <label htmlFor="email">
              {language.contact && language.contact.contact_Email}
            </label>
            <input
              required
              value={form.email}
              onInput={handelFormChange}
              className="inp"
              type="email"
              id="email"
              placeholder={
                language.contact && language.contact.contact_email_placeholder
              }
            />

            <label>
              {language.contact && language.contact.contact_service}
            </label>
            <div
              data-input="services"
              data-index="0"
              onClick={activeDiv}
              className="select-services inp"
            >
              {form.services || "choose services"}{" "}
              <i className="fa-solid fa-chevron-down"></i>
              <div data-input="services">
                <p onClick={selectServices} data-services="mobile Application">
                  {language.contact &&
                    language.contact.contact_services.mobile_application}
                </p>
                <p
                  onClick={selectServices}
                  data-services=" Desktop Application"
                >
                  {language.contact &&
                    language.contact.contact_services.desktop_application}
                </p>
                <p onClick={selectServices} data-services="Websites">
                  {language.contact &&
                    language.contact.contact_services.websites}
                </p>
                <p onClick={selectServices} data-services="Server Managemen">
                  {language.contact &&
                    language.contact.contact_services.server_managment}
                </p>
                <p
                  onClick={selectServices}
                  data-services="Local Networks services"
                >
                  {language.contact &&
                    language.contact.contact_services.local_network}
                </p>
                <p onClick={selectServices} data-services="Qualifying services">
                  {language.contact &&
                    language.contact.contact_services.qualifying}
                </p>
                <p
                  onClick={selectServices}
                  data-services="Warning System services"
                >
                  {language.contact &&
                    language.contact.contact_services.warning_system}
                </p>
                <p
                  onClick={selectServices}
                  data-services="Camera System services"
                >
                  {language.contact &&
                    language.contact.contact_services.camera_system}
                </p>
                <p onClick={selectServices} data-services="SÎMURX Academy">
                  {language.contact &&
                    language.contact.contact_services.SÎMURX_academy}
                </p>
              </div>
            </div>

            {form.services === "SÎMURX Academy" && (
              <label>
                {" "}
                {language.contact && language.contact.contact_choose_course}
              </label>
            )}
            {form.services === "SÎMURX Academy" && (
              <div
                data-input="cours"
                data-index="1"
                onClick={activeDiv}
                className="select-services inp"
              >
                {form.cours
                  ? form.cours
                  : language.contact && language.contact.contact_select_course}
                <i className="fa-solid fa-chevron-down"></i>
                <div data-input="cours">
                  <p onClick={selectCours} data-services="cours 1">
                    cours 1
                  </p>
                  <p onClick={selectCours} data-services="cours 2">
                    cours 2
                  </p>
                  <p onClick={selectCours} data-services="cours 3">
                    cours 3
                  </p>
                </div>
              </div>
            )}

            <label htmlFor="message">
              {" "}
              {language.contact && language.contact.contact_service_description}
            </label>
            <textarea
              value={form.message}
              onInput={handelFormChange}
              rows={7}
              placeholder="writ your message"
              id="message"
              className="inp"
              required
              name="message"
            />
            <button className="btn2">
              {" "}
              {language.contact && language.contact.button_submit}
            </button>
          </form>
          <ContactComponenet>
            <ContactComponenet.Form>
              <ContactComponenet.Info
                language={language && language}
                location="blue tech"
              ></ContactComponenet.Info>
              <MapComponent location="blue tech" />
            </ContactComponenet.Form>
          </ContactComponenet>
        </div>
      </div>
    </main>
  );
};

export default Contact;
