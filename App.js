import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import InputBox from './components/InputBox';
import { Provider } from 'react-redux'
import store from './src/store/index'

export default class App extends Component {



  render() {
    return (
      <Provider store={store}>
        <View>
          <InputBox />
        </View>
      </Provider>
    );
  }
}
