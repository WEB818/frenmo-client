import React, { Component } from "react";
import NewFrenmoForm from "../../components/NewFrenmoForm/NewFrenmoForm";

class NewFrenmoPage extends Component {
  //header nav as header? add header if not
  render() {
    return (
      <>
        <h2>New Frenmo</h2>
        <div>
          <button>Send</button>
          <button>Request</button>
          <NewFrenmoForm />
        </div>
      </>
    );
  }
}

export default NewFrenmoPage;
