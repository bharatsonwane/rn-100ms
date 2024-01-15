import * as React from 'react';

import PeerDisplayView from './PeerDisplayView';
import {getTrackForPIPView} from '../../utils/functions';

const PIPView = ({pairedPeers}) => {
  const preferedPeerTrack = getTrackForPIPView(pairedPeers);

  return (
    <PeerDisplayView
      isLocal={preferedPeerTrack?.peer?.isLocal}
      peer={preferedPeerTrack?.peer}
      videoTrack={preferedPeerTrack?.track}
      isDegraded={preferedPeerTrack?.isDegraded}
    />
  );
};

export default PIPView;
