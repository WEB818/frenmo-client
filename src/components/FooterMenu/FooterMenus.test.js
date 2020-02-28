import React from "react";
import ReactDOM from "react-dom";

import FooterMenu from "./FooterMenu";

describe(` FooterMenu Component`, () => {
  it("renders without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(< FooterMenu />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});