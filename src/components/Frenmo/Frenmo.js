import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicketAlt } from "@fortawesome/free-solid-svg-icons";
import "./Frenmo.css";

class Frenmo extends Component {
  static defaultProps = {
    match: {
      params: {}
    }
  };

  render() {
    const { title, categoryId } = this.props;

    return (
      <li className="Frenmo__title-container">
        <NavLink to={`/myfrenmos/${categoryId}/detail`}>
          <div className="Frenmo__item">
            <FontAwesomeIcon className="icon" icon={faTicketAlt} />
            {title}
          </div>
        </NavLink>
      </li>
    );
  }
}

export default Frenmo;
