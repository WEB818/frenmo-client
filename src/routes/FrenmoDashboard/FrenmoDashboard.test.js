import React from "react";
import ReactDOM from "react-dom";
import {FrenmoProvider} from '../../contexts/FrenmoContext';
import FrenmoDashboard from"./FrenmoDashboard";
import {BrowserRouter} from "react-router-dom";

describe(`FrenmoDashboard Component`, () => {
  it.only("renders without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(<BrowserRouter> <FrenmoProvider> <FrenmoDashboard /> </FrenmoProvider></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});