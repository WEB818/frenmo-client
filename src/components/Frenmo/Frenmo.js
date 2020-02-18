import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./Frenmo.css";

class Frenmo extends Component {
  static defaultProps = {
    match: {
      params: {}
    }
  };

  render() {
    const {
      title,
      description,
      expiration_date,
      publicity,
      tags,
      createdBy,
      issuedBy,
      receivedBy,
      categoryId,
      frenmoId
    } = this.props;

    return (
      <li className="Frenmo__title-container">
        <NavLink
          to={{
            pathname: `/frenmos/${categoryId}/detail/${frenmoId}`,
            state: {
              title,
              description,
              expiration_date,
              publicity,
              tags,
              createdBy,
              issuedBy,
              receivedBy
            }
          }}
        >
          <div className="Frenmo__item">
            <p>{title}</p>
          </div>
        </NavLink>
      </li>
    );
  }
}

export default Frenmo;
