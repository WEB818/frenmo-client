import React from "react";
import ReactDOM from "react-dom";

import EditFrenmoForm from "./EditFrenmoForm";

describe(` EditFrenmoForm Component`, () => {
  it("renders without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(< EditFrenmoForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});