import React from "react";
import ReactDOM from "react-dom";

import FriendsList from "./FriendsList";

describe(`FriendsList Component`, () => {
  it("renders without errors", () => {
    const friend = {id: 1}
    const div = document.createElement("div");
    ReactDOM.render(<FriendsList friend={friend} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});