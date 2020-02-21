import React, {
  Component
} from 'react';
import {
  Label,
  Input
} from '../Utils/Utils';
import FrenmoApiService from '../../services/frenmo-api-service';
import UserContext from '../../contexts/UserContext';

class IssueFrenmo extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    receiver: '',
    receiver_id: null,
    people: []
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
        possibleUsers !== []
          ? possibleUsers[0].id
          : null,
      people: possibleUsers
    });
  };

  handleSelectPerson = async (
    receiver_id,
    receiver
  ) => {
    console.log(receiver_id, receiver);
    await this.setState({
      ...this.state,
      receiver_id,
      receiver
    });
    console.log(this.state.receiver);
  };
  static contextType = UserContext;
  render() {
    return (
      <>
        <form>
          <div className="NewFrenmo__input-container">
            <Label htmlFor="NewFrenmo__receiver">
              Give To:
            </Label>
            <div>
              <div>
                {this.state.people.map(
                  (person, i) => {
                    return (
                      <button
                        key={i}
                        type="button"
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
                      </button>
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
                console.log(
                  this.state.receiver
                );
                await this.handleChangePerson(
                  event
                );
              }}
            />
          </div>
        </form>
      </>
    );
  }
}

export default IssueFrenmo;
