// @flow

import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

type Props = {

};
export default class AuthWelcomeScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.welcome}>Welcome Screen</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
