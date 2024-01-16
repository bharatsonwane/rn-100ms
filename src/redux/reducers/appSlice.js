import {createSlice, current} from '@reduxjs/toolkit';

import {SUPPORTED_ASPECT_RATIOS} from '../../utils/types';
import {PipModes} from '../../utils/types';

const initialState = {
  peerState: [],
  pipModeStatus: PipModes.INACTIVE,
  rtcStats: {},
  hlsAspectRatio: SUPPORTED_ASPECT_RATIOS[0],
  joinConfig: {
    mutedAudio: true,
    mutedVideo: true,
    mirrorCamera: true,
    skipPreview: false,
    audioMixer: false, // IOS only
    musicMode: false, // IOS only
    softwareDecoder: true, // Android only
    autoResize: false, // Android only
    autoSimulcast: true,
    showStats: false,
    showHLSStats: false,
    enableHLSPlayerControls: true,
    showCustomHLSPlayerControls: false,
  },
};

const ms100Slice = createSlice({
  name: 'ms100Slice',
  initialState: initialState,
  reducers: {
    // appState
    changePipModeStatus: (state, action) => {
      // doubt
      state.pipModeStatus = action.payload;
    },
    setPeerState: (state, action) => {
      Object.entries(action.payload).forEach(([key, value]) => {
        state[key] = value;
      });
    },
    clearPeerData: (state, action) => {
      state.peerState = [];
    },
    changeHLSAspectRatio: (state, action) => {
      // doubt
      state.hlsAspectRatio = action.payload;
    },
    resetJoinConfig: (state, action) => {
      state.joinConfig = initialState.joinConfig;
    },
    changeJoinAudioMuted: (state, action) => {
      state.joinConfig.mutedAudio = action.payload ?? true;
    },
    changeJoinVideoMuted: (state, action) => {
      state.joinConfig.mutedVideo = action.payload ?? true;
    },
    changeMirrorCamera: (state, action) => {
      state.joinConfig.mirrorCamera = action.payload ?? true;
    },
    changeJoinSkipPreview: (state, action) => {
      state.joinConfig.skipPreview = action.payload ?? false;
    },
    changeAudioMixer: (state, action) => {
      state.joinConfig.audioMixer = action.payload ?? false;
    },
    changeMusicMode: (state, action) => {
      state.joinConfig.musicMode = action.payload ?? false;
    },
    changeShowStats: (state, action) => {
      state.joinConfig.showStats = action.payload ?? false;
    },
    changeShowHLSStats: (state, action) => {
      state.joinConfig.showHLSStats = action.payload ?? false;
    },
    changeEnableHLSPlayerControls: (state, action) => {
      state.joinConfig.enableHLSPlayerControls = action.payload ?? true;
    },
    changeShowCustomHLSPlayerControls: (state, action) => {
      state.joinConfig.showCustomHLSPlayerControls = action.payload ?? false;
    },
    changeSoftwareDecoder: (state, action) => {
      state.joinConfig.softwareDecoder = action.payload ?? true;
    },
    changeAutoResize: (state, action) => {
      state.joinConfig.autoResize = action.payload ?? false;
    },
    changeAutoSimulcast: (state, action) => {
      state.joinConfig.autoSimulcast = action.payload ?? true;
    },
    setRTCStats: (state, action) => {
      const {trackId, stats} = action.payload;

      state.rtcStats[trackId] = stats;
    },
  },

  extraReducers: {},
});

export const {
  changePipModeStatus,
  setPeerState,
  clearPeerData,
  changeHLSAspectRatio,
  resetJoinConfig,
  changeJoinAudioMuted,
  changeJoinVideoMuted,
  changeMirrorCamera,
  changeJoinSkipPreview,
  changeAudioMixer,
  changeMusicMode,
  changeShowStats,
  changeShowHLSStats,
  changeEnableHLSPlayerControls,
  changeShowCustomHLSPlayerControls,
  changeSoftwareDecoder,
  changeAutoResize,
  changeAutoSimulcast,
  setRTCStats,
} = ms100Slice.actions;

export default ms100Slice;
