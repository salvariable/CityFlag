import React from 'react';
import {View, Text} from 'react-native';
import {withTheme} from 'react-native-paper';
import {TextInput} from 'react-native-paper';
import I18n from '../i18n/i18n';
import ActionButton from '../components/ActionButton';

export default withTheme(({theme}) => {
  const [input, setInput] = React.useState('');

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.primary,
      }}>
      <View style={{margin: 16, justifyContent: 'space-between'}}>
        <Text style={{fontSize: 24, fontWeight: 'bold'}}>
          {I18n.t('subcategoriesTitle')}
        </Text>
        <Text style={{fontSize: 16, fontFamily: 'American Typewriter'}}>
          {I18n.t('detailsDescription')}
        </Text>
      </View>

      <TextInput
        style={{
          flex: 1,
          margin: 32,
          marginBottom: 256,
          borderWidth: 1,
          borderRadius: 16,
        }}
        placeholder={I18n.t('detailsInstruction')}
        value={input}
        multiline
        maxLength={200}
        numberOfLines={3}
        theme={{
          colors: {
            primary: 'black',
            background: theme.colors.primary,
          },
        }}
        onChangeText={(text) => setInput(text)}
      />

      <View style={{flexDirection: 'row'}}>
        <ActionButton version={'secondary'} />
        <ActionButton version={'primary'} />
      </View>
    </View>
  );
});
