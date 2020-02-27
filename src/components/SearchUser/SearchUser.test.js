import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom"
import SearchUser from"./SearchUser";

describe(`SearchUser Component`, () => {
  it("renders without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <SearchUser />
      </BrowserRouter>
    
    , div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

