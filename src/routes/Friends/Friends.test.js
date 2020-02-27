import React from "react";
import ReactDOM from "react-dom";

import Friends from"./Friends";

describe(`Friends Component`, () => {
  it("renders without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Friends />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});