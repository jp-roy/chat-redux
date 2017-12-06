// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// State and reducers
import messagesReducer from './reducers/messages_reducer';
import channelsReducer from './reducers/channels_reducer';
import selectedChannelReducer from './reducers/selected_channel_reducer';
import currentUsernameReducer from './reducers/current_username_reducer';

const reducers = combineReducers({
  messages: messagesReducer,
  channels: channelsReducer,
  selectedChannel: selectedChannelReducer,
  currentUsername: currentUsernameReducer
});

// Middlewares
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(logger, reduxPromise));

// render an instance of the component in the DOM
const initialState = {
  messages: [],
  channels: ["general", "react", "paris"],
  selectedChannel: "general",
  currentUsername: prompt("What is your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`
  // currentUsername: "Jeanfil"
};

ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);



