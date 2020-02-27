import React, { Component } from "react";

const MyFriendsContext = React.createContext({
  error: null,
  friendsList: [],
  setFriendsList: () => {},
  clearError: () => {},
  setError: () => {}
});
export default MyFriendsContext;

export class MyFriendsProvider extends Component {
  state = {
    error: null,
    friendsList: []
  };

  setFriendsList = friendsList => {
    this.setState({ friendsList });
  };
  clearError = () => {
    this.setState({ error: null });
  };
  setError = error => {
    console.error(error);
    this.setState({ error });
  };
  render() {
    const value = {
      error: this.state.error,
      friendsList: this.state.friendsList,
      setFriendsList: this.setFriendsList,
      clearError: this.clearError,
      setError: this.setError
    };
    return (
      <MyFriendsContext.Provider value={value}>
        {this.props.children}
      </MyFriendsContext.Provider>
    );
  }
}
