import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CardListProvider } from "./context/cards.context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CardListProvider>
        <App />
      </CardListProvider>
    </BrowserRouter>
  </React.StrictMode>
);
