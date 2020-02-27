import React from "react";
import ReactDOM from "react-dom";

import NewFrenmoPage from"./NewFrenmoPage";

describe(`NewFrenmoPage Component`, () => {
  it("renders without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(<NewFrenmoPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});