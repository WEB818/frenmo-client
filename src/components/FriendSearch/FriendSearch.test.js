import React from "react";
import ReactDOM from "react-dom";

import FriendSearch from "./FriendSearch";

describe(`FriendSearch Component`, () => {
  it("renders without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(<FriendSearch />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});