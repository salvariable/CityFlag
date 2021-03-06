/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';
import Map from './src/screens/Map';
import Categories from './src/screens/Categories';
import {createStackNavigator} from '@react-navigation/stack';
import Subcategories from './src/screens/Subcategories';
import Details from './src/screens/Details';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#f7f4ff',
    action: '#d02540',
  },
};

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MenuStack = () => {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="Subcategories" component={Subcategories} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Map" component={Map} />
    </Stack.Navigator>
  );
};

const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer>
        <PaperProvider theme={theme}>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView style={{flex: 1}}>
            <Drawer.Navigator initialRouteName="Home">
              <Drawer.Screen name="Home" component={MenuStack} />
              <Drawer.Screen name="Map" component={Map} />
            </Drawer.Navigator>
          </SafeAreaView>
        </PaperProvider>
      </NavigationContainer>
    </>
  );
};

export default App;
