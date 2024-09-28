import React, { useState } from "react";
import "../components/dashboard-form.css";
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
  function headlineFun(e) {
    setHeadline({ ...headLine, [e.target.name]: e.target.value });
  }

  function summaryFun(e) {
    setSummary({ ...summary, [e.target.name]: e.target.value });
  }
  return (
    <div className="main-dashboard">
      <div className="dashboard-container">
        <form className="dashboard-form">
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
          <input
            type="text"
            placeholder="add a link for this project "
            className="inp"
          />
          <label className="w-100" htmlFor="file">
            <p className="lable"> add photo </p>
            <input className="inp" type="file" name="" id="file" />
            <div className="inp center">
              choose img <i className="fa-regular fa-images"></i>
            </div>
          </label>
          <button className="btn2"> submit </button>
        </form>
      </div>
    </div>
  );
};

export default AddProject;
