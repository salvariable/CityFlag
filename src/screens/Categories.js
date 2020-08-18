import React from 'react';
import {View, Text} from 'react-native';
import {categories} from '../assets/heyirys_covid.json';
import ListElement from '../components/ListElement';
import ActionButton from '../components/ActionButton';

export default () => {
  const renderImages = () => {
    const elementsArray = Object.keys(categories).map((key) => categories[key]);
    return elementsArray.map((element) => (
      <ListElement value={element} key={element.order} />
    ));
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#f7f4ff',
        justifyContent: 'space-around',
      }}>
      <View style={{margin: 16, justifyContent: 'space-between'}}>
        <Text style={{fontSize: 24, fontWeight: 'bold'}}>Category</Text>
        <Text style={{fontSize: 16}}>Select an option to continue</Text>
      </View>

      <View>{renderImages()}</View>

      <View style={{flexDirection: 'row'}}>
        <ActionButton version={'secondary'} />
        <ActionButton version={'primary'} />
      </View>
    </View>
  );
};
