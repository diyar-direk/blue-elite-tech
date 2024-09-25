import React, { useState } from "react";
import "./contact.css";
import MapComponent from "../components/MapComponent";
import ContactComponenet from "../components/ContactComponenet";
const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    services: "Desktop Application",
    message: "",
  });
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
  return (
    <main className="center">
      <div className="container">
        <div className="title">
          <h1 className="title body-color" data-fill="contact us">
            Contact Us
          </h1>
        </div>
        <div className="contact-page flex">
          <form className="flex-1">
            <label htmlFor="name">full name</label>
            <input
              required
              className="inp"
              type="text"
              id="name"
              placeholder="please enter full name"
              value={form.name}
              onInput={handelFormChange}
            />

            <label htmlFor="phone"> phone</label>
            <input
              required
              value={form.phone}
              onInput={handelFormChange}
              className="inp"
              type="text"
              id="phone"
              placeholder="please enter phone number"
            />

            <label htmlFor="email"> email</label>
            <input
              required
              value={form.email}
              onInput={handelFormChange}
              className="inp"
              type="email"
              id="email"
              placeholder="please enter email"
            />

            <label>Choose a Service </label>
            <div
              data-input="services"
              onClick={activeDiv}
              className="select-services inp"
            >
              {form.services} <i className="fa-solid fa-chevron-down"></i>
              <div data-input="services">
                <p onClick={selectServices} data-services="mobile Application">
                  mobile Application
                </p>
                <p
                  onClick={selectServices}
                  data-services=" Desktop Application"
                >
                  Desktop Application
                </p>
                <p onClick={selectServices} data-services="Websites">
                  Websites
                </p>
                <p onClick={selectServices} data-services="Server Managemen">
                  Server Management
                </p>
                <p
                  onClick={selectServices}
                  data-services="Local Networks services"
                >
                  Local Networks services
                </p>
                <p onClick={selectServices} data-services="Qualifying services">
                  Qualifying services
                </p>
                <p
                  onClick={selectServices}
                  data-services="Warning System services"
                >
                  Warning System services
                </p>
                <p
                  onClick={selectServices}
                  data-services="Camera System services"
                >
                  Camera System services
                </p>
                <p onClick={selectServices} data-services="SÎMURX Academy">
                  SÎMURX Academy
                </p>
              </div>
            </div>

            {form.services === "SÎMURX Academy" && (
              <label>Choose a cours you need</label>
            )}
            {form.services === "SÎMURX Academy" && (
              <div
                data-input="cours"
                onClick={activeDiv}
                className="select-services inp"
              >
                {form.cours ? form.cours : "select cours"}
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

            <label htmlFor="message">Service Description</label>
            <textarea
              value={form.message}
              onInput={handelFormChange}
              rows={7}
              placeholder="writ your message"
              id="message"
              className="inp"
              required
            />
            <button className="btn2"> submit </button>
          </form>
          <ContactComponenet>
            <ContactComponenet.Form>
              <ContactComponenet.Info location="blue tech"></ContactComponenet.Info>
              <MapComponent location="blue tech" />
            </ContactComponenet.Form>
          </ContactComponenet>
        </div>
      </div>
    </main>
  );
};

export default Contact;