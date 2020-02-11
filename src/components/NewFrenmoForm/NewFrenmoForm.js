import React, { Component } from "react";
import FrenmoTags from "../FrenmoTags/FrenmoTags";
import FrenmoApiService from "../../services/frenmo-api-service";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button, Label, Input, Textarea } from "../Utils/Utils";
import "./NewFrenmoForm.css";

class NewFrenmoForm extends Component {
  static defaultProps = {
    onSendFrenmo: () => {}
  };

  // static contextType = FrenmoContext;

  state = {
    expDate: new Date()
  };

  handleChange = date => {
    this.setState({
      expDate: date
    });
  };

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
      <div className="NewFrenmoForm__container">
        <form className="NewFrenmoForm" onSubmit={this.handleSubmit}>
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
            <option value="">--Please choose a category--</option>
            <option value="">Advice</option>
            <option value="">Career</option>
            <option value="">Community</option>
            <option value="">Creative</option>
            <option value="">Education</option>
            <option value="">Emergency</option>
            <option value="">Family</option>
            <option value="">Food</option>
            <option value="">Gaming</option>
            <option value="">Health</option>
            <option value="">IT</option>
            <option value="">Kids</option>
            <option value="">Miscellaneous</option>
            <option value="">Needs fixing</option>
            <option value="">Pets</option>
            <option value="">Plants</option>
            <option value="">Relationship</option>
            <option value="">Religion & Spirituality</option>
            <option value="">Ridesharing</option>
            <option value="">Sports</option>
            <option value="">Travel</option>
            <option value="">Volunteers Needed</option>
            <option value="">Wedding</option>
          </select>
          <FrenmoTags />
          <div className="NewFrenmo__date-container">
            <Label htmlFor="NewFrenmo__expiration-date">Valid until:</Label>
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleChange}
              id="NewFrenmo__expiration-date"
              name="expiration"
              aria-label="Select expiration date for frenmo"
            />
          </div>
          <Button type="submit">Send Frenmo</Button>
        </form>
      </div>
    );
  }
}

export default NewFrenmoForm;
