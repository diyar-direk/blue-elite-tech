import React, { useContext } from "react";
import "./setting.css";
import { Context } from "../context/Context";
import Loader from "./Loader";

const Setting = (props) => {
  const context = useContext(Context);
  const language = context.language;

  function darkMode(e) {
    e.target.classList.toggle("dark");
    e.target.classList.contains("dark")
      ? context.setTheme(1)
      : context.setTheme(0);
  }
  function openLangDiv(e) {
    e.stopPropagation();
    document
      .querySelector(
        `div.setting article.select[data-position="${e.target.dataset.position}"]`
      )
      .classList.toggle("active");
  }
  function selectLanguage(e) {
    context.setSelectedLang(e.target.dataset.lang);
    const langDiv = document.querySelector(".setting .language .select.active");
    langDiv && langDiv.classList.remove("active");
  }
  if (!context) {
    <Loader />;
  }
  document.addEventListener("click", () => {
    const langDiv = document.querySelector(".setting .language .select.active");
    langDiv && langDiv.classList.remove("active");
  });
  return (
    <div className="setting flex">
      <div className="language flex-1 relative">
        {props.title && <p>{language.links && language.links.language}</p>}
        <div
          data-position={props.position}
          className="center"
          onClick={openLangDiv}
        >
          <i className="fa-solid fa-globe"></i>
          <span>english</span>
          <i className="fa-solid fa-chevron-down"></i>
        </div>

        <article data-position={props.position} className="select">
          <p
            onClick={selectLanguage}
            data-lang="arabic"
            className={context.selectedLang === "arabic" ? "active" : undefined}
          >
            عربي
          </p>
          <p
            onClick={selectLanguage}
            data-lang="kurdish"
            className={
              context.selectedLang === "kurdish" ? "active" : undefined
            }
          >
            kurdi
          </p>
          <p
            onClick={selectLanguage}
            className={
              context.selectedLang === "english" ? "active" : undefined
            }
            data-lang="english"
          >
            English
          </p>
        </article>
      </div>
      {props.mode && (
        <div className="mode">
          {props.title && <p>{language.links && language.links.theme}</p>}
          <div onClick={darkMode}></div>
        </div>
      )}
    </div>
  );
};

export default Setting;
