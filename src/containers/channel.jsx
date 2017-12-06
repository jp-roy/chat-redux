import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getMessages } from '../actions';

import stringToColour from '../../assets/javascript/channel.js';
import Moment from 'react-moment';

class Channel extends Component {

  componentWillMount() {
    this.props.getMessages();
  }


  render() {
    return (
      <div className="channel">
        <div className="message-list">
          <h1>Channel {this.props.selectedChannel}</h1>
          {this.props.messages.map((message) =>
            <div className="message" key={message.created_at}>
              <div className="header">
                <span className="author" style={{ color: stringToColour(message.author) }}>{message.author}</span>
                <span className="ts"> -

                    <Moment format="dd.mm.yyyy hh:MM:ss">
                      {message.created_at}
                    </Moment>
                </span>
              </div>
              <div className="content">{message.content}</div>
            </div>
          )}
        </div>
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
