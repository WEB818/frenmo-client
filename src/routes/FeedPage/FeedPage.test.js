import React from "react";
import ReactDOM from "react-dom";

import FeedPage from"./FeedPage";

describe(`FeedPage Component`, () => {
  it("renders without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(<FeedPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});