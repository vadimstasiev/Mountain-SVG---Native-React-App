import React, { useState, useEffect } from "react";
import { View } from "react-native";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import 'react-native-gesture-handler';

import { Container, Header, Text, Form, Button, Item, Label, Input, Content, Icon } from "native-base";


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';



const Stack = createStackNavigator();

const App = () => {

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home"  screenOptions={{title: 'JournaliZZe'}}>
          <Stack.Screen name="Home">
            {props => <HomeScreen {...props} extraData={{}} />}
          </Stack.Screen>
          <Stack.Screen name="Login">
            {props => <LoginScreen {...props} extraData={{}} />}
          </Stack.Screen>
          <Stack.Screen name="Register">
            {props => <RegisterScreen {...props} extraData={{}} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default App;


