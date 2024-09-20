import React from "react";
import "./setting.css";

const Setting = () => {
  function darkMode(e) {
    e.target.classList.toggle("dark");
    document.body.classList.toggle("dark");
  }
  function openLangDiv(e) {
    document
      .querySelector("div.setting article.select")
      .classList.toggle("active");
  }
  return (
    <div className="setting flex">
      <div className="language flex-1 relative">
        <p>language:</p>
        <div className="center" onClick={openLangDiv}>
          <i className="fa-solid fa-globe"></i>
          <span>english</span>
          <i className="fa-solid fa-chevron-down"></i>
        </div>

        <article className="select">
          <p>عربي</p>
          <p>English</p>
        </article>
      </div>
      <div className="mode">
        <p>mode:</p>
        <div onClick={darkMode}></div>
      </div>
    </div>
  );
};

export default Setting;
