import React, {
  Component
} from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import LoginPage from './routes/LoginPage/LoginPage';
import RegistrationPage from './routes/RegistrationPage/RegistrationPage';
import FeedPage from './routes/FeedPage/FeedPage';
import NewFrenmoPage from './routes/NewFrenmoPage/NewFrenmoPage';
import NavMenu from './components/Header/NavMenu';
import PrivateRoute from './components/Utils/PrivateRoute';
import PublicOnlyRoute from './components/Utils/PublicOnlyRoute';
import FooterMenu from './components/FooterMenu/FooterMenu';
import FrenmoContext from './contexts/FrenmoContext';
import { FrenmoProvider } from './contexts/FrenmoContext';

import FrenmoListByCat from './routes/FrenmoListByCat/FrenmoListByCat';
import EditFrenmoPage from './routes/EditFrenmoPage/EditFrenmoPage';
import Friends from './routes/Friends/Friends';
import PendingFren from './components/PendingFren/PendingFren';
import FrenmoDashboard from './routes/FrenmoDashboard/FrenmoDashboard';
import './App.css';
import FrenmoDetail from './components/FrenmoDetail/FrenmoDetail';
import FrenmoApiService from './services/frenmo-api-service';

class App extends Component {
  state = {
    hasError: false
  };

  static contextType = FrenmoContext;
  // async componentDidMount() {
  //   const myPublicFrenmos = await FrenmoApiService.getAllPublicFrenmos();
  //   const myPersonalFrenmos = await FrenmoApiService.getPersonalFrenmos();
  //   const myFriendFrenmos = await FrenmoApiService.getFriendFrenmos();
  //   this.setState({
  //     myPublicFrenmos,
  //     myPersonalFrenmos,
  //     myFriendFrenmos
  //   });
  // }
  renderNavRoutes() {
    return (
      <>
        <div className="Nav-flex">
          <PrivateRoute
            path={
              '/frenmos/category/:categoryId'
            }
            // render={() => <FrenmoListByCat userId="1" />}
            component={FrenmoListByCat}
            name="frenmoByCat"
          />
        </div>
      </>
    );
  }

  renderMainRoutes() {
    return (
      <>
        <Switch>
          <PublicOnlyRoute
            exact
            path={'/login'}
            component={LoginPage}
          />

          <PublicOnlyRoute
            exact
            path={'/register'}
            component={RegistrationPage}
          />

          <PrivateRoute
            path={'/pending'}
            component={PendingFren}
          />

          <PrivateRoute
            exact
            path={'/Friends'}
            component={Friends}
          />

          <PrivateRoute
            path={'/feed'}
            component={FeedPage}
          />

          <PrivateRoute
            exact
            path={'/send'}
            component={NewFrenmoPage}
          />
          <PrivateRoute
            exact
            path={`/frenmos`}
            component={FrenmoDashboard}
          />

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
    // <FrenmoContext.Provider
    // value={value}
    // >
    return (
      <FrenmoProvider>
        <div className="App">
          <NavMenu />
          <main className="App__container wrapper">
            {this.state.hasError && (
              <p className="red">
                Something went wrong.
                Please try again later.
              </p>
            )}

            <div className="Nav-flex">
              <nav className="App__nav">
                {this.renderNavRoutes()}
              </nav>
            </div>
            <section className="App__main wrapper">
              {this.renderMainRoutes()}
            </section>
          </main>
          <footer id="footer">
            <FooterMenu />
          </footer>
        </div>
      </FrenmoProvider>
      // </FrenmoContext.Provider>
    );
  }
}

export default App;
