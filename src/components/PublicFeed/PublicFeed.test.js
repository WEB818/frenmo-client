import React from "react";
import ReactDOM from "react-dom";

import PublicFeed from "./PublicFeed";

describe(`PublicFeed Component`, () => {
  it("renders without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(<PublicFeed />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});