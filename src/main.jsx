import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AppProvider } from "./context/context";
import "react-toastify/dist/ReactToastify.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { StrictMode } from "react";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </AppProvider>
  </StrictMode>
);
