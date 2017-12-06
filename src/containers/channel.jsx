import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import { channels } from '../actions';
// import { selectChannel } from '../actions';

class Channel extends Component {

  componentWillMount() {
    // TODO
  }

  render() {
    return (
      <div className="channel">
        <h1>Channel {this.props.selectedChannel}</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedChannel: state.selectedChannel
  };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(
//     { selectChannel },
//     dispatch
//   );
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Channels);
export default connect(mapStateToProps)(Channel);
