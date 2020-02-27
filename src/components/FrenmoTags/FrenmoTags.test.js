import React from "react";
import ReactDOM from "react-dom";

import FrenmoTags from "./FrenmoTags";

describe(` FrenmoTags Component`, () => {
  it("renders without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(<FrenmoTags />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});