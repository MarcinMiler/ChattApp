const initialState = {
    name: '',
    avatar: ''

};

const user = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER_NAME':
        return Object.assign({}, state, {name: action.name})

        case 'SET_USER_AVATAR':
        return Object.assign({}, state, {avatar: action.avatar})

    default:
      return state
  }
}

export default user;
