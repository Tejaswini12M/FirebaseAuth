import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createStackNavigator, createAppContainer} from 'react-navigation';

import * as firebase from 'firebase';

// import all screens

import HomeScreen from './screen/HomeScreen';
import LoadingScreen from './screen/LoadingScreen';
import SignupScreen from './screen/SignupScreen';
import SigninScreen from './screen/SigninScreen';

var config = {
  apiKey: "AIzaSyBXAkooHkEeX_acB6i5HLjjr6fa6B71ULE",
  authDomain: "chat-app-9407a.firebaseapp.com",
  databaseURL: "https://chat-app-9407a.firebaseio.com",
  projectId: "chat-app-9407a",
  storageBucket: "chat-app-9407a.appspot.com",
  messagingSenderId: "946087464428",
  appId: "1:946087464428:web:bf41c879e89e6612"
};


firebase.initializeApp(config);

const MainNavigator = createStackNavigator(
  {
    Loading:{screen: LoadingScreen},
    SignIn:{screen: SigninScreen},
    SignUp:{screen: SignupScreen},
    Home:{screen: HomeScreen},
  },
  {
    //launcher screen or default screen or loading screen or initial screen
    initialRouteName: "Loading"
  }
)

//create App container

const App = createAppContainer(MainNavigator);
export default App;
