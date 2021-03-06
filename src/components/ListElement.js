import * as React from 'react';
import {Image} from 'react-native';
import {List} from 'react-native-paper';
import {TouchableHighlight} from 'react-native-gesture-handler';

export default ({value, navigation, target}) => {
  return (
    <TouchableHighlight
      underlayColor={'purple'}
      style={{borderBottomWidth: 1}}
      onPress={() =>
        navigation.navigate(target, {
          subcategories: value.subcategories ? value.subcategories : null,
        })
      }>
      <List.Item
        style={{margin: 16}}
        title={value.name.en}
        left={(props) => (
          <List.Icon
            {...props}
            icon={() => (
              <Image
                style={{
                  width: 48,
                  height: 48,
                  resizeMode: 'contain',
                }}
                source={{
                  uri: value.icon,
                }}
              />
            )}
          />
        )}
      />
    </TouchableHighlight>
  );
};
