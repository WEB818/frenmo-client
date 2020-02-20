import React, { Component } from "react";

class Profile extends Component {
  render() {
    const { user } = this.props;
    console.log("user id", user.id);
    return <div>hi{user.id}</div>;
  }
}

export default Profile;
