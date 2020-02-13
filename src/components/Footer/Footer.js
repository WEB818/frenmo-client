import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTicketAlt,
  faUserFriends,
  faHandHoldingHeart,
  faStar
} from "@fortawesome/free-solid-svg-icons";

import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="Footer__container">
        <div className="Footer__icon">
          <FontAwesomeIcon icon={faTicketAlt} />
          <div>Frenmos</div>
        </div>
        <div className="Footer__icon">
          <FontAwesomeIcon icon={faUserFriends} />
          <div>Friends</div>
        </div>
        <div className="Footer__icon">
          <FontAwesomeIcon icon={faHandHoldingHeart} />
          <div>Wishlist</div>
        </div>
        <div className="Footer__icon">
          <FontAwesomeIcon icon={faStar} />
          <div>Profile</div>
        </div>
      </div>
    );
  }
}

export default Footer;
