import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

/* eslint-disable no-undef, react/jsx-filename-extension */
ReactDOM.render(<App />, document.getElementById("root"));
/* eslint-enable */
registerServiceWorker();
