import React, { Component } from "react";
import FrenmoContext from "../../contexts/FrenmoContext";
import EditFrenmoForm from "../../components/EditFrenmoForm/EditFrenmoForm";
import FrenmoDetail from "../../components/FrenmoDetail/FrenmoDetail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./EditFrenmoPage.css";

class EditFrenmoPage extends Component {
  static defaultProps = {
    match: {
      params: {}
    }
  };

  static contextType = FrenmoContext;
  state = {
    edit: false
  };

  handleToggleEdit = () => {
    this.setState(prevState => ({
      edit: !prevState.edit
    }));
  };

  render() {
    const {
      title,
      description,
      expiration_date,
      publicity,
      tags,
      createdBy,
      issuedBy,
      receivedBy
    } = this.props;

    const { edit } = this.state;
    console.log(
      "ineditpage",
      title,
      description,
      expiration_date,
      publicity,
      tags,
      createdBy,
      issuedBy,
      receivedBy
    );
    return (
      <div className="FrenmoForm__view">
        {edit && <EditFrenmoForm />}

        {edit && (
          <FontAwesomeIcon
            icon={faTimes}
            className="edit-icons"
            onClick={this.handleToggleEdit}
          />
        )}

        {!edit && (
          <FrenmoDetail
            title={title}
            description={description}
            expiration_date={expiration_date}
            publicity={publicity}
            tags={tags}
            createdBy={createdBy}
            issuedBy={issuedBy}
            receivedBy={receivedBy}
          />
        )}
        {!edit && (
          <FontAwesomeIcon
            icon={faPencilAlt}
            className="edit-icons"
            onClick={this.handleToggleEdit}
          />
        )}
      </div>
    );
  }
}

export default EditFrenmoPage;
