import React, { Component } from "react";
import { getFrenmoById } from "../../services/helpers";
import FrenmoContext from "../../contexts/FrenmoContext";
class FrenmoDetail extends Component {
  static defaultProps = {
    match: {
      params: {}
    }
  };

  static contextType = FrenmoContext;
  render() {
    console.log("context in frenmodetail", this.context);
    const { frenmoList } = this.context;
    const { frenmoId } = this.props.match.params;
    return (
      <>
        <h3 className="FrenmoDetail__title">
          {frenmoList.favors.length && frenmoList.favors[0].title}
        </h3>
        {frenmoList.favors.length && (
          <p>Details: {frenmoList.favors[0].description}</p>
        )}
        {frenmoList.favors.length && (
          <p>
            This frenmo is valid until: {frenmoList.favors[0].expiration_date}
          </p>
        )}
        {/* {publicity && <p>Privacy setting: {publicity}</p>}
        {createdBy && <p>Frenmo created by: {createdBy}</p>}
        {issuedBy && <p>Frenmo issued by: {issuedBy}</p>}
        {receivedBy && <p>Frenmo received by: {receivedBy}</p>} */}
      </>
    );
  }
}

export default FrenmoDetail;
