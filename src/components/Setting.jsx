import React, { useContext } from "react";
import "./setting.css";
import { Context } from "../context/Context";

const Setting = () => {
  const context = useContext(Context);

  function darkMode(e) {
    e.target.classList.toggle("dark");
    e.target.classList.contains("dark")
      ? context.setTheme(1)
      : context.setTheme(0);
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
