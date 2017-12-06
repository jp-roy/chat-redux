// TODO: add and export your own actions
export function setChannels() {
  return {
    type: 'SET_CHANNELS',
    payload: channels
  }
}

export function selectChannel(channel) {
  return {
    type: 'SELECT_CHANNEL',
    payload: channel
  }
}

export function getMessages() {
  const promise = fetch('https://wagon-chat.herokuapp.com/general/messages')
    .then(response => response.json());

  return {
    type: 'GET_MESSAGES',
    payload: promise
  };
}
