import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import {withTheme} from 'react-native-paper';
import ListElement from '../components/ListElement';
import I18n from '../i18n/i18n';

export default withTheme(({theme, navigation, route}) => {
  const {subcategories} = route.params;

  const renderSubcategories = () => {
    const elementsArray = Object.keys(subcategories).map(
      (key) => subcategories[key],
    );

    return elementsArray.map((element, index) => (
      <ListElement
        value={element}
        key={index}
        navigation={navigation}
        target={'Details'}
      />
    ));
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.primary,
        justifyContent: 'space-around',
      }}>
      <View style={{margin: 16, justifyContent: 'space-between'}}>
        <Text style={{fontSize: 24, fontWeight: 'bold'}}>
          {I18n.t('subcategoriesTitle')}
        </Text>
        <Text style={{fontSize: 16, fontFamily: 'American Typewriter'}}>
          {I18n.t('subcategoriesSubtitle')}
        </Text>
      </View>
      <ScrollView>{renderSubcategories()}</ScrollView>
    </View>
  );
});
