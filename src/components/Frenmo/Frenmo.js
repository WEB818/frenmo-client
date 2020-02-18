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
      tags,
      createdBy,
      issuedBy,
      receivedBy,
      categoryId,
      frenmoId
    } = this.props;
    console.log(this.state, "state in fren detail");
    return (
      <li className="Frenmo__title-container">
        <NavLink
          to={{
            pathname: `/frenmos/${frenmoId}`,
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
            <h3>{title}</h3>
            {/* <FrenmoDetail
              description={description}
              expiration_date={expiration_date}
              publicity={publicity}
              tags={tags}
              createdBy={createdBy}
              issuedBy={issuedBy}
              receivedBy={receivedBy}
            /> */}
          </div>
        </NavLink>
      </li>
    );
  }
}

export default Frenmo;
