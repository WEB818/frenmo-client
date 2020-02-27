import React from "react";
import ReactDOM from "react-dom";

import FrenmoDetail from "./FrenmoDetail";

describe(` FrenmoDetail Component`, () => {
  it("renders without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(< FrenmoDetail />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});