import React, {useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text} from 'react-native';
import {HMSHLSPlayer} from '@100mslive/react-native-hms';

import {styles} from './styles';

import {changeShowHLSStats} from '../../redux/reducers/appSlice';
import {HLSPlayerStatsView} from '../../components/HLSPlayerStatsView';
import {HLSPlayerEmoticons} from '../../components/HLSPlayerEmoticons';
import {CustomControls} from '../../components/CustomHLSPlayerControls';

const HLSView = ({room}) => {
  const dispatch = useDispatch();
  const hmsHlsPlayerRef = useRef(null);
  const showHLSStats = useSelector(state => state.app.joinConfig.showHLSStats);
  const showCustomHLSPlayerControls = useSelector(
    state => state.app.joinConfig.showCustomHLSPlayerControls,
  );
  const enableHLSPlayerControls = useSelector(
    state => state.app.joinConfig.enableHLSPlayerControls,
  );
  const hlsAspectRatio = useSelector(state => state.app.hlsAspectRatio);

  const handleClosePress = () => {
    dispatch(changeShowHLSStats(false));
  };

  const hlsPlayerActions = (action, ...args) => {
    switch (action) {
      case 'play': {
        hmsHlsPlayerRef.current?.play(args[0]);
        break;
      }
      case 'stop': {
        hmsHlsPlayerRef.current?.stop();
        break;
      }
      case 'pause': {
        hmsHlsPlayerRef.current?.pause();
        break;
      }
      case 'resume': {
        hmsHlsPlayerRef.current?.resume();
        break;
      }
      case 'seekForward': {
        hmsHlsPlayerRef.current?.seekForward(args[0]);
        break;
      }
      case 'seekBackward': {
        hmsHlsPlayerRef.current?.seekBackward(args[0]);
        break;
      }
      case 'seekToLive': {
        hmsHlsPlayerRef.current?.seekToLivePosition();
        break;
      }
      case 'setVolume': {
        hmsHlsPlayerRef.current?.setVolume(args[0]);
        break;
      }
    }
  };

  return (
    <View style={{flex: 1}}>
      {room?.hlsStreamingState?.running ? (
        room?.hlsStreamingState?.variants?.slice(0, 1)?.map((variant, index) =>
          variant?.hlsStreamUrl ? (
            <View key={index} style={{flex: 1, position: 'relative'}}>
              <HMSHLSPlayer
                ref={hmsHlsPlayerRef}
                aspectRatio={hlsAspectRatio.value}
                enableStats={showHLSStats}
                enableControls={enableHLSPlayerControls}
              />
              <HLSPlayerEmoticons />
              {showHLSStats ? (
                <HLSPlayerStatsView onClosePress={handleClosePress} />
              ) : null}
              {showCustomHLSPlayerControls ? (
                <CustomControls handleControlPress={hlsPlayerActions} />
              ) : null}
            </View>
          ) : (
            <View key={index} style={styles.renderVideo}>
              <Text style={styles.interRegular}>
                Trying to load empty source...
              </Text>
            </View>
          ),
        )
      ) : (
        <View style={styles.renderVideo}>
          <Text style={styles.interRegular}>
            Waiting for the Streaming to start...
          </Text>
        </View>
      )}
    </View>
  );
};
export {HLSView};
