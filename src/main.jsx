import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { HashRouter } from 'react-router-dom';
import { FavoritesProvider } from "./context/FavoritesContext.jsx";
import { BasketProvider } from "./context/BasketContext.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter basename="/drift-map">
      <FavoritesProvider>
        <App />
      </FavoritesProvider>
    </HashRouter>
  </StrictMode>,
);
