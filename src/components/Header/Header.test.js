import React from "react";
import ReactDOM from "react-dom";

import Header from "./Header";

describe(`Header Component`, () => {
  const location={pathname: "/slice"}
  it("renders without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Header location={location} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});