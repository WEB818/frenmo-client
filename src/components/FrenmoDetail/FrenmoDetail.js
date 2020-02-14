import React, { Component } from "react";

class FrenmoDetail extends Component {
  render() {
    const {
      title,
      description,
      expiration_date,
      publicity,
      tags,
      createdBy,
      issuedBy,
      receivedBy
    } = this.props;
    console.log(
      "frenmodetail",
      title,
      description,
      expiration_date,
      publicity,
      tags,
      createdBy,
      issuedBy,
      receivedBy
    );
    return (
      <>
        <h3 className="FrenmoDetail__title">{title}</h3>
        {description && <p>Details: {description}</p>}
        {expiration_date && (
          <p>This frenmo is valid until: {expiration_date}</p>
        )}
        {publicity && <p>Privacy setting: {publicity}</p>}
        {createdBy && <p>Frenmo created by: {createdBy}</p>}
        {issuedBy && <p>Frenmo issued by: {issuedBy}</p>}
        {receivedBy && <p>Frenmo received by: {receivedBy}</p>}
      </>
    );
  }
}

export default FrenmoDetail;
