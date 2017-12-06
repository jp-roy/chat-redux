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
