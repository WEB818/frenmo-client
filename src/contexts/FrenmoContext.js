import React, {
  Component
} from 'react';
import AuthApiService from '../services/auth-api-service';
import TokenService from '../services/token-service';
import IdleService from '../services/idle-service';
import FrenmoApiService from '../services/frenmo-api-service';

const FrenmoContext = React.createContext(
  {
    user: {},
    error: null,
    frenmoList: [],
    publicFrenmos: {},
    personalFrenmos: {},
    friendFrenmos: {},
    frenmo: {},
    outRes: {},
    frenmoCategories: [],
    publicityTypes: [],
    addFrenmo: () => {},
    setFrenmoRes: () => {},
    setPublicFrenmos: () => {},
    setAllPublic: () => {},
    setAllPersonal: () => {},
    setAllFriend: () => {},
    clearError: () => {},
    setError: () => {}
  }
);

export default FrenmoContext;

export class FrenmoProvider extends Component {
  constructor(props) {
    super(props);

    // const [
    //   publicFrenmos,
    //   friend,
    //   personal,
    //   allPublic
    // ] = Promise.all([
    //   FrenmoApiService.getMyPublicFrenmos(),
    //   FrenmoApiService.getFriendFrenmos(),
    //   FrenmoApiService.getPersonalFrenmos(),
    //   FrenmoApiService.getAllPublicFrenmos()
    // ]).then(frenmos => frenmos);
    // (async () => {
    //   try {
    //     return await Promise.all([
    //       FrenmoApiService.getMyPublicFrenmos(),
    //       FrenmoApiService.getFriendFrenmos(),
    //       FrenmoApiService.getPersonalFrenmos(),
    //       FrenmoApiService.getAllPublicFrenmos()
    //     ]);
    //   } catch (error) {
    //     this.setError(error);
    //   }
    // })();
    const state = {
      user: {},
      error: null,

      frenmoList: [],
      publicFrenmos: {
        favors: [],
        page: 1,
        limit: 30
      },
      allPublicFrenmos: {
        favors: [],
        page: 1,
        limit: 30
      },
      personalFrenmos: {
        favors: [],
        page: 1,
        limit: 30
      },
      friendFrenmos: {
        favors: [],
        page: 1,
        limit: 30
      },

      frenmo: {},
      outRes: {},
      frenmoCategories: [
        {
          id: 1,

          category: 'Advice',
          icon: 'fas fa-comments'
        },
        {
          id: 2,
          category: 'Career',
          icon: 'fas fa-business-time'
        },
        {
          id: 3,
          category: 'Community',
          icon: 'fas fa-people-carry'
        },
        {
          id: 4,
          category: 'Creative',
          icon: 'fas fa-paint-brush'
        },
        {
          id: 5,
          category: 'Education',
          icon: 'fas fa-graduation-cap'
        },
        {
          id: 6,
          category: 'Emergency',
          icon: 'fas fa-ambulance'
        },
        {
          id: 7,
          category: 'Family',
          icon: 'fas fa-home'
        },
        {
          id: 8,
          category: 'Food',
          icon: 'fas fa-utensils'
        },
        {
          id: 9,
          category: 'Gaming',
          icon: 'fas fa-gamepad'
        },
        {
          id: 10,
          category: 'Health',
          icon: 'fas fa-heartbeat'
        },
        {
          id: 11,
          category: 'IT',
          icon: 'fas fa-laptop-medical'
        },
        {
          id: 12,
          category: 'Kids',
          icon: 'fas fa-child'
        },
        {
          id: 13,
          category: 'Miscellaneous',
          icon: 'fas fa-inbox'
        },
        {
          id: 14,
          category: 'Needs fixing',
          icon: 'fas fa-tools'
        },
        {
          id: 15,
          category: 'Pets',
          icon: 'fas fa-paw'
        },
        {
          id: 16,
          category: 'Plants',
          icon: 'fas fa-leaf'
        },
        {
          id: 17,
          category: 'Relationship',
          icon: 'fas fa-heart'
        },
        {
          id: 18,
          category:
            'Religion & Spirituality',
          icon: 'fas fa-church'
        },
        {
          id: 19,
          category: 'Ridesharing',
          icon: 'fas fa-car'
        },
        {
          id: 20,
          category: 'Sports',
          icon: 'fas fa-skiing-nordic'
        },
        {
          id: 21,
          category: 'Travel',
          icon: 'fas fa-hiking'
        },
        {
          id: 22,
          category: 'Volunteers Needed',
          icon: 'fas fa-hands-helping'
        },
        {
          id: 23,
          category: 'Wedding',
          icon: 'fas fa-ring'
        }
      ],
      publicityTypes: [
        {
          public: 'dm',
          type: 'Private'
        },
        {
          public: 'friend',
          type: 'Friends'
        },
        {
          public: 'public',
          type: 'Public'
        }
      ]
    };
    const jwtPayload = TokenService.parseAuthToken();

    if (jwtPayload) {
      state.user = {
        id: jwtPayload.user_id,
        name: jwtPayload.name,
        username: jwtPayload.sub
      };
    }
    this.state = state;
  }

  componentWillUnmount() {
    IdleService.unRegisterIdleResets();
    TokenService.clearCallbackBeforeExpiry();

    IdleService.setIdleCallback(
      this.logoutBecauseIdle
    );
  }

  setFrenmoRes = outRes => {
    this.setState({ outRes });
  };

  // sets all public frenmos with response from /api/favor
  setPublicFrenmos = allPublicFrenmos => {
    this.setState({ allPublicFrenmos });
  };

  addFrenmo = async () => {
    try {
      const [
        publicFrenmos,
        friend,
        personal,
        allPublic
      ] = await Promise.all([
        FrenmoApiService.getMyPublicFrenmos(),
        FrenmoApiService.getFriendFrenmos(),
        FrenmoApiService.getPersonalFrenmos(),
        FrenmoApiService.getAllPublicFrenmos()
      ]);

      this.setAllPublic(publicFrenmos);
      this.setAllFriend(friend);
      this.setAllPersonal(personal);
      this.setPublicFrenmos(allPublic);
    } catch (error) {
      this.setError(error);
    }

    // const jwtPayload = await TokenService.parseAuthToken();
    // this.setUser({
    //   id: jwtPayload.user_id,
    //   name: jwtPayload.name,
    //   username: jwtPayload.sub
    // });
    // await FrenmoApiService.getMyPublicFrenmos()
    //   .then(this.setAllPublic)
    //   .catch(this.setError);
    // await FrenmoApiService.getFriendFrenmos()
    //   .then(this.setAllFriend)
    //   .catch(this.setError);
    // await FrenmoApiService.getPersonalFrenmos()
    //   .then(this.setAllPersonal)
    //   .catch(this.setError);
    // await FrenmoApiService.getAllPublicFrenmos()
    //   .then(this.setPublicFrenmos)
    //   .catch(this.setError);
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
    this.setState({
      user: user || { id: null }
    });
  };

  processLogin = authToken => {
    TokenService.saveAuthToken(
      authToken
    );
    const jwtPayload = TokenService.parseAuthToken();
    this.setUser({
      id: jwtPayload.user_id,
      name: jwtPayload.name,
      username: jwtPayload.sub
    });
    IdleService.regiserIdleTimerResets();
    TokenService.queueCallbackBeforeExpiry(
      () => {
        this.fetchRefreshToken();
      }
    );
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
        TokenService.saveAuthToken(
          res.authToken
        );
        TokenService.queueCallbackBeforeExpiry(
          () => {
            this.fetchRefreshToken();
          }
        );
      })
      .catch(err => {
        this.setError(err);
      });
  };

  render() {
    const value = {
      newFrenmo: this.state.newFrenmo,
      allPublicFrenmos: this.state
        .allPublicFrenmos,
      publicFrenmos: this.state
        .publicFrenmos,
      personalFrenmos: this.state
        .personalFrenmos,
      friendFrenmos: this.state
        .friendFrenmos,
      frenmo: this.state.frenmo,
      outRes: this.state.outRes,
      frenmoCategories: this.state
        .frenmoCategories,
      publicityTypes: this.state
        .publicityTypes,
      addFrenmo: this.addFrenmo,
      setFrenmoRes: this.setFrenmoRes,
      setPublicFrenmos: this
        .setPublicFrenmos,
      setAllPersonal: this
        .setAllPersonal,
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
      <FrenmoContext.Provider
        value={value}
      >
        {this.props.children}
      </FrenmoContext.Provider>
    );
  }
}
