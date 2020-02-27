import React from "react";
import ReactDOM from "react-dom";

import LandingPage from"./LoginPage";

describe(`LoginPage Component`, () => {
  it("renders without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(<LoginPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});