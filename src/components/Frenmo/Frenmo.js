import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicketAlt, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import "./Frenmo.css";

class Frenmo extends Component {
  static defaultProps = {
    match: {
      params: {}
    }
  };

  render() {
    const { title, categoryId, frenmoId } = this.props;

    return (
      <li className="Frenmo__title-container">
        <NavLink
          to={{
            pathname: `/myfrenmos/${categoryId}/detail/${frenmoId}`,
            state: {
              title
            }
          }}
        >
          <div className="Frenmo__item">
            <FontAwesomeIcon className="icon" icon={faAngleLeft} />
            <FontAwesomeIcon className="icon" icon={faTicketAlt} />
            {title}
          </div>
        </NavLink>
      </li>
    );
  }
}

export default Frenmo;
