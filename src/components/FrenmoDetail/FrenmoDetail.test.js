import React from "react";
import ReactDOM from "react-dom";

import FrenmoDetail from "./FrenmoDetail";

describe(` FrenmoDetail Component`, () => {
  it("renders without errors", () => {
    const state={
      title:"testing",
      description:"stuff",
      expiration_date:Date.now(),
      publicity:"public",
      issuer_name:"test1",
      receiver_name:"test2",
      receiver_id:2,
      receiver_username:"test_2",
      receiver_redeemed:false,
      issued:Date.now(),
      expired:Date.now(),
      received:Date.now()
  }
    const location={state: state}
    const div = document.createElement("div");
    ReactDOM.render(< FrenmoDetail location={location} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});