import React from "react";
import Profile from "../Profile/Profile";
import FrenmoContext from "../../contexts/FrenmoContext";
import UserContext from "../../contexts/UserContext";

function UserId() {
  return (
    <FrenmoContext.Consumer>
      {frenmo => (
        <UserContext.Consumer>
          {user => <Profile user={user} />}
        </UserContext.Consumer>
      )}
    </FrenmoContext.Consumer>
  );
}

export default UserId;
