import React, { Component } from "react";
import "./FeedPage.css";
import FrenmoApiService from "../../services/frenmo-api-service";
import FrenmoContext from "../../contexts/FrenmoContext";
import { Button } from "../../components/Utils/Utils";
import PublicFeedItem from "../../components/PublicFeedItem/PublicFeedItem";
export default class FeedPage extends Component {
  state = {
    favors: []
  };

  static contextType = FrenmoContext;

  componentDidMount() {
    this.context.clearError();
    FrenmoApiService.getAllPublicFrenmos()
      .then(this.context.setAllPublic)
      .catch(this.context.setError);
    FrenmoApiService.getPersonalFrenmos()
      .then(this.context.setAllPersonal)
      .catch(this.context.setError);
    FrenmoApiService.getFriendFrenmos()
      .then(this.context.setAllFriend)
      .catch(this.context.setError);
  }

  redirectToTarget = favorId => {
    const { history } = this.props;
    history.push(`/frenmos/${favorId}`);
  };

  renderPublicity() {
    const { publicFrenmos, personalFrenmos, friendFrenmos } = this.context;

    return (
      <>
        <Button onClick={() => this.setState({ favors: publicFrenmos })}>
          Public
        </Button>
        <Button onClick={() => this.setState({ favors: friendFrenmos })}>
          Friends
        </Button>
        <Button onClick={() => this.setState({ favors: personalFrenmos })}>
          Personal
        </Button>
      </>
    );
  }

  render() {
    const { favors } = this.state;
    //console.log(favors);
    return (
      <>
        {this.renderPublicity()}
        {favors.favors && (
          <div>
            {favors.favors.map((pubFavor, idx) => (
              <PublicFeedItem
                key={idx}
                favorId={pubFavor.id}
                title={pubFavor.title}
                description={pubFavor.description}
                creatorId={pubFavor.creator_id}
                expDate={pubFavor.expiration_date}
                publicity={pubFavor.publicity}
                category={pubFavor.category}
                originalLimit={pubFavor.limit}
                outstandingId={pubFavor.outstanding_id}
                receiverRedeemed={pubFavor.receiver_redeemed}
                issuerRedeemed={pubFavor.issuer_redeemed}
                createdByName={pubFavor.creator_name}
                createdByUser={pubFavor.creator_username}
                issuerId={pubFavor.issuer_id}
                issuedByName={pubFavor.issuer_name}
                issuedByUser={pubFavor.issuer_username}
                recdById={pubFavor.receiver_id}
                recdByName={pubFavor.receiver_name}
                recdByUser={pubFavor.receiver_username}
                onRedirect={this.redirectToTarget}
              />
            ))}
          </div>
        )}
      </>
    );
  }
}
