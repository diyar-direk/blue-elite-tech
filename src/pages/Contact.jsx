import React, { useContext, useEffect, useState } from "react";
import "./contact.css";
import MapComponent from "../components/MapComponent";
import ContactComponenet from "../components/ContactComponenet";
import { useLocation } from "react-router-dom";
import { Context } from "../context/Context";
import Loader from "../components/Loader";
import axios from "axios";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    services: "",
    message: "",
    course: "",
  });
  const context = useContext(Context);
  const language = context.language && context.language;
  const location = useLocation();
  const services = location.state;
  const sendEmail = (e) => {
    console.log(form);
    const body = `
    name:${form.name}
    email:${form.email}
    phone number :${form.phone}
    service:${form.services}
   ${form.course && `course: ${form.course}`}
   message :${form.message}

    `;

    form.body = body;
    console.log(form.body);

    axios
      .post("http://localhost:8000/api/email/send", form)
      .then((res) => console.log("hi"));
  };
  useEffect(() => {
    if (services) setForm({ ...form, services: services.services });
  }, []);

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
    setForm({ ...form, course: e.target.dataset.services });
    e.target.parentNode.classList.remove("active");
  }
  if (!context) {
    <Loader />;
  }
  return (
    <main className="center sub-page">
      <div className="container">
        <div className="title">
          <h1
            className="title body-color"
            data-fill={language.contact && language.contact.contact_header}
          >
            {language.contact && language.contact.contact_header}
          </h1>
        </div>
        <div className="contact-page  flex">
          <form onSubmit={sendEmail} className="flex-1">
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

            <label
              onClick={(e) => {
                e.stopPropagation();
                document.querySelector(".contact-page form div.inp").click();
              }}
            >
              {language.contact && language.contact.contact_service}
            </label>
            <div
              data-input="services"
              data-index="0"
              onClick={activeDiv}
              className="select-services inp"
            >
              {form.services ||
                `${language.contact && language.contact.contact_service}`}
              <i className="fa-solid fa-chevron-down"></i>
              <div data-input="services">
                <p
                  onClick={selectServices}
                  data-services={
                    language.contact &&
                    language.contact.contact_services.mobile_application
                  }
                >
                  {language.contact &&
                    language.contact.contact_services.mobile_application}
                </p>
                <p
                  onClick={selectServices}
                  data-services={
                    language.contact &&
                    language.contact.contact_services.desktop_application
                  }
                >
                  {language.contact &&
                    language.contact.contact_services.desktop_application}
                </p>
                <p
                  onClick={selectServices}
                  data-services={
                    language.contact &&
                    language.contact.contact_services.websites
                  }
                >
                  {language.contact &&
                    language.contact.contact_services.websites}
                </p>
                <p
                  onClick={selectServices}
                  data-services={
                    language.contact &&
                    language.contact.contact_services.server_managment
                  }
                >
                  {language.contact &&
                    language.contact.contact_services.server_managment}
                </p>
                <p
                  onClick={selectServices}
                  data-services={
                    language.contact &&
                    language.contact.contact_services.local_network
                  }
                >
                  {language.contact &&
                    language.contact.contact_services.local_network}
                </p>
                <p
                  onClick={selectServices}
                  data-services={
                    language.contact &&
                    language.contact.contact_services.qualifying
                  }
                >
                  {language.contact &&
                    language.contact.contact_services.qualifying}
                </p>
                <p
                  onClick={selectServices}
                  data-services={
                    language.contact &&
                    language.contact.contact_services.warning_system
                  }
                >
                  {language.contact &&
                    language.contact.contact_services.warning_system}
                </p>
                <p
                  onClick={selectServices}
                  data-services={
                    language.contact &&
                    language.contact.contact_services.camera_system
                  }
                >
                  {language.contact &&
                    language.contact.contact_services.camera_system}
                </p>
                <p onClick={selectServices} data-services="SÎMURX ACADEMY">
                  SÎMURX Academy
                </p>
              </div>
            </div>

            {form.services === "SÎMURX ACADEMY" && (
              <label
                onClick={(e) => {
                  e.stopPropagation();
                  document
                    .querySelector(".contact-page form div.inp[data-index='1']")
                    .click();
                }}
              >
                {language.contact && language.contact.contact_select_course}
              </label>
            )}
            {form.services === "SÎMURX ACADEMY" && (
              <div
                data-input="cours"
                data-index="1"
                onClick={activeDiv}
                className="select-services inp"
              >
                {form.course
                  ? form.course
                  : language.contact && language.contact.contact_choose_course}
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
              placeholder={
                language.contact &&
                language.contact.contact_service_description_placeholder
              }
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
