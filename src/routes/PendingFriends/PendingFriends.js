import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Utils/Utils";
import "./PendingFriends.scss";
export class PendingFriends extends Component {
  static defaultProps;

  addById = id => {
    this.props.update(id);
  };

  render() {
    const { pending } = this.props;

    return (
      <div>
        <div id={pending.id} className="pending-friend-user">
          {pending.username} wants to be friends!
        </div>
        <div className="btn-container pending-btn">
          <Button type="click" onClick={() => this.addById(pending.id)}>
            Confirm
          </Button>
          <Link to="/friends">
            <Button>Ignore</Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default PendingFriends;
