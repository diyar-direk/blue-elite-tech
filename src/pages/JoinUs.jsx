import React, { useContext, useState } from "react";
import "./contact.css";
import { Context } from "../context/Context";
import axios from "axios";

const JoinUs = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [file, setFile] = useState(null);
  const [fileErr, setFileErr] = useState(false);
  const context = useContext(Context);
  const language = context.language && context.language;

  function handelFormChange(e) {
    setForm({ ...form, [e.target.id]: e.target.value });
  }

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!file) setFileErr(true);
    if (form.name && form.phone && form.email && form.message && file) {
      try {
        const formData = new FormData();
        formData.append("name", form.name);
        formData.append("phone", form.phone);
        formData.append("email", form.email);
        formData.append("file", file);
        formData.append("message", form.message);
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <main className="center  sub-page section-color">
      <div className="container">
        <div className="title">
          <h1
            className="title section-color"
            data-fill={language.join_us && language.join_us.join_us_header}
          >
            {language.join_us && language.join_us.join_us_header}
          </h1>
        </div>
        <div className="flex contact-page join_page">
          <form onSubmit={sendEmail} className="flex-1">
            <h2> {language.join_us && language.join_us.join_us_text}</h2>
            <label htmlFor="name">
              {language.join_us && language.join_us.full_name_input}
            </label>
            <input
              required
              className="inp"
              type="text"
              id="name"
              placeholder={
                language.join_us && language.join_us.full_name_placeHolder
              }
              value={form.name}
              onInput={handelFormChange}
            />

            <label htmlFor="phone">
              {language.join_us && language.join_us.phone_input}
            </label>
            <input
              required
              value={form.phone}
              onInput={handelFormChange}
              className="inp"
              type="text"
              id="phone"
              placeholder={
                language.join_us && language.join_us.phone_placeHolder
              }
            />

            <label htmlFor="email">
              {language.join_us && language.join_us.email_input}
            </label>
            <input
              required
              value={form.email}
              onInput={handelFormChange}
              className="inp"
              type="email"
              id="email"
              placeholder={
                language.join_us && language.join_us.email_placeHolder
              }
            />

            <label htmlFor="file">
              {language.join_us && language.join_us.show_us_input}
            </label>
            <label className="inp file">
              {language.join_us && language.join_us.uplaod_your_cv_placeHolder}
              <input
                accept=".pdf, .doc, .docx"
                onInput={(e) => {
                  setFile(e.target.files[0]);
                  setFileErr(false);
                }}
                type="file"
                name="file"
                id="file"
              />
              <i className="fa-solid fa-folder-plus"></i>
            </label>
            {file && <p>uploded file: {file.name} </p>}
            {fileErr && <p className="error-text">uplaod file to send </p>}

            <label htmlFor="message">
              {language.join_us && language.join_us.service_description}
            </label>
            <textarea
              value={form.message}
              onInput={handelFormChange}
              rows={7}
              placeholder={
                language.join_us &&
                language.join_us.service_description_placeHolder
              }
              id="message"
              className="inp"
              required
              name="message"
            />
            <button className="btn2">
              {language.join_us && language.join_us.button_submit}
            </button>
          </form>
          <div className="image center flex-1">
            <img
              loading="lazy"
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
