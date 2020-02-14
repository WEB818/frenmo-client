import React, { Component } from "react";
import Frenmo from "../../components/Frenmo/Frenmo";
import { getFrenmosInCategory } from "../../services/helpers";
import FrenmoContext from "../../contexts/FrenmoContext";
import "./FrenmoListByCat.css";

class FrenmoListByCat extends Component {
  static defaultProps = {
    match: {
      params: {}
    }
  };

  static contextType = FrenmoContext;

  render() {
    const { categoryId } = this.props.match.params;

    const { frenmoList } = this.context;

    const frenmosByCat = getFrenmosInCategory(frenmoList.favors, categoryId);

    return (
      <div className="ListByCat__section">
        <ul className="ListByCat__list">
          {frenmosByCat.map(frenmo => (
            <Frenmo
              key={frenmo.id}
              frenmoId={frenmo.id}
              title={frenmo.title}
              description={frenmo.description}
              expiration_date={frenmo.expiration_date}
              publicity={frenmo.publicity}
              tags={frenmo.tags}
              createdBy={frenmo.creator_name}
              issuedBy={frenmo.issuer_name}
              receivedBy={frenmo.receiver_name}
              categoryId={frenmo.category}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default FrenmoListByCat;
