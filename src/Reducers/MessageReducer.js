let initialState = {
  text: [],
  name: [],
  avatar: []
};

const Messages = (state = initialState, action) => {
  switch(action.type) {

    case "ADD_MESSAGE":
    return Object.assign({}, state, {text: [...action.text], name: [...action.name], avatar: [...action.avatar]})

    default:
    return state
  }
}

export default Messages;
