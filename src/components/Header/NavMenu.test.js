import React from "react";
import ReactDOM from "react-dom";

import NavMenu from "./NavMenu";

describe(`NavMenu Component`, () => {
  it("renders without errors", () => {
    const div = document.createElement("div");
  ReactDOM.render(<NavMenu />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});