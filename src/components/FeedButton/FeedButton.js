import React, { Component } from "react";
import { Button } from "../Utils/Utils";
import "./FeedButton.scss";

export default class FeedButton extends Component {
  handleClick = () => this.props.onClick(this.props.index);

  render() {
    return (
      <Button
        type="button"
        className={
          this.props.isActive ? "FeedButton__active" : "FeedButton__inactive"
        }
        onClick={this.handleClick}
      >
        <span>{this.props.name}</span>
      </Button>
    );
  }
}
