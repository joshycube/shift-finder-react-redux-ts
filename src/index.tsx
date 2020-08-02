import React from "react";
import { Provider } from "react-redux";

import ReactDOM from "react-dom";

import store from "./store";
import Routes from "./routes";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
