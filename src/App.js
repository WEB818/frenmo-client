import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import LoginPage from "./routes/LoginPage/LoginPage";
import RegistrationPage from "./routes/RegistrationPage/RegistrationPage";
import FeedPage from "./routes/FeedPage/FeedPage";
import NewFrenmoPage from "./routes/NewFrenmoPage/NewFrenmoPage";
import NavMenu from "./components/Header/NavMenu";
import PrivateRoute from "./components/Utils/PrivateRoute";
import PublicOnlyRoute from "./components/Utils/PublicOnlyRoute";
import FooterMenu from "./components/FooterMenu/FooterMenu";
import "./App.css";
import FrenmoCategoryNavPage from "./routes/FrenmoCategoryNavPage/FrenmoCategoryNavPage";
import FrenmoListByCat from "./routes/FrenmoListByCat/FrenmoListByCat";
import EditFrenmoPage from "./routes/EditFrenmoPage/EditFrenmoPage";
import FriendsList from "./components/FriendsList/FriendsList";
import FrenmoDashboard from "./routes/FrenmoDashboard/FrenmoDashboard";

class App extends Component {
  state = { hasError: false };

  renderNavRoutes() {
    return (
      <>
        <div className="Nav-flex">
          {/* <Route path={"/frenmos/:categoryId"} component={FrenmoListByCat} /> */}
          <Route path={"/frenmos/:favorId"} component={FrenmoCategoryNavPage} />
        </div>
      </>
    );
  }

  renderMainRoutes() {
    return (
      <>
        <Switch>
          <PublicOnlyRoute exact path={"/login"} component={LoginPage} />

          <PublicOnlyRoute
            exact
            path={"/register"}
            component={RegistrationPage}
          />

          <PublicOnlyRoute exact path={"/friends"} component={FriendsList} />

          <Route path={"/feed"} component={FeedPage} />

          <PrivateRoute exact path={"/send"} component={NewFrenmoPage} />
          <PrivateRoute exact path={`/frenmos`} component={FrenmoDashboard} />

          <PrivateRoute
            exact
            path={`/frenmos/:frenmoId`}
            component={EditFrenmoPage}
          />
          {/* <PrivateRoute
            exact
            path={`/frenmos/:categoryId/detail/:frenmoId`}
            component={EditFrenmoPage}
          /> */}
        </Switch>
      </>
    );
  }

  render() {
    return (
      <div className="App">
        <NavMenu />
        <main className="App__container wrapper">
          {this.state.hasError && (
            <p className="red">Something went wrong. Please try again later.</p>
          )}

          <div className="Nav-flex">
            <nav className="App__nav">{this.renderNavRoutes()}</nav>
          </div>
          <section className="App__main wrapper">
            {this.renderMainRoutes()}
          </section>
        </main>
        <footer id="footer">
          <FooterMenu />
        </footer>
      </div>
    );
  }
}

export default App;
