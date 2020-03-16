import React, { Component } from "react";
export default class PublicFeed extends Component {
  render() {
    return (
      <div>
        <div className="activity">
          <p>Your friend "X" issued "Y" a coupon</p>
          <p>2/10/2020</p>
        </div>

        <div className="activity">
          <p>Your friend "A" issued "B" a coupon</p>
          <p>2/10/2020</p>
        </div>

        <div className="activity">
          <p>Your friend "M" issued "N" a coupon</p>
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
      </div>
    );
  }
}
