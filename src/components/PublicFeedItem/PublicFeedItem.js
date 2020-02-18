
import FrenmoApiService from "../../services/frenmo-api-service";
import Check from "../../images/check.png";
import React, {
  Component
} from 'react';
import UserContext from '../../contexts/UserContext';
import './PublicFeedItem.css';
import { formatRelative } from 'date-fns';

export default class PublicFeedItem extends Component {
  static defaultProps = {
    onRedirect: () => {}
  };


  static contextType = UserContext;

  handleRedemption = outstanding_id => {

    let {
      recdById,
      favorId,
      outstandingId,
      receiverRedeemed,
      issuerRedeemed
    } = this.props;
    const { user } = this.context;
    this.props.onRedirect(favorId);


  };

  render() {
    const {
      favorId,
      title,
      description,
      category,
      expDate,
      publicity,
      originalLimit,
      outstandingId,
      creatorId,
      createdByName,
      createdByUser,
      issuerId,
      issuedByName,
      issuedByUser,
      recdById,
      recdByName,
      recdByUser,
      issuerRedeemed,
      receiverRedeemed
    } = this.props;


    let redemption = 'UNUSED';
    if (receiverRedeemed) {
      redemption = 'PENDING';
      if (issuerRedeemed) {
        redemption = 'REDEEMED';
      }
    }

    return (
      <div className="PublicFeedItem__container">

        {recdById && <img src={Check} alt="check icon" />}
        <div className="PublicFeedItem__favor">
          <Link to={`/frenmos/${favorId}`}>
<div>

 <h3>{title}</h3>
            {recdByName && <p>To: {recdByName}</p>}
            {issuedByName && <p>From: {issuedByName}</p>}
            <p>Created by: {createdByName}</p>
            <p>
            Redeem by:{' '}
            {formatRelative(
              new Date(expDate),
              new Date(),
              0
            )}
          </p>

<div/>
          </Link>
        </div>
        {!recdById && (
          <button onClick={() => this.handleRedemption(outstandingId)}>
 Redeem
          </button>)}

        {recdById && (
          <h3>
            {redemption} (add icon)
          </h3>
        )}
      
        

           
        
      </div>
    );
  }
}
