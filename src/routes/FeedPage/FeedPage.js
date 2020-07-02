import React, { Component } from "react";
import { Link } from "react-router-dom";
import FrenmoContext from "../../contexts/FrenmoContext";
import { Button } from "../../components/Utils/Utils";
import SideNavMenu from "../../components/SideNavMenu/SideNavMenu";
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
      publicity: "",
    };
    this.state = state;
  }

  async componentDidMount() {
    await this.context.addFrenmo();
    this.setState({
      favors: this.context.allPublicFrenmos.favors,
      friends: false,
    });
    this.context.clearError();
  }

  redirectToTarget = (favorId) => {
    const { history } = this.props;
    history.push(`/frenmos/${favorId}`);
  };

  renderPublicity() {
    const { allPublicFrenmos, personalFrenmos, friendFrenmos } = this.context;

    return (
      <div className="buttons-container">
        <Button
          className="buttons"
          onClick={() =>
            this.setState({
              favors: allPublicFrenmos.favors,
              publicity: "public",
              which: 1,
            })
          }
        >
          Public
        </Button>
        <Button
          className="buttons"
          onClick={() =>
            this.setState({
              favors: friendFrenmos.favors,
              publicity: "friends",
              which: 2,
            })
          }
        >
          Friends
        </Button>
        <Button
          className="buttons"
          onClick={() =>
            this.setState({
              favors: personalFrenmos.favors,
              publicity: "personal",

              which: 3,
            })
          }
        >
          Private
        </Button>
      </div>
    );
  }

  render() {
    const { favors, publicity } = this.state;
    const { friendFrenmos, personalFrenmos, allPublicFrenmos } = this.context;

    return (
      <div className="FeedPage">
        <div>
          <SideNavMenu />
        </div>
        <div className="FeedPage__main">
          <div>{this.renderPublicity()}</div>

          {publicity === "friends" && (
            <Link to="/friends" className="FeedPage__Add-link">
              <div className="FeedPage__Add-button">
                <div className="FeedPage__Add-button-add">
                  <FontAwesomeIcon icon={faPlus} />
                  <FontAwesomeIcon icon={faUser} />
                </div>
              </div>
            </Link>
          )}

          {publicity === "friends" && !friendFrenmos.favors.length && (
            <div className="welcome-message">
              <div>
                No frenmos yet. Connect with your friends and start swapping
                favors!
              </div>
            </div>
          )}

          {publicity === "personal" && !personalFrenmos.favors.length && (
            <div className="welcome-message">
              <div>
                <div className="big">Brand new to Frenmo?</div>
                <div className="divider"></div>
                Create favors and start swapping them with{" "}
                <div className="smaller">your friends, </div>
                <div className="small">your family, </div>
                <div className="medium">your neighbors, </div>
                <div className="big">your community, </div>
                <div className="bigger">the world.</div>
              </div>
            </div>
          )}

          {publicity === "public" && !allPublicFrenmos.favors.length && (
            <div className="welcome-message">
              <div>
                Welcome to Frenmo! Toggle feed buttons to view favors from the
                public, from your friends, and those that are just for you!
              </div>
            </div>
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
        </div>
      </div>
    );
  }
}
