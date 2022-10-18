import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/styles/index.scss";
import { ApiContext } from "./context/ApiContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApiContext.Provider value="https://restapi.fr/api/lnrecipes">
      <App />
    </ApiContext.Provider>
  </React.StrictMode>
);
