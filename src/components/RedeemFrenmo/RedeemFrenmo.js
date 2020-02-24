import * as React from 'react';
import FrenmoApiService from '../../services/frenmo-api-service';
export class RedeemFrenmo extends React.Component {
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
          className="RedeemFrenmo"
          onSubmit={
            this.handleRedeemFrenmo
          }
        >
          <div>
            <button type="submit">
              Redeem Frienmo
            </button>
          </div>
        </form>
      </>
    );
  }
}
