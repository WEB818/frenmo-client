import React, { Component } from "react";
import { Link } from "react-router-dom";
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
    const { frenmoList = [] } = this.context;
    const frenmosByCat = getFrenmosInCategory(frenmoList, categoryId);
    console.log(categoryId);
    return (
      <>
        <ul>
          {frenmosByCat.map(frenmo => (
            <li key={frenmo.id}>{frenmo.title}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default FrenmoListByCat;
