import React from "react";
import ReactDOM from "react-dom";

import EditFrenmoPage from"./EditFrenmoPage";

describe(`EditFrenmoPage Component`, () => {
  it("renders without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(<EditFrenmoPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});