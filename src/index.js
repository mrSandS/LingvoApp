// @flow

import React, {Component} from 'react';
import { Provider } from 'react-redux';
import store from '@redux';
import AppContainer from '@navigation';
import firebase from 'react-native-firebase'

type Props = {};
export default class App extends Component<Props> {
  componentDidMount() {
    // firebase
    //   .auth()
    //   .signInWithEmailAndPassword('egsesmail2019@gmail.com', 'qweASD123')
    //   .then(res => console.log('Res: ', res))
    //   .catch(error => console.log('Error: ', error))
  }
  render() {
    return <Provider store={store}>
      <AppContainer />
    </Provider>
  }
}