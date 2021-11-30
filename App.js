import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderTitle} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import LoginScreen from './src/screens/LoginScreen'
import SignupScreen from './src/screens/SignupScreen'
import HomeScreen from './src/screens/HomeScreen'
import ProfileScreen from './src/screens/ProfileScreen'

const MainNavigator = createStackNavigator({
  Login:{screen:LoginScreen},
  Signup:{screen:SignupScreen},
  Profile:{screen:ProfileScreen},
    Home:{screen:HomeScreen},


  

},{

  headerMode:{
    headerLeft: null,
    gesturesEnabled: false,
    headerMode: 'none',
  }
}); 


const App = createAppContainer(MainNavigator);


const MainApp = () => <App  />;
export default App;
