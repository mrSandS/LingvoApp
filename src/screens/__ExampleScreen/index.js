// @flow

import React, {Component} from 'react';
import {AppStyles} from '@styles';
import {View} from 'react-native';
import Text from '@components/Text';
import styles from './styles';

type Props = {

};
type State = {
  user: ?{}
}
export default class ExampleScreen extends Component<Props, State> {
  render() {
    return (
      <View style={[AppStyles.columnCenter, styles.container]}>
        <Text style={styles.text}>~Example Screen</Text>
      </View>
    );
  }
}