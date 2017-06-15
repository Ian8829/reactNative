import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: false };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCT_RUl_NF0rGuUSbzzb-K50ZNt8Dpsmr4",
      authDomain: "authentication-3a0f0.firebaseapp.com",
      databaseURL: "https://authentication-3a0f0.firebaseio.com",
      projectId: "authentication-3a0f0",
      storageBucket: "authentication-3a0f0.appspot.com",
      messagingSenderId: "755348762494"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  render() {
    return(
      <View>
        <Header headerText="Authentication"/>
        <LoginForm />
      </View>
    );
  }
}

export default App;