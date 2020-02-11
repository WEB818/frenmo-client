import React, { Component } from "react";
import { Label, Input, Textarea } from "../Utils/Utils";
import "./NewCouponForm.css";

class NewCouponForm extends Component {
  render() {
    return (
      <form>
        <Label>Presented To:</Label>
          <Input type="text" />
        <Label>Redeemable For:</Label>
          <Input type="text" />
        <Label>Voucher Details:</Label>
          <Textarea />
        <Label>Expiration Date:</Label>
          <Input type="date" />
      </form>
    );
  }
}

export default NewCouponForm;
