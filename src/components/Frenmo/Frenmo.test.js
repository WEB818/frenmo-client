import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import Frenmo from "./Frenmo";

describe(` Frenmo Component`, () => {
  it("renders without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <Frenmo />
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});