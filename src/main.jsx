import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { BasketProvider } from "./context/BasketContext.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/react-pizza-v2">
      <BasketProvider>
        <App />
      </BasketProvider>
    </BrowserRouter>
  </StrictMode>,
);
