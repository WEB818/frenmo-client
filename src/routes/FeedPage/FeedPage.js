import React, {
  Component
} from 'react';
import './FeedPage.css';
import FrenmoApiService from '../../services/frenmo-api-service';
import FrenmoContext from '../../contexts/FrenmoContext';
import PublicFeedItem from '../../components/PublicFeedItem/PublicFeedItem';
export default class FeedPage extends Component {
  static defaultProps = {
    favors: []
  };

  static contextType = FrenmoContext;

  componentDidMount() {
    this.context.clearError();
    FrenmoApiService.getAllPublicFrenmos()
      .then(this.context.setAllPublic)
      .catch(this.context.setError);
  }

  redirectToTarget = favorId => {
    const { history } = this.props;
    history.push(`/frenmos/${favorId}`);
  };

  render() {
    const {
      publicFrenmos
    } = this.context;

    return (
      <>
        {publicFrenmos.favors && (
          <div>

            {publicFrenmos.favors.map(
              (pubFavor, idx) => (
                <PublicFeedItem
                  key={idx}
                  favorId={pubFavor.id}
                  title={pubFavor.title}
                  description={
                    pubFavor.description
                  }
                  creatorId={
                    pubFavor.creator_id
                  }
                  expDate={
                    pubFavor.expiration_date
                  }
                  publicity={
                    pubFavor.publicity
                  }
                  category={
                    pubFavor.category
                  }
                  originalLimit={
                    pubFavor.limit
                  }
                  outstandingId={
                    pubFavor.outstanding_id
                  }
                  receiverRedeemed={
                    pubFavor.receiver_redeemed
                  }
                  issuerRedeemed={
                    pubFavor.issuer_redeemed
                  }
                  createdByName={
                    pubFavor.creator_name
                  }
                  createdByUser={
                    pubFavor.creator_username
                  }
                  issuerId={
                    pubFavor.issuer_id
                  }
                  issuedByName={
                    pubFavor.issuer_name
                  }
                  issuedByUser={
                    pubFavor.issuer_username
                  }
                  recdById={
                    pubFavor.receiver_id
                  }
                  recdByName={
                    pubFavor.receiver_name
                  }
                  recdByUser={
                    pubFavor.receiver_username
                  }
onRedirect={this.redirectToTarget}
                />
              )
            )}

          </div>
        )}
      </>
    );
  }
}
