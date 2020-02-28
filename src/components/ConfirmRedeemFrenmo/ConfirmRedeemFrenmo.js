import * as React from 'react';
import FrenmoApiService from '../../services/frenmo-api-service';
export default class ConfirmRedeemFrenmo extends React.Component {
  handleRedeemFrenmo = event => {
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
          onSubmit={
            this.handleRedeemFrenmo
          }
        >
          <div>
            <button type="submit">
              Confirmed Redeemed Frenmo
            </button>
          </div>
        </form>
      </>
    );
  }
}
