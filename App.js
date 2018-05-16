import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { AppRegistry } from 'react-native';
import { render, document } from 'react';
import { StackNavigator, initialRouteName, headerMode } from 'react-navigation';
import { RootStack } from './Config';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import RootReducer from './assets/components/reducers';
import AccountsPage from './assets/components/pages/accountsPage';
import FBPage from './assets/components/pages/fbPage'
import * as firebase from 'firebase';

//import ScrollReducer from './assets/components/reducers/scrollEvents';
//For Testing
//import TestPage from './assets/components/pages/testPage';
// Connect to Firebase Database
var firebaseConfig = {
  apiKey: "AIzaSyD2SGSt8Bj0QD0gxuhtKKEyGeMbfaSlEyY",
  authDomain: "feedr-36a55.firebaseapp.com",
  databaseURL: "https://feedr-36a55.firebaseio.com",
  projectId: "feedr-36a55",
  storageBucket: "feedr-36a55.appspot.com",
  messagingSenderId: "184026495188"
};
firebase.initializeApp(firebaseConfig);

//Create local store
const store = createStore(RootReducer)

// App Component for Running
export default class App extends React.Component {
  render() {
    return (
        //<RootStack /> is the true code
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}
