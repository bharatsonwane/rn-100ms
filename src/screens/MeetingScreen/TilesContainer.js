import React from 'react';
import {View, Dimensions} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {styles} from './styles';

import {Tile} from './Tile';

const TilesContainerUnmemoized = ({
  peerTrackNodes,
  orientation,
  setHmsViewRefs,
  onPeerTileMorePress,
  setIsScreenShared,
}) => {
  const {left, right} = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.page,
        {width: Dimensions.get('window').width - left - right},
      ]}>
      {peerTrackNodes?.map((peerTrackNode, _idx, arr) => (
        <Tile
          key={peerTrackNode.id}
          setHmsViewRefs={setHmsViewRefs}
          onPeerTileMorePress={onPeerTileMorePress}
          orientation={orientation}
          peerTrackNode={peerTrackNode}
          totalTilesInContainer={arr.length}
          setIsScreenShared={setIsScreenShared}
        />
      ))}
    </View>
  );
};

const TilesContainer = React.memo(TilesContainerUnmemoized);

TilesContainer.displayName = 'TilesContainer';

export {TilesContainer};
