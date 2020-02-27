import React from "react";
import ReactDOM from "react-dom";

import FrenmoDashboard from"./FrenmoDashboard";

describe(`FrenmoDashboard Component`, () => {
  it("renders without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(<FrenmoDashboard />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});