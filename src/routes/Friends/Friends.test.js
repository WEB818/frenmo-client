import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import Friends from "./Friends";

describe(`PendingFren Component`, () => {
  it("renders without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <Friends />
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});