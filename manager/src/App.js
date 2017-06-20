import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
