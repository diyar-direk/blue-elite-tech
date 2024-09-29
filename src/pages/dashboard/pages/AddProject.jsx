import React, { useState } from "react";
import "../components/dashboard-form.css";
import Formloading from "../../../components/Formloading";
const AddProject = () => {
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
  const [linkProject, setLinkProject] = useState("");
  const [image, setImage] = useState(false);
  const [errimage, setErrImage] = useState(false);
  const [loading, setLoading] = useState(false);
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
        const formData = new FormData();
        formData.append("headline", headLine);
        formData.append("summary", summary);
        linkProject && formData.append("projectLink", linkProject);
        formData.append("image", image);
      } catch (err) {
        console.log(err);
      }
    }
  }
  return (
    <div className="main-dashboard">
      <div className="dashboard-container">
        <form onClick={submitData} className="dashboard-form relative">
          {loading && <Formloading />}
          <h2>add new project</h2>

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
          <label htmlFor="link"> project link</label>
          <div className="relative center  no-wrap">
            <input
              type="text"
              placeholder="add a link for this project "
              className="inp"
              onInput={(e) => setLinkProject(e.target.value)}
              value={linkProject}
            />
            <i className="fa-solid fa-link"></i>
          </div>

          <label className="w-100" htmlFor="file">
            <p className="lable"> add photo </p>
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
              choose img <i className="fa-regular fa-images"></i>
            </div>
          </label>
          {errimage && <p className="error-text"> uploade image to set </p>}
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

          <button className="btn2"> submit </button>
        </form>
      </div>
    </div>
  );
};

export default AddProject;
