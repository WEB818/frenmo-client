import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import LoginPage from "./routes/LoginPage/LoginPage";
import RegistrationPage from "./routes/RegistrationPage/RegistrationPage";
import LandingPage from "./routes/LandingPage/LandingPage";
import FeedPage from "./routes/FeedPage/FeedPage";
import NewFrenmoPage from "./routes/NewFrenmoPage/NewFrenmoPage";
import NavMenu from "./components/Header/NavMenu";
import Header from "./components/Header/Header";
import PrivateRoute from "./components/Utils/PrivateRoute";
import PublicOnlyRoute from "./components/Utils/PublicOnlyRoute";

import "./Styles/App.css";

class App extends Component {
  renderNavRoutes() {
    return (
      <div className="nav-flex">
        <NavMenu />
      </div>
    );
  }
  renderMainRoutes() {
    return (
      <div className="App">
        <main>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <PublicOnlyRoute exact path={"/login"} component={LoginPage} />
            <PublicOnlyRoute
              exact
              path={"/register"}
              component={RegistrationPage}
            />
            <PublicOnlyRoute path={"/feed"} component={FeedPage} />
            <PublicOnlyRoute exact path={"/send"} component={NewFrenmoPage} />
          </Switch>
        </main>
      </div>
    );
  }
  render() {
    return (
      <>
        {this.renderNavRoutes()}
        {this.renderMainRoutes()}
      </>
    );
  }
}

export default App;
