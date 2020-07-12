import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import FeedPage from "./FeedPage";

describe(`FeedPage Component`, () => {
  it("renders without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <FeedPage />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
