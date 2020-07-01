import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import LoginPage from "./routes/LoginPage/LoginPage";
import RegistrationPage from "./routes/RegistrationPage/RegistrationPage";
import FeedPage from "./routes/FeedPage/FeedPage";
import NewFrenmoPage from "./routes/NewFrenmoPage/NewFrenmoPage";
import NavMenu from "./components/NavMenu/NavMenu";
import PrivateRoute from "./components/Utils/PrivateRoute";
import PublicOnlyRoute from "./components/Utils/PublicOnlyRoute";
import FooterMenu from "./components/FooterMenu/FooterMenu";
import FrenmoContext from "./contexts/FrenmoContext";
import FrenmoListByCat from "./routes/FrenmoListByCat/FrenmoListByCat";
import EditFrenmoPage from "./routes/EditFrenmoPage/EditFrenmoPage";
import Friends from "./routes/Friends/Friends";
import PendingFren from "./components/PendingFren/PendingFren";
import FrenmoDashboard from "./routes/FrenmoDashboard/FrenmoDashboard";
import FrenmoDetail from "./components/FrenmoDetail/FrenmoDetail";
import TokenService from "./services/token-service";
import Frenmo from "./components/Frenmo/Frenmo";
import { PopupFeedback } from "./components/PopupFeedback";
import NewFrenmoForm from "./components/NewFrenmoForm/NewFrenmoForm";
import "./App.scss";
import Splash from "./components/Splash/Splash";

class App extends Component {
  state = {
    hasError: false,
    hasFeedback: false,
    feedbackMessage: null,
  };

  static contextType = FrenmoContext;

  renderNavRoutes() {
    return <PrivateRoute path={`/frenmos`} component={FrenmoDashboard} />;
  }
  //add bubbles
  renderMainRoutes() {
    return (
      <>
        <Switch>
          <PublicOnlyRoute
            exact
            path={"/"}
            component={Splash}
          ></PublicOnlyRoute>
          <PublicOnlyRoute path={"/login"} component={LoginPage} />
          <PublicOnlyRoute path={"/register"} component={RegistrationPage} />
          <PrivateRoute path={"/pending"} component={PendingFren} />
          <PrivateRoute exact path={"/friends"} component={Friends} />
          <PrivateRoute path={"/feed"} component={FeedPage} />
          <PrivateRoute exact path={"/send"} component={NewFrenmoPage} />
          <PrivateRoute
            path={"/frenmos/category/:categoryId"}
            component={FrenmoListByCat}
          />
          <PrivateRoute
            exact
            path={"/frenmos/:outstandingId/edit"}
            component={EditFrenmoPage}
          />
        </Switch>
      </>
    );
  }

  renderOtherRoutes() {
    return (
      <>
        <Switch>
          <PrivateRoute
            path={"/frenmos/category/:categoryId/:outstandingId"}
            component={FrenmoDetail}
          />
        </Switch>
      </>
    );
  }

  handleRenderFeedback = (feedbackMessage) => {
    this.setState({
      hasFeedback: true,
      feedbackMessage,
    });
    setTimeout(
      this.setState({
        hasFeedback: false,
        feedbackMessage: null,
      }),
      10000
    );
  };

  render() {
    return (
      <div className="App">
        {this.state.feedbackMessage ? (
          <PopupFeedback feedbackMessage={this.state.feedbackMessage} />
        ) : null}
        {TokenService.hasAuthToken() ? <NavMenu /> : null}

        <main className="App__container wrapper">
          {this.renderNavRoutes()}
          {this.state.hasError && (
            <p className="red">Something went wrong. Please try again later.</p>
          )}

          <section className="App__main wrapper">
            {this.renderMainRoutes()}

            {this.renderOtherRoutes()}
          </section>
        </main>

        <FooterMenu />
      </div>
    );
  }
}

export default App;
