import { combineReducers } from 'redux';

import { SET_NAME } from 'actions';

function name(state = null, action) {
  switch (action.type) {
    case SET_NAME:
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({ name });
