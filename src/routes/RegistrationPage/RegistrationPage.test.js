import React from "react";
import ReactDOM from "react-dom";

import RegistrationPage from"./RegistrationPage";

describe(`RegistrationPage Component`, () => {
  it("renders without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(<RegistrationPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});