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
import FrenmoCategoryNavPage from "./routes/FrenmoCategoryNavPage/FrenmoCategoryNavPage";
import FrenmoListByCat from "./routes/FrenmoListByCat/FrenmoListByCat";
import EditFrenmoPage from "./routes/EditFrenmoPage/EditFrenmoPage";
import Friends from './routes/Friends/Friends'
import PendingFren from './components/PendingFren/PendingFren'
import FrenmoDashboard from "./routes/FrenmoDashboard/FrenmoDashboard";
import "./App.css";
import FrenmoDetail from "./components/FrenmoDetail/FrenmoDetail";

class App extends Component {
  state = { hasError: false };

  renderNavRoutes() {
    return (
      <>
        <div className="Nav-flex">
          <Route
            path={"/frenmos/category/:categoryId"}
            component={FrenmoListByCat}
            name="frenmoByCat"
          />

          {/* ============ OBSOLETE NAV PAGE================= 
          <Route
            exact
            path={"/frenmos/:favorId"}
            component={FrenmoCategoryNavPage}
          /> */}
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

         <PrivateRoute  path={"/pending"} component={PendingFren} />

         <PrivateRoute exact path={"/Friends"} component={Friends} />

          <PrivateRoute path={"/feed"} component={FeedPage} />
         
          <PrivateRoute exact path={"/send"} component={NewFrenmoPage} />
          <PrivateRoute exact path={`/frenmos`} component={FrenmoDashboard} />

          <PrivateRoute
            exact
            path={`/frenmos/category/:categoryId/:outstandingId`}
            component={FrenmoDetail}
          />

          <PrivateRoute
            exact
            path={`/frenmos/:outstandingId/edit`}
            component={EditFrenmoPage}
          />
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
