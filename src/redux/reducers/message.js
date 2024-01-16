import ActionTypes from "../actionTypes"

const INITIAL_STATE = {
  messages: [],
  pinnedMessage: null
}

const messageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.ADD_PINNED_MESSAGE.REQUEST:
      const pinnedMessage = action.payload
      return { ...state, pinnedMessage }
    case ActionTypes.ADD_MESSAGE.REQUEST:
      const message = action.payload
      return { ...state, messages: [...state.messages, message] }
    case ActionTypes.CLEAR_MESSAGE_DATA.REQUEST:
      return { ...state, messages: [] }
    default:
      return state
  }
}

export default messageReducer
