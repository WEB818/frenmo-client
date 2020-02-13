import React, { Component } from "react";
import EditFrenmoForm from "../../components/EditFrenmoForm/EditFrenmoForm";
import "./EditFrenmoPage.css";

class EditFrenmoPage extends Component {
  render() {
    const { title } = this.props.location.state;

    return (
      <div className="FrenmoForm__view">
        <h2>{title}</h2>
        <EditFrenmoForm />
      </div>
    );
  }
}

export default EditFrenmoPage;
