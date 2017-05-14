import { combineReducers } from 'redux';

import User from './UserReducer';
import Messages from './MessageReducer';

const rootReducer = combineReducers({
    User,
    Messages
});

export default rootReducer;
