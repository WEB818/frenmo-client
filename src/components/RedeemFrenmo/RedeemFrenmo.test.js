import React from "react";
import ReactDOM from "react-dom";

import RedeemFrenmo from "./RedeemFrenmo";

describe(`RedeemFrenmo Component`, () => {
  it("renders without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(<RedeemFrenmomo />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});