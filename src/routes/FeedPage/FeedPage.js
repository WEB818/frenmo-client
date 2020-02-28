import React, { Component } from "react";
import { Link } from "react-router-dom";
import FrenmoApiService from "../../services/frenmo-api-service";
import FrenmoContext from "../../contexts/FrenmoContext";
import { Button } from "../../components/Utils/Utils";
import PublicFeedItem from "../../components/PublicFeedItem/PublicFeedItem";
import "./FeedPage.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faUser } from "@fortawesome/free-solid-svg-icons";
export default class FeedPage extends Component {
  static contextType = FrenmoContext;

  constructor(props) {
    super(props);
    const state = {
      favors: [],
      which: 2,
      publicity: ""
    };
    this.state = state;
  }

  async componentDidMount() {
    await this.context.addFrenmo();
    this.setState({
      favors: this.context.allPublicFrenmos.favors,
      friends: false
    });
    this.context.clearError();
  }

  // currently not implemented, should route to frenmo detail that lets user redeem or do whatever depending on what is available
  redirectToTarget = favorId => {
    const { history } = this.props;
    history.push(`/frenmos/${favorId}`);
  };

  renderPublicity() {
    const { allPublicFrenmos, personalFrenmos, friendFrenmos } = this.context;

    return (
      <>
        <Button
          id="feed-btn"
          onClick={() =>
            this.setState({
              favors: allPublicFrenmos.favors,
              publicity: "public",

              which: 1
            })
          }
        >
          Public
        </Button>
        <Button
          id="feed-btn"
          onClick={() =>
            this.setState({
              favors: friendFrenmos.favors,
              publicity: "friends",
              which: 2
            })
          }
        >
          Friends
        </Button>
        <Button
          id="feed-btn"
          onClick={() =>
            this.setState({
              favors: personalFrenmos.favors,
              publicity: "personal",

              which: 3
            })
          }
        >
          Personal
        </Button>
      </>
    );
  }

  render() {
    const { favors, publicity } = this.state;
    const { friendFrenmos, personalFrenmos, allPublicFrenmos } = this.context;

    return (
      <>
        <div className="FeedPage__Buttons">{this.renderPublicity()}</div>
        {publicity === "friends" && (
          <Link to="/friends" className="FeedPage__Add-link">
            <div className="FeedPage__add">
              <div className="FeedPage__Add-button">
                <FontAwesomeIcon icon={faPlus} />
                <FontAwesomeIcon icon={faUser} />
              </div>
            </div>
          </Link>
        )}

        {publicity === "friends" && !friendFrenmos.favors.length && (
          <div className="welcome-message">
            No frenmos yet. Connect with your friends and start swapping favors!
          </div>
        )}

        {publicity === "personal" && !personalFrenmos.favors.length && (
          <div className="welcome-message">
            Brand new to Frenmo?
            <br />
            Create favors and start swapping them with{" "}
            <span className="text smaller">your friends, </span>
            <span className="text small">your family, </span>
            <span className="text medium">your neighbors, </span>
            <span className="text big">your community, </span>
            <span className="text bigger">the world.</span>
          </div>
        )}

        {publicity === "public" && !allPublicFrenmos.favors.length && (
          <p className="welcome-message">
            Welcome to Frenmo! Toggle feed buttons to view activity from the
            public, from your friends, and for your private favors.
          </p>
        )}

        {favors && (
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
