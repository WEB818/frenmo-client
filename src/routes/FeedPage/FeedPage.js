import React, { Component } from "react";
import FrenmoApiService from "../../services/frenmo-api-service";
import FrenmoContext from "../../contexts/FrenmoContext";
import { Button } from "../../components/Utils/Utils";
import PublicFeedItem from "../../components/PublicFeedItem/PublicFeedItem";

import "./FeedPage.css";
export default class FeedPage extends Component {
  state = {
    favors: []
  };

  static contextType = FrenmoContext;

  // componentDidMount() {
  //   this.context.clearError();
  //   FrenmoApiService.getAllPublicFrenmos()
  //     .then(this.context.setAllPublic)
  //     .catch(this.context.setError);
  //   FrenmoApiService.getPersonalFrenmos()
  //     .then(this.context.setAllPersonal)
  //     .catch(this.context.setError);
  //   FrenmoApiService.getFriendFrenmos()
  //     .then(this.context.setAllFriend)
  //     .catch(this.context.setError);
  // }

  // currently not implemented, should route to frenmo detail that lets user redeem or do whatever depending on what is available
  redirectToTarget = favorId => {
    const { history } = this.props;
    history.push(`/frenmos/${favorId}`);
  };

  renderPublicity() {
    const { allPublicFrenmos, personalFrenmos, friendFrenmos } = this.context;

    return (
      <>
        <Button onClick={() => this.setState({ favors: allPublicFrenmos })}>
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

    return (
      <>
        <div className="FeedPage__Buttons">{this.renderPublicity()}</div>
        <div>
          {favors.map((pubFavor, idx) => (
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
