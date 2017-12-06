import React from 'react';

import Channels from '../containers/channels.jsx'

const App = () => {
  return (
    <div className="app">
      <div className="logo">
        <img src="https://images.vexels.com/media/users/3/129998/isolated/preview/a0f7721448e400ab5e2ec3bcd3b60d72-customer-agent-headshot-icon-by-vexels.png" alt=""/>
      </div>
      <Channels />
      <div className="channel"></div>
    </div>
  );
};

export default App;
