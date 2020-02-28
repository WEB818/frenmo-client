import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import PendingFriends from"./PendingFriends";

describe(`PendingFriends Component`, () => {
  it("renders without errors", () => {
    const pending = {id: 1}
    const div = document.createElement("div");
    ReactDOM.render(<BrowserRouter> <PendingFriends  pending={pending} /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});