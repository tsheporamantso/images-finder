import React from "react";
import { useGlobalContext } from "../context/context";

const ThemeToggle = () => {
  const { greetings } = useGlobalContext();
  console.log(greetings);
  return <div>ThemeToggle</div>;
};

export default ThemeToggle;
