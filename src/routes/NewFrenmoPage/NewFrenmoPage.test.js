import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import NewFrenmoPage from "./NewFrenmoPage";

describe(`NewFrenmoPage Component`, () => {
  it("renders without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <NewFrenmoPage />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
