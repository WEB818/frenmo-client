import React from "react";
import ReactDOM from "react-dom";

import IssueFrenmo from "./IssueFrenmo";

describe(`IssueFrenmo Component`, () => {
  it("renders without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(<IssueFrenmo />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});