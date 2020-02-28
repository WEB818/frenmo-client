import * as React from 'react';
import FrenmoApiService from '../../services/frenmo-api-service';
import { Button } from '../../components/Utils/Utils';
import './RedeemFrenmo.scss';

export default class RedeemFrenmo extends React.Component {
  static defaultProps = {
    onRedemption: () => {}
  };

  handleRedeemFrenmo = event => {
    const {
      favor_id,
      outstanding_id
    } = this.props;
    event.preventDefault();
    FrenmoApiService.redeemFrenmo(
      favor_id,
      outstanding_id
    )
      .then(this.props.onRedemption())
      .then(this.context.addFrenmo);
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
          <div className="btn-container">
            <Button
              type="submit"
              className="redeem-button"
            >
              Redeem Frenmo
            </Button>
          </div>
        </form>
      </>
    );
  }
}
