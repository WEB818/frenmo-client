import React, { Component } from "react";
import AuthApiService from "../services/auth-api-service";
import TokenService from "../services/token-service";
import IdleService from "../services/idle-service";

const FrenmoContext = React.createContext({
  user: {},
  error: null,
  newFrenmo: {},
  allPublicFrenmos: [],
  setPublicFrenmos: () => {},
  publicFrenmos: [],
  personalFrenmos: [],
  friendFrenmos: [],
  frenmo: {},
  outRes: {},
  frenmoCategories: [],
  publicityTypes: [],
  setFrenmoRes: () => {},
  addFrenmo: () => {},
  setAllPublic: () => {},
  setAllPersonal: () => {},
  setAllFriend: () => {},
  clearError: () => {},
  setError: () => {}
});

export default FrenmoContext;

export class FrenmoProvider extends Component {
  constructor(props) {
    super(props);
    const state = {
      user: {},
      error: null,
      newFrenmo: {},
      allPublicFrenmos: [],
      publicFrenmos: [],
      personalFrenmos: [],
      friendFrenmos: [],
      frenmo: {},
      outRes: {},
      frenmoCategories: [
        {
          id: 1,
          category: "Advice"
        },
        {
          id: 2,
          category: "Career"
        },
        {
          id: 3,
          category: "Community"
        },
        {
          id: 4,
          category: "Creative"
        },
        {
          id: 5,
          category: "Education"
        },
        {
          id: 6,
          category: "Emergency"
        },
        {
          id: 7,
          category: "Family"
        },
        {
          id: 8,
          category: "Food"
        },
        {
          id: 9,
          category: "Gaming"
        },
        {
          id: 10,
          category: "Health"
        },
        {
          id: 11,
          category: "IT"
        },
        {
          id: 12,
          category: "Kids"
        },
        {
          id: 13,
          category: "Miscellaneous"
        },
        {
          id: 14,
          category: "Needs fixing"
        },
        {
          id: 15,
          category: "Pets"
        },
        {
          id: 16,
          category: "Plants"
        },
        {
          id: 17,
          category: "Relationship"
        },
        {
          id: 18,
          category: "Religion & Spirituality"
        },
        {
          id: 19,
          category: "Ridesharing"
        },
        {
          id: 20,
          category: "Sports"
        },
        {
          id: 21,
          category: "Travel"
        },
        {
          id: 22,
          category: "Volunteers Needed"
        },
        {
          id: 23,
          category: "Wedding"
        }
      ],
      publicityTypes: [
        { public: "dm", type: "Private" },
        { public: "friend", type: "Friends" },
        { public: "public", type: "Public" }
      ]
    };

    const jwtPayload = TokenService.parseAuthToken();

    if (jwtPayload)
      state.user = {
        id: jwtPayload.user_id,
        name: jwtPayload.name,
        username: jwtPayload.sub
      };

    this.state = state;
    IdleService.setIdleCallback(this.logoutBecauseIdle);
  }

  setFrenmoRes = outRes => {
    this.setState({ outRes });
  };

  // sets all public frenmos with response from /api/favor
  setPublicFrenmos = allPublicFrenmos => {
    this.setState({ allPublicFrenmos });
  };

  addFrenmo = newFrenmo => {
    this.setState({ newFrenmo });
  };
  // sets my public frenmos with response from /api/favor/public
  setAllPublic = publicFrenmos => {
    this.setState({ publicFrenmos });
  };

  setAllPersonal = personalFrenmos => {
    this.setState({ personalFrenmos });
  };

  setAllFriend = friendFrenmos => {
    this.setState({ friendFrenmos });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  setError = error => {
    console.error(error);
    this.setState({ error });
  };

  setError = error => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  setUser = user => {
    this.setState({ user });
  };

  processLogin = authToken => {
    TokenService.saveAuthToken(authToken);
    const jwtPayload = TokenService.parseAuthToken();
    this.setUser({
      id: jwtPayload.user_id,
      name: jwtPayload.name,
      username: jwtPayload.sub
    });
    IdleService.regiserIdleTimerResets();
    TokenService.queueCallbackBeforeExpiry(() => {
      this.fetchRefreshToken();
    });
  };

  processLogout = () => {
    TokenService.clearAuthToken();
    TokenService.clearCallbackBeforeExpiry();
    IdleService.unRegisterIdleResets();
    this.setUser({});
  };

  logoutBecauseIdle = () => {
    TokenService.clearAuthToken();
    TokenService.clearCallbackBeforeExpiry();
    IdleService.unRegisterIdleResets();
    this.setUser({ idle: false });
  };

  fetchRefreshToken = () => {
    AuthApiService.refreshToken()
      .then(res => {
        TokenService.saveAuthToken(res.authToken);
        TokenService.queueCallbackBeforeExpiry(() => {
          this.fetchRefreshToken();
        });
      })
      .catch(err => {
        this.setError(err);
      });
  };

  render() {
    const value = {
      newFrenmo: this.state.newFrenmo,
      allPublicFrenmos: this.state.allPublicFrenmos,
      publicFrenmos: this.state.publicFrenmos,
      personalFrenmos: this.state.personalFrenmos,
      friendFrenmos: this.state.friendFrenmos,
      frenmo: this.state.frenmo,
      outRes: this.state.outRes,
      frenmoCategories: this.state.frenmoCategories,
      publicityTypes: this.state.publicityTypes,
      addFrenmo: this.addFrenmo,
      setFrenmoRes: this.setFrenmoRes,
      setPublicFrenmos: this.setPublicFrenmos,
      setAllPersonal: this.setAllPersonal,
      setAllFriend: this.setAllFriend,
      setAllPublic: this.setAllPublic,
      clearError: this.clearError,
      setError: this.setError,
      user: this.state.user,
      error: this.state.error,
      setUser: this.setUser,
      processLogin: this.processLogin,
      processLogout: this.processLogout
    };
    return (
      <FrenmoContext.Provider value={value}>
        {this.props.children}
      </FrenmoContext.Provider>
    );
  }
}
