import React, { Component } from "react";
import { Link } from "react-router-dom";
import FrenmoContext from "../../contexts/FrenmoContext";
import SideNavMenu from "../../components/SideNavMenu/SideNavMenu";
import PublicFeedItem from "../../components/PublicFeedItem/PublicFeedItem";
import FeedButton from "../../components/FeedButton/FeedButton";
import "./FeedPage.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faUser,
  faQuestionCircle,
  faArrowRight,
  faComment,
  faGift,
  faTimes,
  faStopwatch,
} from "@fortawesome/free-solid-svg-icons";
import PopularFrenmos from "../../components/PopularFrenmos/PopularFrenmos";
export default class FeedPage extends Component {
  static contextType = FrenmoContext;

  constructor(props) {
    super(props);
    this.state = {
      favors: [],
      publicity: "",
      activeIndex: 0,
      expanded: false,
    };
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
  handleSetActive = (index, pub, favors) => {
    this.setState({
      activeIndex: index,
      publicity: pub,
      favors: favors,
    });
  };
  handleExpandedToggle = () => {
    this.setState((prevState) => ({
      expanded: !prevState.expanded,
    }));
  };

  renderHelp() {
    const { expanded } = this.state;
    return (
      <>
        {expanded && (
          <div className="FeedPage__modal">
            <div className="FeedPage__modal-content">
              <div className="FeedPage__icon-container">
                <h3 className="PublicFeedItem__frenmo">Icon Legend</h3>
                <FontAwesomeIcon
                  icon={faTimes}
                  onClick={this.handleExpandedToggle}
                  className="FeedPage__icon receiver"
                />
              </div>
              <div className="FeedPage__icon-container">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="FeedPage__icon receiver"
                />
                <p>Frenmo was issued to</p>
              </div>
              <div className="FeedPage__icon-container">
                <FontAwesomeIcon
                  icon={faComment}
                  className="FeedPage__icon description"
                />
                <p>Description of Frenmo</p>
              </div>
              <div className="FeedPage__icon-container">
                <FontAwesomeIcon
                  icon={faGift}
                  className="FeedPage__icon issuer"
                />
                <p>Frenmo was issued by</p>
              </div>
              <div className="FeedPage__icon-container">
                <FontAwesomeIcon
                  icon={faStopwatch}
                  className="FeedPage__icon expdate"
                />
                <p>Redeemable until this date</p>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  handleSetActive = (index, pub, favors) => {
    this.setState({
      activeIndex: index,
      publicity: pub,
      favors: favors,
    });
  };
  renderPublicity() {
    const { allPublicFrenmos, personalFrenmos, friendFrenmos } = this.context;

    return (
      <div className="buttons-container">
        <FeedButton
          index={0}
          name="Public"
          isActive={this.state.activeIndex === 0}
          onClick={(index) =>
            this.handleSetActive(index, "public", allPublicFrenmos.favors)
          }
        >
          Public
        </FeedButton>
        <FeedButton
          index={1}
          name="Friends"
          isActive={this.state.activeIndex === 1}
          onClick={(index) =>
            this.handleSetActive(index, "friends", friendFrenmos.favors)
          }
        >
          Friends
        </FeedButton>
        <FeedButton
          index={2}
          name="Private"
          isActive={this.state.activeIndex === 2}
          onClick={(index) =>
            this.handleSetActive(index, "personal", personalFrenmos.favors)
          }
        >
          Private
        </FeedButton>
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
          <FontAwesomeIcon
            className="q-mark"
            icon={faQuestionCircle}
            onClick={this.handleExpandedToggle}
          />
          <div>{this.renderHelp()}</div>
          <div>
            <h3 className="FeedPage__header">
              Making the world a better place one Frenmo at a time.
            </h3>
            {this.renderPublicity()}
          </div>

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
        <div className="popular-container">
          <h4 className="FeedPage__header">Popular Frenmos</h4>
          <div>
            <PopularFrenmos />
          </div>
        </div>
      </div>
    );
  }
}
