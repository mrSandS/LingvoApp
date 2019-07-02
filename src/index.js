// @flow

import React, {Component} from 'react';
import { Provider } from 'react-redux';
import store from '@redux';
import AppContainer from '@navigation';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return <Provider store={store}>
      <AppContainer />
    </Provider>
  }
}