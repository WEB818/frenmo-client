import React from "react";
import ReactDOM from "react-dom";

import NewFrenmoForm from "./NewFrenmoForm";

describe(`NewFrenmoForm Component`, () => {
  it("renders without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(<NewFrenmoForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});