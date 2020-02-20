import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import FrenmoDetail from "../FrenmoDetail/FrenmoDetail";

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
      outstandingId,
      createdBy,
      issuedBy,
      receivedBy,
      categoryId,
      frenmoId
    } = this.props;

    return (
      <li className="Frenmo__title-container">
        <NavLink
          className="Frenmo__Nav-link"
          activeClassName="selected"
          to={{
            pathname: `/frenmos/category/${categoryId}/${outstandingId}`,
            state: {
              title: title,
              description: description,
              expiration_date: expiration_date,
              publicity: publicity,
              createdBy: createdBy,
              issuedBy: issuedBy,
              receivedBy: receivedBy
            }
          }}
        >
          <div className="Frenmo__item">
            <h3>{title} bye</h3>
            <FrenmoDetail
              description={description}
              expiration_date={expiration_date}
              createdBy={createdBy}
              issuedBy={issuedBy}
              receivedBy={receivedBy}
            />
          </div>
        </NavLink>
      </li>
    );
  }
}

export default Frenmo;
