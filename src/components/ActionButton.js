import * as React from 'react';
import {Button, withTheme} from 'react-native-paper';
import I18n from '../i18n/i18n';

export default withTheme(({version, theme}) => {
  const primary = version === 'primary' ? true : false;
  return (
    <Button
      style={{
        margin: 8,
        padding: 8,
        flex: 1,
        borderRadius: 16,
        borderColor: theme.colors.action,
        borderWidth: 2,
      }}
      color={theme.colors.action}
      // theme={theme}
      mode={primary ? 'contained' : 'outlined'}
      uppercase={false}
      onPress={() => {}}>
      {primary ? I18n.t('buttonForward') : I18n.t('buttonBack')}
    </Button>
  );
});
