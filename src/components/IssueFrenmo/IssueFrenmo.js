import React, {
  Component
} from 'react';
import {
  Label,
  Input,
  Button
} from '../Utils/Utils';
import FrenmoApiService from '../../services/frenmo-api-service';
import UserContext from '../../contexts/UserContext';
import './IssueFrenmo.scss';
import { Redirect } from 'react-router-dom';
class IssueFrenmo extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    receiver: '',
    receiver_id: null,
    people: [],
    issued: false
  };

  componentDidMount() {
    this.setState({
      receiver: this.props.receiver,
      receiver_id: this.props
        .receiver_id
    });
  }

  handleChangePerson = async event => {
    //change person id and handle
    const terms = this.state.receiver;
    let possibleUsers = await FrenmoApiService.searchUser(
      terms
    );
    await this.setState({
      ...this.state,
      receiver_id:
        possibleUsers.length > 1
          ? possibleUsers[0].id
          : null,
      people: possibleUsers
    });
  };

  handleSelectPerson = async (
    receiver_id,
    receiver
  ) => {
    await this.setState({
      ...this.state,
      receiver_id,
      receiver
    });
  };
  static contextType = UserContext;

  renderRedirect = () => {
    if (this.state.issued) {
      return <Redirect to="/frenmos" />;
    }
  };
  render() {
    return (
      <>
        <form
          onSubmit={async e => {
            e.preventDefault();
            let newFrenmo = await FrenmoApiService.issueFrenmo(
              {
                users_id: this.context
                  .user.id,
                receiver_id: this.state
                  .receiver_id,
                favor_id: this.props
                  .favor_id,
                outstanding_id: this
                  .props.outstanding_id
              }
            );
            // this.props.history.push(
            //   '/frenmos'
            // );
            this.setState({
              issued: true
            });
          }}
        >
          {this.renderRedirect()}
          <div className="NewFrenmo__input-container">
            <Label htmlFor="NewFrenmo__receiver">
              Give To:
            </Label>
            <div>
              <div className="NewFrenmo__issue-button">
                {this.state.people.map(
                  (person, i) => {
                    return (
                      <div
                        key={i}
                        type="button"
                        className="issue-search"
                        value={
                          person.username
                        }
                        onClick={event => {
                          this.handleSelectPerson(
                            person.id,
                            person.username
                          );
                        }}
                      >
                        {
                          person.username
                        }
                      </div>
                    );
                  }
                )}
              </div>
            </div>
            <Input
              type="text"
              name="receiver"
              id="NewFrenmo__receiver"
              aria-label="Add receiver for frenmo"
              value={
                this.state.receiver
              }
              onChange={async event => {
                await this.handleSelectPerson(
                  this.state
                    .receiver_id,
                  event.target.value
                );
                await this.handleChangePerson(
                  event
                );
              }}
            />
            <div className="btn-container">
              <Button
                type="submit"
                className="issue-button"
              >
                Issue Another!
              </Button>
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default IssueFrenmo;
