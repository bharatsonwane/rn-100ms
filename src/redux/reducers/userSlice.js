import {createSlice, current} from '@reduxjs/toolkit';

import {getMeetingUrl} from '../../utils/functions';
import {getMeetingCode} from '../../utils/functions';

const initialState = {
  joinConfig: {
    mutedAudio: true,
    mutedVideo: true,
    mirrorCamera: true,
  },

  // user
  userName: '',
  roomID: getMeetingUrl(),
  roomCode: getMeetingCode(),
  isHLSFlow: true,
  roles: [],
  hmsSessionStore: null,
  spotlightTrackId: null,
};

const ms100Slice = createSlice({
  name: 'ms100Slice',
  initialState: initialState,
  reducers: {
    // userReducer
    saveUserData: (state, action) => {
      //   const {userName, roomLink, roomCode, hmsInstance, hmsLocalPeer} =
      //     action.payload;

      Object.entries(action.payload).forEach(([key, value]) => {
        state[key] = value;
      });
    },

    clearHmsReference: (state, action) => {
      state.hmsInstance = undefined;
      state.hmsSessionStore = null;
      state.spotlightTrackId = null;
    },

    // message
    addPinnedMessage: (state, action) => {
      const pinnedMessage = action.payload;
      state.pinnedMessage = pinnedMessage;
    },

    addMessage: (state, action) => {
      const message = action.payload;
      state.messages = [...state.messages, message];
    },
    clearMessageData: (state, action) => {
      state.message = [];
    },
  },

  extraReducers: {},
});

export const {
  saveUserData,
  clearHmsReference,

  addPinnedMessage,
  addMessage,
  clearMessageData,
} = ms100Slice.actions;

export default ms100Slice;
