import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ToastAndroid
} from 'react-native';
import Main from './src/components/Main';
class App extends Component {
  render(){
    return (
      <>
        <View>
          <Main/>
        </View>
      </>
    )
  }
}
export default App;
