import React, { Component } from 'react';
import FrenmoContext from "../../contexts/FrenmoContext"
import {Button} from "../Utils/Utils"
//need accordion item?

class FrenmoCategories extends Component {
  static defaultProps = {
    frenmoCategories: []
  
};

state = {
  expanded: false
}

static contextType = FrenmoContext;

renderButtons(expanded) {
  const { type } = this.props;
  return (
    <div className="FrenmoCategories__section">
      <Button
        className="Accordion"
        onClick={() => this.handleSetActiveType()}
      >
        <p className="Accordion__title">{type}</p>
      </Button>
      {expanded && this.renderTitles()}
    </div>
  );
}
  render() { 
    return (  );
  }
}
 
export default FrenmoCategories;