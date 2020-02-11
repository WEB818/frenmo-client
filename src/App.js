import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import LoginPage from "./routes/LoginPage/LoginPage";
import RegistrationPage from "./routes/RegistrationPage/RegistrationPage";
import LandingPage from "./routes/LandingPage/LandingPage";
import FeedPage from "./routes/FeedPage/FeedPage";
import NewFrenmoPage from "./routes/NewFrenmoPage/NewFrenmoPage";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path={"/login"} component={LoginPage} />
          <Route path={"/register"} component={RegistrationPage} />
          <Route path={"/feed"} component={FeedPage} />
          <Route path={"/send"} component={NewFrenmoPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
