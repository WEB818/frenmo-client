import React from "react";
import ReactDOM from "react-dom";

import FriendsList from "./FriendsList";

describe(`FriendsList Component`, () => {
  it("renders without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(<FriendsList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});