// @flow
import * as React from 'react';
export class PopupFeedback extends React.Component<
  Props,
  State
> {
  render() {
    return (
      <div>
        {this.props.feedbackMessage}
      </div>
    );
  }
}
