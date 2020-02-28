import React from "react";
import ReactDOM from "react-dom";

import Footer from "./Footer";

describe(` Footer Component`, () => {
  it("renders without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(< Footer />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});