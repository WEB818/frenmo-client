import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import LoginForm from "./LoginForm";

describe(` LoginForm Component`, () => {
  it("renders without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});