import React from 'react';
import screens from '@constants/screens';
import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import AuthWelcomeScreen from '@screens/Auth/AuthWelcomeScreen';
import AuthDataInputScreen from '@screens/Auth/AuthDataInputScreen';

const RouteConfigs = {
  [screens.AuthWelcome]: {
    screen: AuthWelcomeScreen
  },
  [screens.AuthDataInput]: {
    screen: AuthDataInputScreen
  }
};
const StackNavigatorConfig = {
  defaultNavigationOptions: {
    headerTransparent: true
  }
};

const AppNavigator = createStackNavigator(RouteConfigs, StackNavigatorConfig);

export default createAppContainer(AppNavigator);

