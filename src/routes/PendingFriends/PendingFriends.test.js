import React from "react";
import ReactDOM from "react-dom";

import PendingFriends from"./PendingFriends";

describe(`PendingFriends Component`, () => {
  it("renders without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(<PendingFriends />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});