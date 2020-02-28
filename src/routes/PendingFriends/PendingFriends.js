import React, { Component } from "react";
import { Link } from "react-router-dom";

export class PendingFriends extends Component {
  addById = id => {
    this.props.update(id);
  };

  render() {
    const { pending } = this.props;

    return (
      <div>
        {pending ? (
          <p>You have friends waiting to send you Frenmos!</p>
        ) : (
          <p>You currently have no pending friend requests.</p>
        )}
        <div>
          <p id={pending.id}>{pending.username} wants to be friends!</p>
          <button type="click" onClick={() => this.addById(pending.id)}>
            Confirm friendship
          </button>
          <button type="click" onClick={() => this.addById(pending.id)}>
            Ignore
          </button>
        </div>
      </div>
    );
  }
}

export default PendingFriends;
