import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export let LiveStates;
(function (LiveStates) {
  LiveStates[(LiveStates['LIVE'] = 10)] = 'LIVE';
  LiveStates[(LiveStates['BEHIND_LIVE'] = 20)] = 'BEHIND_LIVE';
  LiveStates[(LiveStates['LOADING_LIVE'] = 30)] = 'LOADING_LIVE';
})(LiveStates || (LiveStates = {}));

const LiveButton = ({
  containerStyle,
  isLive,
  onPress,
  disabled,
  size = 'normal',
}) => {
  const textStyle = size !== 'normal' ? {fontSize: 10} : null;
  const indicatorStyle =
    size !== 'normal' ? {width: 4, height: 4, borderRadius: 2} : null;
  const pressableStyle = size !== 'normal' ? {padding: 4} : null;

  return (
    <View style={containerStyle}>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.touchable, pressableStyle]}
        disabled={disabled}>
        <View
          style={[
            styles.liveIndicator,
            indicatorStyle,
            {backgroundColor: isLive ? 'red' : 'gray'},
          ]}
        />
        <Text style={[styles.liveText, textStyle]}>LIVE</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LiveButton;

const styles = StyleSheet.create({
  touchable: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  liveText: {
    color: '#fff',
  },
  liveIndicator: {
    width: 8,
    height: 8,
    backgroundColor: 'red',
    borderRadius: 4,
    marginRight: 4,
  },
});
