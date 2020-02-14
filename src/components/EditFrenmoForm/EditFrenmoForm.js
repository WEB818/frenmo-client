import React, { Component } from "react";
import FrenmoApiService from "../../services/frenmo-api-service";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button, Label, Input, Textarea } from "../Utils/Utils";

import "./EditFrenmoForm";

// ----------- EDIT FORM, NEED TO DO A GET FOR THIS SPECIFIC FRENMO TO FILL FIELDS BEFORE PATCH ==========//

class EditFrenmoForm extends Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  };

  // static contextType = FrenmoContext;

  /// ================ change this to a patch =======================///

  handleSubmit = event => {
    event.preventDefault();

    const { receiver, title, details, category, expiration } = event.target;
    console.log(
      receiver.value,
      title.value,
      details.value,
      category.value,
      expiration.value
    );
    FrenmoApiService.postFrenmo(
      receiver.value,
      title.value,
      details.value,
      category.value,
      expiration.value
    )
      //update for final context method
      .then(this.context.sentFrenmo)
      .then(() => {
        receiver.value = "";
        title.value = "";
        details.value = "";
        category.value = "";
        expiration.value = "";
        this.props.onSendFrenmo();
      });
  };

  render() {
    return (
      <div className="EditFrenmoForm__container">
        <form className="NewFrenmoForm" onSubmit={this.handleSubmit}>
          <div className="EditFrenmoForm__icons-container"></div>

          {/* <Label htmlFor="NewFrenmo__receiver">Present To:</Label> */}
          <Input
            type="text"
            name="receiver"
            id="NewFrenmo__receiver"
            placeholder="Present to..."
            aria-label="Type the username of the person to whom you'd like to send frenmo"
            required
          />

          {/* <Label htmlFor="NewFrenmo__title">Redeemable For:</Label> */}
          <Input
            type="text"
            name="title"
            id="NewFrenmo__title"
            placeholder="Redeemable for..."
            aria-label="Add title for frenmo"
            required
          />

          {/* <Label htmlFor="NewFrenmo__details">Voucher Details:</Label> */}
          <Textarea
            id="NewFrenmo__details"
            name="details"
            placeholder="Add a message..."
            aria-label="Add description for frenmo"
          />

          {/* <Label htmlFor="NewFrenmo__category">Select a category:</Label> */}
          <select
            id="NewFrenmo__category"
            name="category"
            aria-label="Select category for frenmo"
          >
            <option value="0">--Please choose a category--</option>
            <option value="1">Advice</option>
            <option value="2">Career</option>
            <option value="3">Community</option>
            <option value="4">Creative</option>
            <option value="5">Education</option>
            <option value="6">Emergency</option>
            <option value="7">Family</option>
            <option value="8">Food</option>
            <option value="9">Gaming</option>
            <option value="10">Health</option>
            <option value="11">IT</option>
            <option value="12">Kids</option>
            <option value="13">Miscellaneous</option>
            <option value="14">Needs fixing</option>
            <option value="15">Pets</option>
            <option value="16">Plants</option>
            <option value="17">Relationship</option>
            <option value="18">Religion & Spirituality</option>
            <option value="19">Ridesharing</option>
            <option value="20">Sports</option>
            <option value="21">Travel</option>
            <option value="22">Volunteers Needed</option>
            <option value="23">Wedding</option>
          </select>

          <div className="NewFrenmo__date-container">
            <Label htmlFor="NewFrenmo__expiration-date">Valid until:</Label>
            <DatePicker
              id="NewFrenmo__expiration-date"
              name="expiration"
              aria-label="Select expiration date for frenmo"
            />
          </div>
          <Button>Edit Frenmo</Button>
        </form>
      </div>
    );
  }
}

export default EditFrenmoForm;
