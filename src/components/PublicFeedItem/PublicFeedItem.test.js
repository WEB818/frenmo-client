import React from "react";
import ReactDOM from "react-dom";

import PublicFeedItem from "./PublicFeedItem";

describe(`PublicFeedItem Component`, () => {
  it("renders without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(<PublicFeedItem />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});