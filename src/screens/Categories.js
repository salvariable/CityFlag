import React from 'react';
import {View, Text} from 'react-native';
import {categories} from '../assets/heyirys_covid.json';
import ListElement from '../components/ListElement';
import ActionButton from '../components/ActionButton';
import I18n from '../i18n/i18n';
import {withTheme} from 'react-native-paper';

export default withTheme(({navigation, theme}) => {
  const renderImages = () => {
    const elementsArray = Object.keys(categories).map((key) => categories[key]);
    const sortedElements = elementsArray.sort((a, b) =>
      a.order.localeCompare(b.order),
    );
    return sortedElements.map((element) => (
      <ListElement
        value={element}
        key={element.order}
        navigation={navigation}
        target={
          element.icon && element.subcategories
            ? 'Subcategories'
            : !element.icon
            ? 'Details'
            : 'Categories'
        }
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
          {I18n.t('categoryTitle')}
        </Text>
        <Text style={{fontSize: 16}}> {I18n.t('categorySubtitle')}</Text>
      </View>

      <View>{renderImages()}</View>

      <View style={{flexDirection: 'row'}}>
        <ActionButton version={'secondary'} />
        <ActionButton version={'primary'} />
      </View>
    </View>
  );
});
