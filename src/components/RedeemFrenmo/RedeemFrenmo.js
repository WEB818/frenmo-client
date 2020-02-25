import * as React from "react";
import FrenmoApiService from "../../services/frenmo-api-service";
import { Button } from "../../components/Utils/Utils";
export class RedeemFrenmo extends React.Component {
  static defaultProps = {
    onRedemption: () => {}
  };

  handleRedeemFrenmo = event => {
    const { favor_id, outstanding_id } = this.props;
    event.preventDefault();
    console.log(favor_id, outstanding_id);
    FrenmoApiService.redeemFrenmo(favor_id, outstanding_id).then(
      this.props.onRedemption()
    );
  };

  render() {
    return (
      <>
        <form className="RedeemFrenmo" onSubmit={this.handleRedeemFrenmo}>
          <div>
            <Button type="submit">Redeem Frenmo</Button>
          </div>
        </form>
      </>
    );
  }
}
