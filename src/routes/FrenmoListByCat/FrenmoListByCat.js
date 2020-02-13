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

    const frenmosByCat = getFrenmosInCategory(frenmoList, categoryId);

    return (
      <div className="ListByCat">
        <ul className="ListByCat__list">
          {frenmosByCat.map(frenmo => (
            <Frenmo
              key={frenmo.id}
              frenmoId={frenmo.id}
              title={frenmo.title}
              categoryId={frenmo.category}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default FrenmoListByCat;
