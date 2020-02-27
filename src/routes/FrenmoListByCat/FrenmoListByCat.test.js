import React from "react";
import ReactDOM from "react-dom";

import FrenmoListByCat from"./FrenmoListByCat";

describe(`FrenmoListCat Component`, () => {
  it("renders without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(<FrenmoListByCat />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});