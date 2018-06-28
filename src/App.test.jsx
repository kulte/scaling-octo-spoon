import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("renders without crashing", () => {
  /* eslint-disable no-undef */
  const div = document.createElement("div");
  /* eslint-enable */
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
