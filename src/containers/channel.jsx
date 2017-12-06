import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getMessages } from '../actions';
import MessageForm from '../containers/message_form.jsx'

import stringToColour from '../../assets/javascript/channel.js';
import Moment from 'react-moment';

class Channel extends Component {
  componentWillMount() {
    this.props.getMessages(this.props.selectedChannel);
  }

  componentWillReceiveProps(nextProps) {
    this.props.getMessages(nextProps.selectedChannel);
  }

  render() {
    return (
      <div className="channel">
        <h1>Channel {this.props.selectedChannel}</h1>
        <div className="message-list">
          {this.props.messages.map((message) =>
            <div className="message" key={message.created_at}>
              <div className="header">
                <span className="author" style={{ color: stringToColour(message.author) }}><strong>{message.author}</strong></span>
                <span className="time">&nbsp;-&nbsp;
                  <Moment format="HH:m:ss">
                    {message.created_at}
                  </Moment>
                </span>
              </div>
              <div className="content">{message.content}</div>
            </div>
          )}
        </div>
        <MessageForm />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedChannel: state.selectedChannel,
    messages: state.messages,
    currentUsername: state.currentUsername
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { getMessages },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Channel);
