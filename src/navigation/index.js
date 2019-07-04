import React from 'react';
import screens from '@constants/screens';
import {
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';
import AuthStackNavigator from './AuthStackNavigator';
import MainTabNavigator from './MainTabNavigator';
import SplashScreen from '@screens/SplashScreen';

const RouteConfigs = {
  [screens.Splash]: {
    screen: SplashScreen
  },
  [screens.AuthStack]: {
    screen: AuthStackNavigator
  },
  [screens.MainTabs]: {
    screen: MainTabNavigator
  },
};
const SwitchNavigatorConfig = {
  initialRouteName: screens.AuthStack
};

const AppNavigator = createSwitchNavigator(RouteConfigs, SwitchNavigatorConfig);

export default createAppContainer(AppNavigator);

