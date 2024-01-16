import actionTypes from '../actionTypes';

export const addMessage = data => ({
  type: actionTypes.ADD_MESSAGE_REQUEST,
  payload: data,
});

export const addPinnedMessage = data => ({
  type: actionTypes.ADD_PINNED_MESSAGE_REQUEST,
  payload: data,
});

export const clearMessageData = () => ({
  type: actionTypes.CLEAR_MESSAGE_DATA_REQUEST,
});

export const setPeerState = data => ({
  type: actionTypes.SET_PEER_STATE,
  payload: data,
});

export const changePipModeStatus = pipModeStatus => ({
  type: actionTypes.CHANGE_PIP_MODE_STATUS,
  payload: {pipModeStatus},
});

export const clearPeerData = () => ({
  type: actionTypes.CLEAR_PEER_DATA_REQUEST,
});

export const saveUserData = data => ({
  type: actionTypes.SAVE_USER_DATA_REQUEST,
  payload: data,
});

export const clearHmsReference = () => ({
  type: actionTypes.CLEAR_HMS_INSTANCE,
});

export const resetJoinConfig = () => ({type: actionTypes.RESET_JOIN_CONFIG});

export const changeJoinAudioMuted = value => ({
  type: actionTypes.CHANGE_JOIN_AUDIO_MUTED,
  payload: {mutedAudio: value},
});

export const changeJoinVideoMuted = value => ({
  type: actionTypes.CHANGE_JOIN_VIDEO_MUTED,
  payload: {mutedVideo: value},
});

export const changeMirrorCamera = value => ({
  type: actionTypes.CHANGE_MIRROR_CAMERA,
  payload: {mirrorCamera: value},
});

export const changeJoinSkipPreview = value => ({
  type: actionTypes.CHANGE_JOIN_SKIP_PREVIEW,
  payload: {skipPreview: value},
});

export const changeAudioMixer = value => ({
  type: actionTypes.CHANGE_AUDIO_MIXER,
  payload: {audioMixer: value},
});

export const changeMusicMode = value => ({
  type: actionTypes.CHANGE_MUSIC_MODE,
  payload: {musicMode: value},
});

export const changeShowStats = value => ({
  type: actionTypes.CHANGE_SHOW_STATS,
  payload: {showStats: value},
});

export const changeShowHLSStats = value => ({
  type: actionTypes.CHANGE_SHOW_HLS_STATS,
  payload: {showHLSStats: value},
});

export const changeShowCustomHLSPlayerControls = value => ({
  type: actionTypes.CHANGE_SHOW_CUSTOM_HLS_PLAYER_CONTROLS,
  payload: {showCustomHLSPlayerControls: value},
});

export const changeEnableHLSPlayerControls = value => ({
  type: actionTypes.CHANGE_ENABLE_HLS_PLAYER_CONTROLS,
  payload: {enableHLSPlayerControls: value},
});

export const changeSoftwareDecoder = value => ({
  type: actionTypes.CHANGE_SOFTWARE_DECODER,
  payload: {softwareDecoder: value},
});

export const changeAutoResize = value => ({
  type: actionTypes.CHANGE_AUTO_RESIZE,
  payload: {autoResize: value},
});

export const changeAutoSimulcast = value => ({
  type: actionTypes.CHANGE_AUTO_SIMULCAST,
  payload: {autoSimulcast: value},
});

export const setRTCStats = (trackId, stats) => ({
  type: actionTypes.SET_RTC_STATS,
  payload: {trackId, stats},
});

export const changeHLSAspectRatio = value => ({
  type: actionTypes.CHANGE_HLS_ASPECT_RATIO,
  payload: {hlsAspectRatio: value},
});
