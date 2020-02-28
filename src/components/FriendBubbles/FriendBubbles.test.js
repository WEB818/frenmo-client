import React from "react";
import ReactDOM from "react-dom";

import FriendBubbles from "./FriendBubbles";

describe(` FriendBubbles Component`, () => {
  it("renders without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(<FriendBubbles />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});