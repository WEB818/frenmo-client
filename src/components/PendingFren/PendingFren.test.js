import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import PendingFren from "./PendingFren";

describe(`PendingFren Component`, () => {
  it("renders without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <PendingFren />
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});