// @flow

import * as React from 'react';
import {View, Text} from 'react-native';
import type {ViewStyleProp} from 'react-native/Libraries/StyleSheet/StyleSheet';
import {AppColors, AppStyles} from '@styles';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';

type Props = {
  children: React.Node,
  logoAreaStyle?: ViewStyleProp,
};
const AuthView = (props: Props) => {
  return (
    <LinearGradient colors={[AppColors.BACKGROUND_LIGHT, AppColors.BACKGROUND_DEEP]} style={styles.container}>
      <View style={[AppStyles.columnCenter, props.logoAreaStyle]}>
        <Text style={[styles.logoText]}>LingvoReader</Text>
      </View>
      {props.children}
    </LinearGradient>
  );
};

export default AuthView;