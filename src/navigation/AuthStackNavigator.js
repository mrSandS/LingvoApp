import React from 'react';
import screens from '@constants/screens';
import {
  createStackNavigator,
} from 'react-navigation';
import AuthWelcomeScreen from '@screens/Auth/AuthWelcomeScreen';
import AuthDataInputScreen from '@screens/Auth/AuthDataInputScreen';

const RouteConfigs = {
  [screens.AuthWelcome]: {
    screen: AuthWelcomeScreen
  },
  [screens.AuthSignUpEmail]: {
    screen: AuthDataInputScreen
  },
  [screens.AuthSignUpPassword]: {
    screen: AuthDataInputScreen
  },
  [screens.AuthSignIn]: {
    screen: AuthDataInputScreen
  },
  [screens.AuthForgotPassword]: {
    screen: AuthDataInputScreen
  },
};
const StackNavigatorConfig = {
  defaultNavigationOptions: {
    headerTransparent: true
  }
};

const AuthStackNavigator = createStackNavigator(RouteConfigs, StackNavigatorConfig);

export default AuthStackNavigator;