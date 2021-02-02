/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,SafeAreaView,View,Text,
} from 'react-native';
import Home from "./src/screens/Home";


export default function App(){
  return(
    <SafeAreaView>
    <View style = {{flex:1}}>
      <Home/>
    </View>
    </SafeAreaView>
  );
}
