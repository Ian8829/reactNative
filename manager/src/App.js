import React, { Component } from 'react';
// import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
// {} is any initial state. optional..
// Store enhancer third..

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyCT_RUl_NF0rGuUSbzzb-K50ZNt8Dpsmr4",
      authDomain: "authentication-3a0f0.firebaseapp.com",
      databaseURL: "https://authentication-3a0f0.firebaseio.com",
      projectId: "authentication-3a0f0",
      storageBucket: "authentication-3a0f0.appspot.com",
      messagingSenderId: "755348762494"
    };
    firebase.initializeApp(config);
  }

  render() {
    return(
      <Provider store={store}>
        <LoginForm/>
      </Provider>
    );
  }
}

export default App;