import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { channels } from '../actions';

class Channels extends Component {

  componentWillMount() {
    // TODO
  }

  render() {
    return (
      <div className="channels">
        <h1>Redux chat</h1>
        {this.props.channels.map((channel) => <p key={channel} onClick={() => this.props.selectChannel(channel)}>{channel}</p> )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    channels: state.channels
  };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(
//     { selectChannel },
//     dispatch
//   );
// }

export default connect(mapStateToProps)(Channels);
// export default connect(mapStateToProps, mapDispatchToProps)(Channels);
