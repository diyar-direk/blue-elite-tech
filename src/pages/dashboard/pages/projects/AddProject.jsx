import React, { useContext, useState } from "react";
import "../../components/dashboard-form.css";
import Formloading from "../../../../components/Formloading";
import axios from "axios";
import { Context } from "../../../../context/Context";
import { useNavigate } from "react-router-dom";
const AddProject = () => {
  const context = useContext(Context);
  const language = context.language && context.language;
  const token = context.userDetails.token;
  const nav = useNavigate();
  const [headLine, setHeadline] = useState({
    arabic: "",
    english: "",
    kurdish: "",
  });
  const [summary, setSummary] = useState({
    arabic: "",
    english: "",
    kurdish: "",
  });
  const [image, setImage] = useState(false);
  const [errimage, setErrImage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [linkProject, setLinkProject] = useState("");
  function headlineFun(e) {
    setHeadline({ ...headLine, [e.target.name]: e.target.value });
  }

  function summaryFun(e) {
    setSummary({ ...summary, [e.target.name]: e.target.value });
  }
  async function submitData(e) {
    e.preventDefault();
    if (!image) setErrImage(true);
    if (image && headLine && summary) {
      try {
        setLoading(true);
        const formData = new FormData();

        formData.append("headline", JSON.stringify(headLine));
        formData.append("summary", JSON.stringify(summary));
        formData.append("photo", image);
        linkProject !== "" && formData.append("projectLink", linkProject);

        const data = await axios.post(
          "http://localhost:8000/api/projects",
          formData,
          { headers: { Authorization: "Bearer " + token } }
        );
        nav("/dashboard/projects");
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
  }
  return (
    <div className="main-dashboard">
      <div className="dashboard-container">
        <form onSubmit={submitData} className="dashboard-form relative">
          <h2> {language.add && language.add.add_new_project}</h2>
          {loading && <Formloading />}
          <div className="flex">
            <div>
              <label htmlFor="ku-headline">kurdish headline</label>
              <input
                onInput={headlineFun}
                value={headLine.kurdish}
                className="inp"
                name="kurdish"
                required
                type="text"
                id="ku-headline"
                placeholder="write a project headline"
              />
            </div>
            <div>
              <label htmlFor="en-headline">english headline</label>
              <input
                onInput={headlineFun}
                value={headLine.english}
                className="inp"
                name="english"
                required
                type="text"
                id="en-headline"
                placeholder="write a project headline"
              />
            </div>
            <div className="arabic">
              <label htmlFor="ar-headline">العنوان بالعربي</label>
              <input
                onInput={headlineFun}
                value={headLine.arabic}
                name="arabic"
                className="inp"
                required
                type="text"
                id="ar-headline"
                placeholder="اكتب عنوان للمشروع"
              />
            </div>
          </div>

          <div className="flex">
            <div>
              <label htmlFor="ku-description">kurdish description</label>
              <textarea
                className="inp"
                required
                rows={4}
                onInput={summaryFun}
                id="ku-description"
                placeholder="write a project description"
                value={summary.kurdish}
                name="kurdish"
              />
            </div>
            <div>
              <label htmlFor="en-description">english description</label>
              <textarea
                className="inp"
                rows={4}
                onInput={summaryFun}
                required
                id="en-description"
                placeholder="write a project description"
                value={summary.english}
                name="english"
              />
            </div>
            <div className="arabic">
              <label htmlFor="ar-description">الوصف بالعربي</label>
              <textarea
                name="arabic"
                className="inp"
                required
                onInput={summaryFun}
                rows={4}
                value={summary.arabic}
                id="ar-description"
                placeholder="اكتب وصف للمشروع"
              />
            </div>
          </div>
          <label htmlFor="link">
            {language.add && language.add.project_link}
          </label>
          <div className="relative center  no-wrap">
            <input
              type="text"
              placeholder={
                language.add && language.add.project_link_placeHolder
              }
              className="inp"
              onInput={(e) => setLinkProject(e.target.value)}
              value={linkProject}
            />
            <i className="fa-solid fa-link"></i>
          </div>
          <label className="w-100" htmlFor="file">
            <p className="lable">{language.add && language.add.add_photo}</p>
            <input
              className="inp"
              onInput={(e) => {
                setImage(e.target.files[0]);
                setErrImage(false);
              }}
              type="file"
              name=""
              id="file"
              accept="image/*"
            />
            <div className="inp center">
              {language.add && language.add.add_photo_placeHolder}
              <i className="fa-regular fa-images"></i>
            </div>
          </label>
          {errimage && (
            <p className="error-text">
              {language.error && language.error.error_image}
            </p>
          )}
          {image && (
            <div className="relative remove">
              <img
                src={URL.createObjectURL(image)}
                loading="lazy"
                alt="uploaded"
              />
              <i className="fa-solid fa-x" onClick={() => setImage(false)}></i>
            </div>
          )}
          <button className="btn2">
            {language.add && language.add.button_submit}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProject;
