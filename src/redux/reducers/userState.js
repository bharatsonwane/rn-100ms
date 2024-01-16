import {getMeetingCode, getMeetingUrl} from '../../utils/functions';
import ActionTypes from '../actionTypes';

const INITIAL_STATE = {
  userName: '',
  roomID: getMeetingUrl(),
  roomCode: getMeetingCode(),
  isHLSFlow: true,
  roles: [],
  hmsSessionStore: null,
  spotlightTrackId: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.SAVE_USER_DATA.REQUEST:
      return {
        ...state,
        ...action.payload,
      };
    case ActionTypes.CLEAR_HMS_INSTANCE:
      return {
        ...state,
        hmsInstance: undefined,
        hmsSessionStore: null,
        spotlightTrackId: null,
      };
    default:
      return state;
  }
};

export default userReducer;
