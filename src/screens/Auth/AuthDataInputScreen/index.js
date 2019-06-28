// @flow

import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

type Props = {

};
export default class AuthWelcomeScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Data Input Screen</Text>
      </View>
    );
  }
}