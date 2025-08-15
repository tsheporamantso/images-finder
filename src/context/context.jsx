import { useState, useEffect } from "react";
import { AppContext } from "./AppContext";

const getInitialDarkMode = () => {
  const storedDarkMode = localStorage.getItem("darkTheme");
  if (storedDarkMode !== null) {
    return storedDarkMode === "true";
  }
  const prefersDarkTheme = window.matchMedia(
    "(prefers-color-scheme:dark)"
  ).matches;
  return prefersDarkTheme;
};

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());
  const [searchTerm, setSearchTerm] = useState("flowers");

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    localStorage.setItem("darkTheme", newDarkTheme);
  };

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [isDarkTheme]);

  return (
    <AppContext.Provider
      value={{ toggleDarkTheme, isDarkTheme, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};
