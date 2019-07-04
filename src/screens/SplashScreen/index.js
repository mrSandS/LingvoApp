// @flow

import React, {Component} from 'react';
import {AppStyles} from '@styles';
import firebase from 'react-native-firebase'
import screens from '@constants/screens';
import {View} from 'react-native';
import Text from '@components/Text';
import styles from './styles';

type Props = {

};
type State = {
  user: ?{}
}
export default class SplashScreen extends Component<Props, State> {
  unsubscribe: () => void;
  componentDidMount() {
    this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setTimeout(() => {
        !!user
          ? this.props.navigation.navigate(screens.MainTabs)
          : this.props.navigation.navigate(screens.AuthStack);
      }, 1000);
    });
  }
  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }
  render() {
    return (
      <View style={[AppStyles.columnCenter, styles.container]}>
        <Text style={styles.text}>Splash</Text>
      </View>
    );
  }
}