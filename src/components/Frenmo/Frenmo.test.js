import React from "react";
import ReactDOM from "react-dom";

import Frenmo from "./Frenmo";

describe(` Frenmo Component`, () => {
  it("renders without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(< Frenmo />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});