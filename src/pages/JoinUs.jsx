import React, { useContext, useState } from "react";
import "./contact.css";
import { Context } from "../context/Context";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import Formloading from "../components/Formloading";

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
  const [capVal, setCapVal] = useState(null);
  const [loading, setLoading] = useState(false);

  function handelFormChange(e) {
    setForm({ ...form, [e.target.id]: e.target.value });
  }

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!file) setFileErr(true);
    if (form.name && form.phone && form.email && form.message && file) {
      setLoading(true);
      try {
        const formData = new FormData();
        formData.append("from", form.email);
        formData.append("file", file);
        const body = `
        name:${form.name}
        phone number :${form.phone}
       message :${form.message}
        `;
        formData.append("body", body);

        await axios.post("http://localhost:8000/api/email/send", formData);
        window.location.reload();
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
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
        <div className="flex contact-page join_page relative">
          {loading && <Formloading />}

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
                accept=".pdf,.doc,.docx"
                onInput={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const isValid = [
                      "application/pdf",
                      "application/msword",
                      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                    ].includes(file.type);
                    if (isValid) {
                      setFile(file);
                      setFileErr(false);
                    } else {
                      setFileErr(true);
                    }
                  }
                }}
                type="file"
                name="file"
                id="file"
              />
              <i className="fa-solid fa-folder-plus"></i>
            </label>
            {file && (
              <p>
                {language.join_us && language.join_us.uploaded_file} {file.name}{" "}
              </p>
            )}
            {fileErr && <p className="error-text">please upload your cv </p>}

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
            <div className="captcha">
              <ReCAPTCHA
                sitekey="6LfsV1IqAAAAAAP-iBfDY9whknwmO36oUgThTvc5"
                onChange={(val) => setCapVal(val)}
              />
            </div>
            <button disabled={!capVal} className="btn2">
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
