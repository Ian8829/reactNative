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
      apiKey: "AIzaSyD1C3tUdmMv0ycioVedTedj0_muPrK2fy8",
      authDomain: "managertree-af0ce.firebaseapp.com",
      databaseURL: "https://managertree-af0ce.firebaseio.com",
      projectId: "managertree-af0ce",
      storageBucket: "managertree-af0ce.appspot.com",
      messagingSenderId: "739866365430"
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