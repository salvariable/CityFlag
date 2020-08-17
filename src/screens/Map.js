import React from 'react';
import {View} from 'react-native';
import MapView from 'react-native-maps';

export default () => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <MapView
        provider={'google'}
        style={{flex: 1}}
        region={{
          latitude: 4.606657,
          longitude: -74.055783,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      />
    </View>
  );
};
