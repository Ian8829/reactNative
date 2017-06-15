import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCT_RUl_NF0rGuUSbzzb-K50ZNt8Dpsmr4",
      authDomain: "authentication-3a0f0.firebaseapp.com",
      databaseURL: "https://authentication-3a0f0.firebaseio.com",
      projectId: "authentication-3a0f0",
      storageBucket: "authentication-3a0f0.appspot.com",
      messagingSenderId: "755348762494"
    });
  }

  render() {
    return(
      <View>
        <Header headerText="Authentication"/>
        <Text>An app!</Text>
      </View>
    );
  }
}

export default App;