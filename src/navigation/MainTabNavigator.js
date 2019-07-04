import React from 'react';
import screens from '@constants/screens';
import {
  createBottomTabNavigator,
} from 'react-navigation';
import HomeScreen from '@screens/HomeScreen';

const RouteConfigs = {
  [screens.Home]: {
    screen: HomeScreen
  },
};
const TabNavigatorConfig = {

};

const MainTabNavigator = createBottomTabNavigator(RouteConfigs, TabNavigatorConfig);

export default MainTabNavigator;