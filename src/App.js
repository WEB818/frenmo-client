import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import LoginPage from "./routes/LoginPage/LoginPage";
import RegistrationPage from "./routes/RegistrationPage/RegistrationPage";
import LandingPage from "./routes/LandingPage/LandingPage";
import FeedPage from "./routes/FeedPage/FeedPage";
import NewCouponPage from "./routes/NewCouponPage/NewCouponPage";
import NavMenu from "./components/Header/NavMenu";
import Header from "./components/Header/Header";
import PrivateRoute from "./components/Utils/PrivateRoute";
import PublicOnlyRoute from "./components/Utils/PublicOnlyRoute";
import "./Styles/App.css";

class App extends Component {
  renderNavRoutes() {
    return <div className="nav-flex"> </div>;
  }
  renderMainRoutes() {}
  render() {
    return (
      <BrowserRouter> 
        <div className="App">
          <Header />
          <NavMenu />
          {this.renderNavRoutes()}
          <main>
            <Switch>
              <Route 
                exact path="/" 
                component={LandingPage} 
              />
              <PublicOnlyRoute 
                exact path={"/login"} 
                component={LoginPage} 
              />
              <PublicOnlyRoute 
                exact path={"/register"} 
                component={RegistrationPage} 
              />
              <PublicOnlyRoute 
                path={"/feed"} 
                component={FeedPage} 
              />
              <PrivateRoute 
                exact path={"/send"} 
                component={NewCouponPage} 
              />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
