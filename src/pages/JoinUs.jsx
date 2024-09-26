import React, { useState } from "react";
import "./contact.css";

const JoinUs = () => {
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

  return (
    <main className="center section-color">
      <div className="container">
        <div className="title">
          <h1 className="title section-color" data-fill="join us">
            Join Us
          </h1>
        </div>
        <div className="flex contact-page join_page">
          <form className="flex-1">
            <h2>Join us right now!</h2>
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

            <label htmlFor="file">Show us your skills </label>
            <label className="inp file">
              uplod your CV <input type="file" required name="file" id="file" />
              <i className="fa-solid fa-folder-plus"></i>
            </label>

            <label htmlFor="message">Service Description</label>
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
            <button className="btn2"> submit </button>
          </form>
          <div className="image center flex-1">
            <img
              src={require("./undraw_Engineering_team_a7n2__2_-removebg-preview.png")}
              alt=""
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default JoinUs;
