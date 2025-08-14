import React from "react";
import { GoSun } from "react-icons/go";
import { FaMoon } from "react-icons/fa";
import { useGlobalContext } from "../context/context";

const ThemeToggle = () => {
  const { toggleDarkTheme, isDarkTheme } = useGlobalContext();
  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={toggleDarkTheme}>
        {isDarkTheme ? (
          <GoSun className="toggle-icon" />
        ) : (
          <FaMoon className="toggle-icon" />
        )}
      </button>
    </section>
  );
};

export default ThemeToggle;
