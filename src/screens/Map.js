import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

export default () => {
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    Geolocation.getCurrentPosition((info) => setCurrentLocation(info.coords));
  }, []);

  if (currentLocation) {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <MapView
          provider={'google'}
          style={{flex: 1}}
          region={{
            ...currentLocation,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        />
      </View>
    );
  }

  return [];
};
