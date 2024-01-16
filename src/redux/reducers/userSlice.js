import {createSlice, current} from '@reduxjs/toolkit';

import {getMeetingUrl} from '../../utils/functions';
import {getMeetingCode} from '../../utils/functions';

const initialState = {
  joinConfig: {
    mutedAudio: true,
    mutedVideo: true,
    mirrorCamera: true,
  },

  userName: '',
  roomLink: getMeetingUrl(),
  roomCode: getMeetingCode(),
  hmsLocalPeer: null,
  hmsInstance: null,
};

const ms100Slice = createSlice({
  name: 'ms100Slice',
  initialState: initialState,
  reducers: {
    // // appReducer
    // resetJoinConfig: (state, action) => {
    //   state.joinConfig = initialState.joinConfig;
    // },
    // changeJoinAudioMuted: (state, action) => {
    //   state.joinConfig.mutedAudio = action.payload;
    // },
    // changeJoinVideoMuted: (state, action) => {
    //   state.joinConfig.mutedVideo = action.payload;
    // },
    // changeMirrorCamera: (state, action) => {
    //   state.joinConfig.mirrorCamera = action.payload;
    // },

    // userReducer
    saveUserDataAction: (state, action) => {
      //   const {userName, roomLink, roomCode, hmsInstance, hmsLocalPeer} =
      //     action.payload;

      Object.entries(action.payload).forEach(([key, value]) => {
        state[key] = value;
      });
    },

    clearHmsReferenceAction: (state, action) => {
      state.hmsInstance = null;
    },
  },

  extraReducers: {},
});

export const {
  resetJoinConfig,
  changeJoinAudioMuted,
  changeJoinVideoMuted,
  changeMirrorCamera,

  saveUserDataAction,
  clearHmsReferenceAction,
} = ms100Slice.actions;

export default ms100Slice;
