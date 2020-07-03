import * as React from "react";
import FrenmoApiService from "../../services/frenmo-api-service";
import { Button } from "../../components/Utils/Utils";
export default class ConfirmRedeemFrenmo extends React.Component {
  handleRedeemFrenmo = (event) => {
    event.preventDefault();
    FrenmoApiService.redeemFrenmo(
      this.props.favor_id,
      this.props.outstanding_id
    );
  };

  render() {
    return (
      <>
        <form
          className="ConfirmRedeemFrenmo"
          onSubmit={this.handleRedeemFrenmo}
        >
          <div>
            <Button type="submit">Confirm Redeemed Frenmo</Button>
          </div>
        </form>
      </>
    );
  }
}
