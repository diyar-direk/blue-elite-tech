import React, { createContext, useEffect, useState } from "react";
export const Context = createContext({});
const PageContext = ({ children }) => {
  const [theme, setTheme] = useState(+localStorage.getItem("theme") || 0);

  useEffect(() => {
    darkMode();
  }, [theme]);

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
  return (
    <Context.Provider value={{ theme, setTheme }}>{children}</Context.Provider>
  );
};

export default PageContext;
