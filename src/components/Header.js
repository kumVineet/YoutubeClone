import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {Entypo} from 'react-native-vector-icons/Entypo';




export default function Header(){
  return(
    <View style = {{
        height: 40,
        backgroundColor: "skyblue"
    }}>
     <View>
        <Entypo name = "youtube" size={28} color= "red"/>
     </View>
     <View></View>
    </View>
  );
}
