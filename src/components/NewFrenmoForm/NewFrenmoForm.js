import React, {
  Component
} from 'react';

import FrenmoContext from '../../contexts/FrenmoContext';
import FrenmoApiService from '../../services/frenmo-api-service';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  Button,
  Label,
  Input,
  Textarea
} from '../Utils/Utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import './NewFrenmoForm.scss';
import {
  useHistory,
  Redirect
} from 'react-router-dom';

class NewFrenmoForm extends Component {
  static defaultProps = {
    match: { params: {} },
    history: {
      push: () => {}
    },
    onRedirect: () => {}
  };

  static contextType = FrenmoContext;
  state = {
    expDate: new Date(),
    postRes: {},
    give: true,
    ask: false,
    publicity: null,
    receiver_id: null,
    users_id: null,
    receiver: '',
    user: '',
    people: [],
    submitted: false,
    error: null,
    limitToolTip: false,
    limitToolTipCounter: 0
  };

  handleChange = date => {
    this.setState({
      expDate: date
    });
  };
  handleGetInfo = () => {
    this.setState({ getInfo: true });
  };

  handleChangePerson = async event => {
    //change person id and handle
    let { receiver, user } = this.state;
    const terms = this.state.give
      ? receiver
      : user;

    const setid = this.state.give
      ? 'receiver'
      : 'users';
    let possibleUsers = await FrenmoApiService.searchUser(
      terms
    );
    await this.setState({
      ...this.state,
      [`${
        setid === 'users'
          ? 'user'
          : setid
      }_id`]:
        possibleUsers.length > 0
          ? possibleUsers[0].id
          : null,

      people: possibleUsers
    });
  };

  renderSelect = () => {};

  handleSelectPerson = async (
    id,
    person
  ) => {
    const setid = this.state.give
      ? 'receiver'
      : 'user';
    await this.setState({
      ...this.state,
      [`${
        setid === 'user'
          ? setid + 's'
          : setid
      }_id`]: id,
      [setid]: person
    });
  };

  handleIssue = fields => {
    FrenmoApiService.issueFrenmo(fields)
      .then(() => {
        //do a set state
      })
      .catch();
  };

  handleSubmit = event => {
    event.preventDefault();

    let {
      title,
      description,
      category,
      expiration_date,
      publicity,
      receiver,
      user,
      limit
    } = event.target;

    title = title.value.trim();
    description = description.value.trim();
    if (
      title.length === 0 ||
      description.length === 0
    ) {
      this.setState({
        error:
          'title or description must not be empty'
      });
      return;
    }

    FrenmoApiService.postFrenmo(
      title,
      description,
      category.value,
      expiration_date.value,
      publicity.value,
      limit.value
    )
      .then(postRes => {
        //get the favor_id from the post
        //get the receiver_id and the users_id from the state
        let {
          receiver_id,
          users_id,
          favor_id
        } = postRes;
        if (this.state.give) {
          this.handleIssue({
            receiver_id: this.state
              .receiver_id,
            favor_id,
            users_id
          });
        } else {
          this.handleIssue({
            receiver_id: users_id,
            favor_id,
            users_id: this.state
              .users_id
          });
        }
        this.setState({
          postRes,
          submitted: true
        });
        this.props.history.push(
          '/feed'
        );
      })
      .then(this.context.addFrenmo)
      .catch(this.context.setError);
  };

  renderForm = () => {
    let personSelection = (
      <div>
        {this.state.people.map(
          (person, i) => {
            return (
              <Button
                key={i}
                type="button"
                value={person.username}
                onClick={event => {
                  this.handleSelectPerson(
                    person.id,
                    person.username
                  );
                }}
              >
                {person.username}
              </Button>
            );
          }
        )}
      </div>
    );
    let sendPortion = (
      <>
        <div className="NewFrenmo__input-container">
          <Label htmlFor="NewFrenmo__receiver">
            Give To:
          </Label>
          <div>{personSelection}</div>
          <Input
            type="text"
            name="receiver"
            id="NewFrenmo__receiver"
            aria-label="Add receiver for frenmo"
            value={this.state.receiver}
            onChange={async event => {
              await this.handleSelectPerson(
                this.state.receiver_id,
                event.target.value
              );
              await this.handleChangePerson(
                event
              );
            }}
          />
        </div>
        <Button type="submit">
          Send Frenmo
        </Button>
      </>
    );
    let askPortion = (
      <>
        <div className="NewFrenmo__input-container">
          <Label htmlFor="NewFrenmo__user">
            Request From:
          </Label>
          <div>{personSelection}</div>
          <Input
            type="text"
            name="user"
            id="NewFrenmo__user"
            aria-label="Add user for frenmo"
            value={this.state.user}
            onChange={async event => {
              event.persist();
              await this.handleSelectPerson(
                this.state.users_id,
                event.target.value
              );
              await this.handleChangePerson(
                event
              );
            }}
          />
        </div>
        <Button type="submit">
          Request Frenmo
        </Button>
      </>
    );
    let formtype;
    let giverOrReceiver;
    if (this.state.give) {
      formtype = 'send';
      giverOrReceiver = sendPortion;
    } else if (this.state.ask) {
      formtype = 'ask';
      giverOrReceiver = askPortion;
    }
    let generalForm = (
      <form
        className={`NewFrenmoForm__${formtype}`}
        onSubmit={this.handleSubmit}
      >
        {this.renderError()}
        <Input
          type="text"
          name="title"
          id="NewFrenmo__title"
          placeholder="Redeemable for..."
          aria-label="Add title for frenmo"
          maxLength="40"
          required
        />

        <Textarea
          id="NewFrenmo__description"
          name="description"
          placeholder="Add a message or description..."
          aria-label="Add description for frenmo"
          maxLength="300"
          required
        />

        <select
          id="NewFrenmo__category"
          name="category"
          aria-label="Select category for frenmo"
          required
        >
          {/** TODO:can generate this on the fly from categories */}
          <option value="13">
            --Please choose a category--
          </option>
          <option value="1">
            Advice
          </option>
          <option value="2">
            Career
          </option>
          <option value="3">
            Community
          </option>
          <option value="4">
            Creative
          </option>
          <option value="5">
            Education
          </option>
          <option value="6">
            Emergency
          </option>
          <option value="7">
            Family
          </option>
          <option value="8">
            Food
          </option>
          <option value="9">
            Gaming
          </option>
          <option value="10">
            Health
          </option>
          <option value="11">IT</option>
          <option value="12">
            Kids
          </option>
          <option value="13">
            Miscellaneous
          </option>
          <option value="14">
            Needs fixing
          </option>
          <option value="15">
            Pets
          </option>
          <option value="16">
            Plants
          </option>
          <option value="17">
            Relationship
          </option>
          <option value="18">
            Religion & Spirituality
          </option>
          <option value="19">
            Ridesharing
          </option>
          <option value="20">
            Sports
          </option>
          <option value="21">
            Travel
          </option>
          <option value="22">
            Volunteers Needed
          </option>
          <option value="23">
            Wedding
          </option>
        </select>
        <div className="NewFrenmo__input-container">
          <Label htmlFor="NewFrenmo__expiration-date">
            Valid until:
          </Label>
          <DatePicker
            selected={
              this.state.expDate
            }
            onChange={this.handleChange}
            id="NewFrenmo__expiration-date"
            name="expiration_date"
            aria-label="Select expiration date for frenmo"
          />
        </div>
        <select
          id="NewFrenmo__publicity"
          name="publicity"
          aria-label="Select privacy setting for frenmo"
          onChange={event => {
            this.setState({
              publicity:
                event.target.value
            });
          }}
          required
        >
          <option value="dm">
            Direct Message
          </option>
          <option value="friend">
            Friends Only
          </option>
          <option value="public">
            Public
          </option>
        </select>
        <div className="NewFrenmo__tipBox">
          {this.renderLimitTip()}
        </div>
        <div className="NewFrenmo__input-container">
          <Label
            htmlFor="NewFrenmo__limit"
            className="limit-label"
          >
            Set Limit:{' '}
            <FontAwesomeIcon
              icon={faInfoCircle}
              className="NewFrenmo__toolTip"
              onClick={async () => {
                await this.setState({
                  limitToolTip: !this
                    .state.limitToolTip
                });
                if (
                  this.state
                    .limitToolTip
                ) {
                  if (
                    this.state
                      .limitToolTipCounter >
                    1
                  ) {
                    this.setState({
                      limitToolTipCounter: 7
                    });
                  } else {
                    this.setState({
                      limitToolTipCounter: 7
                    });
                    const limitTimer = setInterval(
                      () => {
                        if (
                          this.state
                            .limitToolTipCounter <
                          1
                        ) {
                          this.setState(
                            {
                              limitToolTip: false
                            }
                          );
                          clearInterval(
                            limitTimer
                          );
                          return;
                        }

                        this.setState({
                          limitToolTipCounter: --this
                            .state
                            .limitToolTipCounter
                        });
                      },
                      1000
                    );
                  }
                } else {
                  this.setState({
                    limitToolTipCounter: 0
                  });
                }
              }}
            />
          </Label>
          <Input
            type="number"
            name="limit"
            id="NewFrenmo__limit"
            min="1"
            aria-label="Add limit for frenmo"
            placeholder="Number of uses for this favor"
          />
        </div>
        {giverOrReceiver}
      </form>
    );
    return generalForm;
  };

  renderRedirect = () => {
    if (this.state.submitted) {
      return <Redirect to="/feed" />;
    }
  };

  renderError = () => {
    if (this.state.error) {
      return (
        <div className="NewFrenmoForm__error">
          <p>{this.state.error}</p>
        </div>
      );
    }
  };

  renderLimitTip = () => {
    if (this.state.limitToolTip) {
      return (
        <div className="NewFrenmoForm__limitToolTip">
          <p>
            2 Billion by default. Set
            the amount you want to
            issue/ask for. Keeps you
            from going nuts.
          </p>
        </div>
      );
    }
  };

  render() {
    return (
      <div className="NewFrenmoForm">
        {this.renderRedirect()}
        <div className="NewFrenmoForm__Buttons">
          <Button
            type="button"
            id="give-favor"
            onClick={() =>
              this.setState({
                ...this.state,
                give: true,
                ask: false
              })
            }
          >
            Give a favor
          </Button>
          <Button
            type="button"
            id="ask-favor"
            onClick={() =>
              this.setState({
                ...this.state,
                give: false,
                ask: true
              })
            }
          >
            Ask a favor
          </Button>
        </div>
        {this.renderForm()}
      </div>
    );
  }
}

export default NewFrenmoForm;
