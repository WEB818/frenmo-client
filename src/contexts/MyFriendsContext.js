import React, { Component } from "react";

const MyFriendsContext = React.createContext({
  friendsList: [],
  setFriendsList: () => {}
});
export default MyFriendsContext;

export class MyFriendsProvider extends Component {
  state = {
    friendsList: []
  };

  setFriendsList = friendsList => {
    this.setState({ friendsList });
  };

  render() {
    const value = {
      friendsList: this.state.friendsList,
      setFriendsList: this.setFriendsList
    };
    return (
      <MyFriendsContext.Provider value={value}>
        {this.props.children}
      </MyFriendsContext.Provider>
    );
  }
}
