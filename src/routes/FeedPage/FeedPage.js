import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./FeedPage.css";
// import PublicFeed from "../../components/PublicFeed/PublicFeed";

export default class FeedPage extends Component {
  render() {
    return (
      <div className="FeedPage__container">
        <Link to="/send">I'm the feed page</Link>
      </div>
    );
  }
}
