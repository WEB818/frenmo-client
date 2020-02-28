import React from "react";
import ReactDOM from "react-dom";

import FrenmoCategoryNavPage from"./FrenmoCategoryNavPage";

describe(`FrenmoCategoryPage Component`, () => {
  it("renders without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(<FrenmoCategoryNavPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});