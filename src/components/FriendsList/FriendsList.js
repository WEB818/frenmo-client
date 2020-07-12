import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Utils/Utils";
import MyFriendsContext from "../../contexts/MyFriendsContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift, faUserInjured } from "@fortawesome/free-solid-svg-icons";
import "../../components/FriendsList/FriendsList.scss";

export default class FriendsList extends Component {
  static contextType = MyFriendsContext;

  state = {
    friendsList: [],
    sendFrenmo: false,
  };

  unfriendById = (id) => {
    alert("Are you sure?");
    this.props.update(id);
  };

  frenmo = (id) => {
    if (!this.state.sendFrenmo) {
      this.setState({
        sendFrenmo: true,
      });
    }

    this.setState({
      sendFrenmo: false,
    });
  };

  render() {
    const { friend } = this.props;
    return (
      <>
        <div>
          <ul className="friends-list">
            <li className="frens" key={friend.id}>
              {friend.username}
              <div>
                <Link to="/send">
                  <Button
                    type="submit"
                    aria-label={`Send ${friend.username} a frenmo`}
                    onClick={() => this.frenmo(friend.id)}
                    className="friendship-buttons"
                  >
                    <FontAwesomeIcon
                      icon={faGift}
                      className="friendship-icons"
                    />
                  </Button>
                </Link>
                <Button
                  type="submit"
                  aria-label="delete friend"
                  onClick={() => this.unfriendById(friend.id)}
                  className="friendship-buttons"
                >
                  <FontAwesomeIcon
                    icon={faUserInjured}
                    className="friendship-icons"
                  />
                </Button>
              </div>
            </li>
          </ul>
        </div>
      </>
    );
  }
}
