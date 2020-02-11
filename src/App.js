import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import LoginPage from "./routes/LoginPage/LoginPage";
import RegistrationPage from "./routes/RegistrationPage/RegistrationPage";
import LandingPage from "./routes/LandingPage/LandingPage";
import FeedPage from "./routes/FeedPage/FeedPage";
import NewCouponPage from "./routes/NewCouponPage/NewCouponPage";

import "./App.css";

class App extends Component {
  renderNavRoutes() {
    return <div className="nav-flex">nav here</div>;
  }
  renderMainRoutes() {}
  render() {
    return (
      <div className="App">
        {this.renderNavRoutes()}
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path={"/login"} component={LoginPage} />
          <Route path={"/register"} component={RegistrationPage} />
          <Route path={"/feed"} component={FeedPage} />
          <Route path={"/send"} component={NewCouponPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
