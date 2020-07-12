import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import FriendsList from "./FriendsList";

describe(`FriendsList Component`, () => {
  it("renders without errors", () => {
    const friend = { id: 1 };
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <FriendsList friend={friend} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
