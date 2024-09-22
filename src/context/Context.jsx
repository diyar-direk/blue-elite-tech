import React, { createContext, useEffect, useState } from "react";
export const Context = createContext({});
const PageContext = ({ children }) => {
  const [theme, setTheme] = useState(+localStorage.getItem("theme") || 0);
  const [selectedLang, setSelectedLang] = useState(
    localStorage.getItem("language") || "english"
  );

  useEffect(() => {
    darkMode();
  }, [theme]);

  useEffect(() => {
    selectLang();
  }, [selectedLang]);

  function darkMode() {
    const toggleDiv = document.querySelector(".setting .mode div");
    if (theme) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", 1);
      toggleDiv && toggleDiv.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", 0);
    }
  }

  function selectLang() {
    localStorage.setItem("language", selectedLang);
    const lang = document.querySelector(".setting .language .select p.active");
    const allSpan = document.querySelectorAll(
      ".setting .language .center span"
    );
    allSpan.forEach((e) => (e.textContent = lang.textContent));
  }

  return (
    <Context.Provider
      value={{ theme, setTheme, selectedLang, setSelectedLang }}
    >
      {children}
    </Context.Provider>
  );
};

export default PageContext;
