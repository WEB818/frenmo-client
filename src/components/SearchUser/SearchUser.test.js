import React from "react";
import ReactDOM from "react-dom";

import SearchUser from"./SearchUser";

describe(`SearchUser Component`, () => {
  it("renders without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(<SearchUser />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});