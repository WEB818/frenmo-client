import React from "react";
import ReactDOM from "react-dom";

import FriendsList from "./FriendsList";

describe(`FriendsList Component`, () => {
  it("renders without errors", () => {
    const frens = {id: 1}
    const div = document.createElement("div");
    ReactDOM.render(<FriendsList frens={frens} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});