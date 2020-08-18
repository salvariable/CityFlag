import * as React from 'react';
import {Button, withTheme} from 'react-native-paper';

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
      onPress={() => console.log('Pressed')}>
      {primary ? 'Next' : 'Back'}
    </Button>
  );
});
