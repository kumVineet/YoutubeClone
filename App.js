/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Provider } from "react-redux";
import { createStore } from "redux";

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./src/screens/Home";
import Search from "./src/screens/Search";
import VideoPlayer from "./src/screens/VideoPlayer"
import Explore from "./src/screens/Explore";
import Subscribe from "./src/screens/Subscribe";
import { Reducer } from "./src/reducers/Reducer"



const store = createStore(Reducer)

const Stack = createStackNavigator()

const Tabs = createBottomTabNavigator()

const RootHome = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home'
          } else if (route.name === 'Explore') {
            iconName = 'explore'
          } else if (route.name === 'Subscribe') {
            iconName = 'subscriptions'
          }

          // You can return any component that you like here!
          return <MaterialIcons name={iconName} size={32} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'gray',
      }}
    >
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Explore" component={Explore} />
      <Tabs.Screen name="Subscribe" component={Subscribe} />
    </Tabs.Navigator>
  )
}


export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator headerMode="none">
            <Stack.Screen name="rootHome" component={RootHome} />
            <Stack.Screen name="search" component={Search} />
            <Stack.Screen name="videoplayer" component={VideoPlayer} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
  );
}
