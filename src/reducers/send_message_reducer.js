export default function(state = null, action) {
  switch (action.type) {
    case 'SEND_MESSAGE':
      return action.payload;
    default:
      return state;
  }
}
