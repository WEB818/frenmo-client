import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./FeedPage.css";

class FeedPage extends Component {
  render() {
    return (
      <>
        <nav>
          <button>Public</button>
          <button>Friends</button>
          <button>Mine</button>
          <Link to="/dashboard">
            <button>Dash</button>
          </Link>
          <Link to="/send">
            <button>Send</button>
          </Link>
        </nav>

        <div className="activity">
          <p>"X" issued "Y" a coupon</p>
          <p>2/10/2020</p>
        </div>
        <div className="activity">
          <p>"Z" issued "A" a coupon</p>
          <p>2/10/2020</p>
        </div>
        <div className="activity">
          <p>"P" redeemed a coupon from "Y"</p>
          <p>2/10/2020</p>
        </div>
        <div className="activity">
          <p>"X" issued "Y" a coupon</p>
          <p>2/10/2020</p>
        </div>
        <div className="activity">
          <p>"W" redeemed a coupon from "R"</p>
          <p>2/10/2020</p>
        </div>
        <div className="activity">
          <p>"X" issued "Y" a coupon</p>
          <p>2/10/2020</p>
        </div>
      </>
    );
  }
}

export default FeedPage;
