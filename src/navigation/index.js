import React from 'react';
import screens from '@constants/screens';
import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import AuthWelcomeScreen from '@screens/Auth/AuthWelcomeScreen';

const RouteConfigs = {
  [screens.AuthWelcome]: {
    screen: AuthWelcomeScreen
  },
};
const StackNavigatorConfig = {

};

const AppNavigator = createStackNavigator(RouteConfigs, StackNavigatorConfig);

export default createAppContainer(AppNavigator);

