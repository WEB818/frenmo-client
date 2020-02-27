import React from "react";
import ReactDOM from "react-dom";

import PendingFren from "./PendingFren";

describe(`PendingFren Component`, () => {
  it("renders without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(<PendingFren />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});