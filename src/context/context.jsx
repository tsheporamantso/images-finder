import { createContext, useContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const greetings = "Hello world";
  return (
    <AppContext.Provider value={{ greetings }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
