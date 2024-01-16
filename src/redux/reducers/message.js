import ActionTypes from '../actionTypes';

const INITIAL_STATE = {
  messages: [],
  pinnedMessage: null,
};

const messageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.ADD_PINNED_MESSAGE_REQUEST:
      const pinnedMessage = action.payload;
      return {...state, pinnedMessage};
    case ActionTypes.ADD_MESSAGE_REQUEST:
      const message = action.payload;
      return {...state, messages: [...state.messages, message]};
    case ActionTypes.CLEAR_MESSAGE_DATA_REQUEST:
      return {...state, messages: []};
    default:
      return state;
  }
};

export default messageReducer;
