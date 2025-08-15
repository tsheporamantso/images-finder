import { useContext } from "react";
import { AppContext } from "./AppContext";

export const useGlobalContext = () => useContext(AppContext);
