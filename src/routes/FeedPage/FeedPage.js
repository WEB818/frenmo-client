import React, { Component } from "react";
import "./FeedPage.css";
import FrenmoApiService from "../../services/frenmo-api-service";
import FrenmoContext from "../../contexts/FrenmoContext";
import PublicFeedItem from "../../components/PublicFeedItem/PublicFeedItem";
export default class FeedPage extends Component {
  static defaultProps = {
    favors: []
  };

  static contextType = FrenmoContext;

  componentDidMount() {
    this.context.clearError();
    FrenmoApiService.getPublicFrenmos()
      .then(this.context.setAllPublic)
      .catch(this.context.setError);
  }

  render() {
    const { publicFrenmos } = this.context;
    console.log("pub frens in feed", publicFrenmos);

    return (
      <>
        {publicFrenmos.favors && (
          <div>
            {publicFrenmos.favors.map((pubFavor, idx) => (
              <PublicFeedItem
                key={idx}
                favorId={pubFavor.favor_id}
                title={pubFavor.title}
                description={pubFavor.description}
                category={pubFavor.category}
                expDate={pubFavor.expiration_date}
                originalLimit={pubFavor.limit}
                outstandingId={pubFavor.outstanding_id}
                creatorId={pubFavor.creator_id}
                createdByName={pubFavor.creator_name}
                createdByUser={pubFavor.creator_username}
                issuerId={pubFavor.issuer_id}
                issuedByName={pubFavor.issuer_name}
                issuedByUser={pubFavor.issuer_username}
                recdById={pubFavor.receiver_id}
                recdByName={pubFavor.receiver_name}
                recdByUser={pubFavor.receiver_username}
              />
            ))}
          </div>
        )}
      </>
    );
  }
}
