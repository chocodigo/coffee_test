import React from "react";
import ReactDOM from "react-dom/client";
import "./reset.css";
import "./styles/setting.css";
import App from "./App";
import CapplStore from "./stores/cappl";
import { Provider } from "mobx-react";
import "dotenv/config";

const root = ReactDOM.createRoot(document.getElementById("root"));

const cappl = new CapplStore();

root.render(
  <Provider capplStore={cappl}>
    <App />
  </Provider>
);
