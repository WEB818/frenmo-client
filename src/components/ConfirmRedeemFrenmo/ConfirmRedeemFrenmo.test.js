import React from "react";
import ReactDOM from "react-dom";

import ConfirmRedeemFrenmo from "./ConfirmRedeemFrenmo";

describe(` ConfirmRedeemFrenmo Component`, () => {
  it("renders without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(< ConfirmRedeemFrenmo />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});