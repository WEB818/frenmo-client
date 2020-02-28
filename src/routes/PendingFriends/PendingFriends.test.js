import React from "react";
import ReactDOM from "react-dom";

import PendingFriends from"./PendingFriends";

describe(`PendingFriends Component`, () => {
  it("renders without errors", () => {
    const pending = {id: 1}
    const div = document.createElement("div");
    ReactDOM.render(<PendingFriends  pending={pending} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});