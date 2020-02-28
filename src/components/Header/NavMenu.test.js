import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom"
import NavMenu from "./NavMenu";

describe(`NavMenu Component`, () => {
  it("renders without errors", () => {
    const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <NavMenu />
    </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});