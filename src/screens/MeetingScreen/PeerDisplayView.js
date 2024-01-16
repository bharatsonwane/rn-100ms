import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {HMSVideoViewMode, HMSTrackSource} from '@100mslive/react-native-hms';
import {useSelector} from 'react-redux';

import {styles} from './styles';

import {getInitials, isTileOnSpotlight} from '../../utils/functions';

const PeerDisplayViewUnmemoized = React.forwardRef(
  ({isDegraded, isLocal, peer, videoTrack}, hmsViewRef) => {
    const HmsView = useSelector(
      state => state.ms100.hmsInstance?.HmsView || null,
    );
    const mirrorCamera = useSelector(
      state => state.app.joinConfig.mirrorCamera,
    );
    const autoSimulcast = useSelector(
      state => state.app.joinConfig.autoSimulcast,
    );
    const spotlightTrackId = useSelector(state => state.ms100.spotlightTrackId);

    if (!HmsView) {
      return null;
    }

    // Check if selected tile is "On Spotlight"
    const {onSpotlight} = isTileOnSpotlight(spotlightTrackId, {
      tileVideoTrack: videoTrack,
      peerRegularAudioTrack: peer.audioTrack,
      peerAuxTracks: peer.auxiliaryTracks,
    });

    return (
      <View style={peerDisplayViewStyles.container}>
        {videoTrack?.isMute() || videoTrack?.trackId === undefined ? (
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>{getInitials(peer.name)}</Text>
            </View>
          </View>
        ) : (
          <View style={styles.flex}>
            <HmsView
              ref={hmsViewRef}
              // setZOrderMediaOverlay={miniView}
              trackId={videoTrack?.trackId}
              key={videoTrack?.trackId}
              autoSimulcast={autoSimulcast}
              mirror={
                isLocal && mirrorCamera !== undefined ? mirrorCamera : false
              }
              scaleType={
                onSpotlight ||
                (videoTrack?.source !== undefined &&
                  videoTrack?.source !== HMSTrackSource.REGULAR)
                  ? HMSVideoViewMode.ASPECT_FIT
                  : HMSVideoViewMode.ASPECT_FILL
              }
              style={
                videoTrack?.source !== undefined &&
                videoTrack?.source !== HMSTrackSource.REGULAR
                  ? styles.hmsViewScreen
                  : styles.hmsView
              }
            />
            {isDegraded && (
              <View style={styles.degradedContainer}>
                <View style={styles.avatarContainer}>
                  <Text style={styles.degradedText}>Degraded</Text>
                </View>
              </View>
            )}
          </View>
        )}
      </View>
    );
  },
);

PeerDisplayViewUnmemoized.displayName = 'PeerDisplayViewUnmemoized';

const PeerDisplayView = React.memo(PeerDisplayViewUnmemoized);

PeerDisplayView.displayName = 'PeerDisplayView';

const peerDisplayViewStyles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    overflow: 'hidden',
  },
});

export default PeerDisplayView;
