import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import LoginPage from "./routes/LoginPage/LoginPage";
import RegistrationPage from "./routes/RegistrationPage/RegistrationPage";
import FeedPage from "./routes/FeedPage/FeedPage";
import NewFrenmoPage from "./routes/NewFrenmoPage/NewFrenmoPage";
import NavMenu from "./components/Header/NavMenu";
import PrivateRoute from "./components/Utils/PrivateRoute";
import PublicOnlyRoute from "./components/Utils/PublicOnlyRoute";

import "./App.css";
import FrenmoCategoryNavPage from "./routes/FrenmoCategoryNavPage/FrenmoCategoryNavPage";
import FrenmoListByCat from "./routes/FrenmoListByCat/FrenmoListByCat";
import EditFrenmoPage from "./routes/EditFrenmoPage/EditFrenmoPage";

class App extends Component {
  renderNavRoutes() {
    return (
      <div className="App__Nav-flex">
        <Route path={"/myfrenmos"} component={FrenmoCategoryNavPage} />
        <Route path={"/myfrenmos/:categoryId"} component={FrenmoListByCat} />
      </div>
    );
  }
  renderMainRoutes() {
    return (
      <div className="App">
        <main>
          <Switch>
            {/* <Route
              exact
              path={`/myfrenmos/:categoryId/detail/:frenmoId`}
              component={EditFrenmoPage}
            /> */}

            <Route
              exact
              path={`/myfrenmos/:categoryId/detail/:frenmoId`}
              render={props => <EditFrenmoPage {...props} />}
            />
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
        <div className="App">
          <NavMenu />
          {this.renderNavRoutes()}
          {this.renderMainRoutes()}
        </div>
      </>
    );
  }
}

export default App;
